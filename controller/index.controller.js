


const greet =(req, res)=>{
    res.send('<h1>Hello EveryOne 👋</h1>')
}

 const welcome = (req, res)=>{
    res.send('<h1>You are welcome 🤝</h1>')
}

const protected = (req, res)=>{
    res.send('You can see this because you are authenticated')
}



module.exports = {
    greet,
    welcome,
    protected
}

