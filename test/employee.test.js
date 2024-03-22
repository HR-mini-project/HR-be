const db = require("../models");
const employee = require("../models/employee")(db.sequelize,db.Sequelize);
const app = require("../src");
const request = require("supertest");

describe("/employee endpoint testing", () => {
    let employeeToken = null;
    let adminToken = null;

    // dapetin token employee/admin
    beforeAll(async () => {
        const res = await request(app).post("/signIn").send({
            email: "cepi@gmail.com",
            password: "123",
        });

        const res2 = await request(app).post("/signIn").send({
            email: "tesssss@example.com",
            password: "Habilgan123",
        });


        employeeToken = res.body.token;
        adminToken = res2.body.token;
    });

    test("GET /employee by admin", async () => {
        const res = await request(app)
            .get("/employee?page=2&limit=2")
            .set("Authorization", `Bearer ${adminToken}`);

        const totalItems = 2
        expect(res.body.length).toBeGreaterThanOrEqual(totalItems);
    });

    test("GET /employee by employee should restricted", async () => {
        const res = await request(app)
            .get("/employee")
            .set("Authorization", `Bearer ${employeeToken}`);

        const forbidden = 403
        expect(res.status).toBe(forbidden);
    });

    test("GET /employee/:id by admin", async () => {
        const res = await request(app)
            .get("/employee/333333333")
            .set("Authorization", `Bearer ${adminToken}`);

        const mustAvailableProperty = {
            nip : "nip",
            nama: "nama",
            email :  "email",
            authorization_id : "authorization_id"
        }
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty(mustAvailableProperty.nip);
        expect(res.body).toHaveProperty(mustAvailableProperty.nama);
        expect(res.body).toHaveProperty(mustAvailableProperty.email);
        expect(res.body).toHaveProperty(mustAvailableProperty.authorization_id);
    });

    describe("GET /employee/:id by employee",  () => {

        test("should be success to get self id", async () => {
            const res = await request(app)
                .get("/employee/333333333")
                .set("Authorization", `Bearer ${employeeToken}`);

            const success = 200
            expect(res.status).toBe(success);
        });

        test("should restricted to get other employee id", async () => {
            const res2 = await request(app)
                .get("/employee/24.0204.135344-8498")
                .set("Authorization", `Bearer ${employeeToken}`);

            const forbidden = 403
            expect(res2.status).toBe(forbidden);
        });

    });

    test("Admin create new employee" , async ()=>{
       const res = await request(app)
        .post('/employee')
        .set("Authorization",`Bearer ${adminToken}`)
        .send({
            nama : "testinggg",
            position : "DevOps",
            departement : 2,
            email : "testing2@gmail.com",
            password : '123123123'
        })
    
        const createSuccess = 200
        expect(res.status).toBe(createSuccess)
        
        //check created employee
        const newEmployee = await employee.findAll({order:[['createdAt',"DESC"]], limit:1})

        expect(newEmployee[0].dataValues.email).toBe("testing2@gmail.com")
        
    })


    test("DELETE /employee/:id by admin", async ()=>{

        const res = await request(app)
            .delete('/employee/123123123')
            .set("Authorization", `Bearer ${adminToken}`)

        const deleteSuccess = 200
        expect(res.status).toBe(deleteSuccess)

        const res2 = await request(app)
            .get('/employee/123123123')
            .set('Authorization',`Bearer ${adminToken}`)

        //prove if the employe deleted
        const notFound = 404
        expect(res2.status).toBe(notFound)
    })

    test("DELETE /employee/:id by empllyee ", async()=>{
        const res = await request(app)
            .get('/employee/123123123')
            .set("Authorization", `Bearer ${employeeToken}`)

        const forbidden = 403
        expect(res.status).toBe(forbidden)

    })
});
