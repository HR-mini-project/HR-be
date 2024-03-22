const db = require("../models");
const employee = require("../models/employee")(db.sequelize,db.Sequelize);
const app = require("../src");
const request = require('supertest')


describe("sign up testing", ()=>{

    
    it("POST /signUp should create new employee", async ()=>{
        const res = await request(app)
        .post('/signUp')
        .send({
                nama:"Testing",
                email : "testing@example.com",
                password : "Testing123",
                position : "Software Engineer",
                departement : 2
            })

        expect(res.status).toBe(200)
    })

    test("Check new employee property", async()=>{
        const newEmployee = await employee.findAll({order:[['createdAt',"DESC"]], limit:1})
        
        expect(newEmployee.length).toBe(1)
        expect(newEmployee[0].dataValues.nama).toBe("Testing")
    })

    afterAll(async()=>{
        const newEmployee = await employee.findAll({order:[['createdAt',"DESC"]], limit:1})
        await newEmployee[0].destroy()
    })

})

