const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./Schema')
const bodyparser = require('body-parser');

app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
const dbUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT
//console.log(process.env.DATABASE_URL)
//console.log(typeof(dbUrl))

main().catch(err => console.log(err)).then(
    app.listen(Number(PORT),()=>{
        console.log("App running on 3001 port")
    })
);

async function main(){
    console.log('Connected to DB')
    await mongoose.connect(dbUrl)
}


app.get('/api/to-do/',async (req,res)=>{
    const data = await User.find({})
    res.json(data)
})


app.post('/api/to-do/',async (req,res)=>{
    let user = new User();
    user.work = req.body.work
    user.id = req.body.id
    const doc = await user.save()
    res.end()
})

app.delete('/api/to-do/', async(req,res)=>{
    let user = new User();
    await User.deleteOne({id:req.body.id})
    res.end()
})

_dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}
