const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')



const bodyparser = require('body-parser')
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/demoo')
}

const todo = new mongoose.Schema({
    work:String,
})


const User = mongoose.model('User',todo)


app.get('/api/to-do/',async (req,res)=>{
    const data = await User.find({})
    res.json(data)
})


app.post('/api/to-do/',async (req,res)=>{
    let user = new User();
    user.work = req.body.work
    const doc = await user.save()
    console.log(doc)
    res.end('helloe')
})

app.listen(3000,()=>{
    console.log("App running on 3000 port")
    console.log('DB connected')
})