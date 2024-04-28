const express = require('express')
const authRouter = require('./route/authRoute')
const router = require('./route/authRoute')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Woohoo! REST api are working!',
    })
})

//all route 
app.use('/api/v1/auth', router)

app.listen(3000, () => {
    console.log('Server up and runing!!!')
})