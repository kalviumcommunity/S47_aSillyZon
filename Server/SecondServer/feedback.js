const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const FeedModel = require('../src/models/feed')
const Joi = require('joi');
const jwt = require('jsonwebtoken');


require('dotenv').config()

JWT_SECRET_KEY = "Somuya";
const app = express()
app.use(cors())
app.use(express.json())


const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  comments: Joi.string().required()
})
const uri = 'mongodb+srv://somuyak:%40Somuya2004@cluster0.i2b8prd.mongodb.net/aSillyZon?retryWrites=true&w=majority';
mongoose.connect(uri)
.then(()=>{
  console.log('Connected to MongoDB Atlas');

  app.get('/',(req,res)=>{
    FeedModel.find({})
    .then(users=>res.json(users))
  })

  app.post('/update', (req,res)=>{
    const{error,value}=schema.validate(req.body);

    if(error){
      console.log(error.details)
      return res.status(400).json({error:error.details[0].message})
    }else{
      let{name,email,comments}=req.body
      FeedModel.create({name,email,comments})
      .then(meme=>res.json(meme))
      .catch(err=>res.status(400).json({error:err}))
    }
  })

  app.post('/login', (req, res) => {
    const { email, username } = req.body;

    const token = jwt.sign({ email }, JWT_SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({ success: "success" });
});

function authenticateToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
      return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
          return res.status(403).json({ error: 'Forbidden: Invalid token' });
      }
      req.user = decoded;
      next();
  });
}

  app.delete('/deleteUser/:id', (req,res)=>{
    const id = req.params.id
    FeedModel.findByIdAndDelete(id)
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req,res)=>{
  const id = req.params.id
  FeedModel.findByIdAndUpdate({_id:id}, {name:req.body.name,email:req.body.email,comments:req.body.comments})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})



app.get('/users', (req, res) => {
  FeedModel.find({})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
});


})

app.listen(4000,()=>{
  console.log('Server running at http://localhost:4000');
})