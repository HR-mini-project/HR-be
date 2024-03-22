const request = require("supertest");
const app = require("../src");

describe("Sign In Testing", () => {
    it("should be able to login as admin and access /employee", async () => {
        const admiRes = await request(app).post("/signIn").send({
            email: "tesssss@example.com",
            password: "Habilgan123",
        });

        expect(admiRes.status).toBe(200);
        expect(admiRes.body.token.length).toBeGreaterThanOrEqual(100);

        const getEmpoloyeeRes = await request(app)
            .get("/employee")
            .set("Authorization", `Bearer ${admiRes.body.token}`);

        expect(getEmpoloyeeRes.status).toBe(200);
    });

    it("should be able to login as employee and cannot access /employee", async () => {
        const employeeRes = await request(app).post("/signIn").send({
            email: "cepi@gmail.com",
            password: "123",
        });

        expect(employeeRes.status).toBe(200);
        expect(employeeRes.body.token.length).toBeGreaterThanOrEqual(100);

        const getEmpoloyeeRes = await request(app)
            .get("/employee")
            .set("Authorization", `Bearer ${employeeRes.body.token}` );

        expect(getEmpoloyeeRes.status).toBe(403);
    });
});
