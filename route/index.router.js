const {Router} = require('express')
const {greet, welcome, protected} = require('../controller/index.controller')
const {authRequired} = require('../middleware/auth.middleware')

const indexRouter = Router()

indexRouter.use((req, res, next)=>{
    console.log("specific route");
    next()
})

indexRouter.get('/', welcome)

indexRouter.get('/greet', greet)

indexRouter.post('/protected', authRequired,protected )


module.exports = indexRouter