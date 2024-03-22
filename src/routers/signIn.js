const { Router } = require("express");
const validateSignIn = require("../validation/signInValidation");
const signIn = require("../services/signIn");

const signInRouter = Router()

signInRouter.post('/signin', validateSignIn, signIn)

module.exports = signInRouter
