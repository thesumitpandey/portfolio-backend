const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
require('dotenv').config({ path: 'my.env' });
const mongoose=require('mongoose');
const mogoURI='mongodb+srv://thesumitpandey:sumit80390@cluster0.h8nab.mongodb.net/'
const mess=require('./model')




   mongoose.connect(mogoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello from Node.js');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});





app.post('/message', async (req, res) => {
  const { name, email, message } = req.body;
  let success = false;
  try{
    const m=new mess({
  name,email,message
  })
m.save()
success = true;
res.json(success)
}
catch (error){
    console.error(error.message);
    res.json(success)
}
 
});

