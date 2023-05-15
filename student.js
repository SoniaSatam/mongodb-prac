const express = require('express')
const mongoose = require('mongoose')
const {Schema} = mongoose
const bodyParser = require('body-parser')
const app = express();

const connectToMongo = async () =>{
    const result = await mongoose.connect('mongodb://localhost:27017')
    if(!result.err)
    console.log("connected to Mongo")
}
connectToMongo()
const StudentSchema = new Schema ({
    title: {type: String},
    id: {type: Number}
})

const Student = mongoose.model('collection1', StudentSchema)

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())
app.post('/', (req, res)=>{
    Student.create(req.body)
    .then((d)=>res.send(d))
    .catch((e)=>res.send(e))
})

app.delete('/deleteall', (req,res)=>{
    Student.deleteMany()
    .then((d)=>res.send(d))
    .catch((e)=>res.send(e))
})

app.delete('/', (req,res)=>{
    Student.findOneAndDelete({id: req.body.id})
    .then((d)=>res.send(p))
    .catch((e)=>res.send(e))
})

app.put('/', (req,res)=>{
    Student.findOneAndUpdate({id: req.body.id}, req.body)
    .then(()=>res.send("updated"))    
    .catch((e)=>console.log(e))
})

app.get('/', (req,res)=>{
    Student.find({})
    .then((d)=>res.send(d))
    .catch((e)=>res.send(e))
})

app.get('/one', (req,res)=>{
    Student.findOne({})
    .then((d)=>res.send(d))
    .catch((e)=>res.send(e))
})

app.listen(3001, ()=>console.log('Server Running'))