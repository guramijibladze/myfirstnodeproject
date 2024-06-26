require('dotenv').config({ path: `${process.cwd()}/.env` });
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

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log('Server up and runing!!!', PORT)
})