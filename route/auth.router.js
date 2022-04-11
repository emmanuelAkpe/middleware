const {Router} = require('express')
const {Login, register} = require('../controller/auth.controller')

const authRouter = Router()

authRouter.get('/login', Login)
authRouter.get('/register', register)



module.exports = authRouter