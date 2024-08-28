const express = require('express')
const cors = require('cors')
const app = express()
const ClienteRoutes = require('./routes/ClienteRoutes')
app.use(express.json())
app.use(cors({credentials: true, 
    origin: 'http://localhost:3000'}))
app.use(express.static('public'))
app.use('/clientes',ClienteRoutes)
app.use('/ingredientes',ClienteRoutes)
app.listen(5000)''