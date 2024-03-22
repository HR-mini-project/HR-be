const { APPROVAL_STATUS_ID_TO_STRING, ATTENDANCE_STATUS_ID_TO_STRING, APPROVAL_STATUS_STRING_TO_ID, ATTENDANCE_STATUS_STRING_TO_ID } = require("../src/constant")



describe("test fungsional utilitas", ()=>{


    test("penambahan tracking time created/updated pada form", ()=>{
        const addTrackingTime = require("../utils/addTrackingTime")
        const form = {}
        addTrackingTime(form)

        expect(form).toHaveProperty('createdAt')
        expect(form).toHaveProperty('updatedAt')
        expect(form.createdAt).toBeDefined()
        expect(form.createdAt).toBeDefined()    

        const form2 = {createdAt:null, updatedAt:null}
        addTrackingTime(form2)
        expect(form2.createdAt).toBeDefined()
        expect(form2.createdAt).toBeDefined()    
    })

    test("konversi konstan id pada form attendance table ke string ", ()=>{
        const convertAttendaceConstantToString = require("../utils/convertAttendanceConsntantToString")

        const form = {
            approval_status_id : 1,
            attendance_status_id : 1,
        }
        convertAttendaceConstantToString(form)

        expect(form.approval_status_id).toEqual(APPROVAL_STATUS_ID_TO_STRING[1])
        expect(form.attendance_status_id).toEqual(ATTENDANCE_STATUS_ID_TO_STRING[1])
        
        const form2 = {
            approval_status_id : 5,
            attendance_status_id : 5,
        }

        expect(()=>convertAttendaceConstantToString(form2)).toThrowError()
    })

    test("konversi konstan string pada form attendance ke id integer", ()=>{
        const convertAttendanceConstantToId = require("../utils/convertAttendanceConstantToId")
        const form = {
            approval_status_id : "PENDING",
            attendance_status_id : "IZIN"
        }
        convertAttendanceConstantToId(form)


        expect(form.approval_status_id).toEqual(APPROVAL_STATUS_STRING_TO_ID.PENDING)
        expect(form.attendance_status_id).toEqual(ATTENDANCE_STATUS_STRING_TO_ID.IZIN)
        
        const form2 = {
            approval_status_id :"NOT_IMPLEMENTED",
            attendance_status_id :"NOT_IMPLEMENTD",
        }

        expect(()=>convertAttendanceConstantToId(form2)).toThrowError()

    })

    test(" attendance validation", ()=>{
        const hashPassword = require("../utils/hashPassword")
        const password1 = "habilhebat12" 
        const password2 = "habilhebat12"

        expect(hashPassword(password1).length).toBeGreaterThan(100)
        expect(hashPassword(password1)).toBe(hashPassword(password2))
    })

})
