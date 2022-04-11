const authRequired = (req, res, next)=>{
    const body = req.body


    if(body.username!=='star' && body.password !=='secret'){
        res.send('Invalid credentials')

    }

    next()
}

module.exports = {
    authRequired
}