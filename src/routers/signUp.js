const { Router } = require("express");
const validateSignUp = require("../validation/signUpValidation");
const signUp = require("../services/signUp");
const generateNip = require("../../utils/generateNip");
const { AUTHORIZATION } = require("../constant");

const signUpRouter = Router()

signUpRouter.post('/signUp', validateSignUp,assignNip, assignAuthId, signUp)

module.exports = signUpRouter

function assignNip(req,res,next){
    req.body.nip = generateNip()
    next()
}

function assignAuthId(req,res,next){
    req.body.authorization_id = AUTHORIZATION.EMPLOYEE
    next()
}
