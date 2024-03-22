const { ATTENDANCE_STATUS_ID_TO_STRING, APPROVAL_STATUS_ID_TO_STRING } = require("../src/constant");

function convertAttendaceConstantToString(form){
    form.approval_status_id =  APPROVAL_STATUS_ID_TO_STRING[form.approval_status_id]
    form.attendance_status_id =  ATTENDANCE_STATUS_ID_TO_STRING[form.attendance_status_id]
    
    if(!form.approval_status_id || !form.attendance_status_id) throw new Error("approval status or attendance status constant out of range")
}

module.exports = convertAttendaceConstantToString 
