// const mongoose = require('mongoose')

// const uri = "mongodb+srv://TopBonus:bO3FNWfbRQgEMCT8TbCnFPWLUvs9Bg@topbonusdb.bigloot.vip/TopBonus?retryWrites=true&w=majority"


// const start = async () => 
// {
//     try 
//     {
//         await mongoose.connect(uri)
//         console.log('Connected to the database')
//     }
//     catch (error) 
//     {
//         console.log(error)
//     }
// }


// start()

const express = require('express')
const cors = require('cors')

const app = express()
const port = 80

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})