const express = require('express');
const app =  express()
const PORT = 5000
const indexRouter = require('./route/index.router')
const authRouter = require('./route/auth.router')


app.use(express.json())

app.use((req, res, next)=>{
    console.log("Global Middleware");
    next()
})

app.use('/auth', authRouter)


app.use('/', indexRouter)





app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT} 🚀`);
})
