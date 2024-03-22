require('dotenv').config()

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const employeeRouter = require('./routers/employee')
const signUpRouter = require('./routers/signUp')
const signInRouter = require('./routers/signIn')
const attendanceRouter = require('./routers/attendance')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(employeeRouter)
app.use(signUpRouter)
app.use(signInRouter)
app.use(attendanceRouter)


// app.listen(process.env.EXPRESS_PORT, (req, res) => {
//     console.log('server started')
// })

module.exports = app
