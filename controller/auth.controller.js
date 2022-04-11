const Login =(req, res)=>{
    res.send('Login Successfully')
}


const register = (req, res)=>{
    res.send('Registration successful')
}


module.exports = {
    Login, register
}