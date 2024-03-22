const {  ATTENDANCE_STATUS_STRING_TO_ID, APPROVAL_STATUS_STRING_TO_ID,  } = require("../src/constant");

function convertAttendanceConstantToId(form){
    form.attendance_status_id = ATTENDANCE_STATUS_STRING_TO_ID[form.attendance_status_id]
    form.approval_status_id = APPROVAL_STATUS_STRING_TO_ID[form.approval_status_id]

    if(!form.approval_status_id || !form.attendance_status_id) throw new Error("approval status or attendance status constant out of range")
}

module.exports = convertAttendanceConstantToId
