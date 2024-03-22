const STATUS_CODE = {
    ERROR : {
        BAD_REQUEST : 400,
        UNAUTHORIZED : 401,
        FORBIDDEN : 403,
        NOT_FOUND : 404,
        CONFLICT : 409,
    },
    SUCCESS : 200,
    SERVER_ERROR : 500,
}

const APPROVAL_STATUS_ID_TO_STRING = {
    1 : 'ACCEPTED',
    2 : 'REJECTED',
    3 : 'PENDING',
}

const APPROVAL_STATUS_STRING_TO_ID = {
    ACCEPTED : 1,
    REJECTED : 2,
    PENDING : 3,
}

const ATTENDANCE_STATUS_STRING_TO_ID = {
    IZIN : 1,
    SAKIT : 2 ,
    CUTI : 3 ,
    HADIR : 4 ,
}

const ATTENDANCE_STATUS_ID_TO_STRING = {
    1 : "IZIN ",
    2 :"SAKIT" ,
    3 : "CUTI ",
    4 :"HADIR" ,
}
const AUTHORIZATION = {
    ADMIN : 1,
    EMPLOYEE : 2,
}

const AUTHORIZATION_TO_STRING = {
    1 : "ADMIN",
    2 : "EMPLOYEE",
}

const TOKEN = {
    VERIFIED : "VERIFIED",
    EXPIRED : "EXPIRED",
    INVALID : "INVALID",
}

const MODELS_PATH = require('path').join(__dirname, '..') + '\\models'

module.exports = {
    AUTHORIZATION_TO_STRING,
    APPROVAL_STATUS_ID_TO_STRING,
    APPROVAL_STATUS_STRING_TO_ID,
    ATTENDANCE_STATUS_ID_TO_STRING,
    ATTENDANCE_STATUS_STRING_TO_ID,
    MODELS_PATH,
    STATUS_CODE,
    TOKEN,
    AUTHORIZATION,
}
