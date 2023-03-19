const express = require('express');
const mongoose = require('mongoose');
const Person = require('./models/Person')
const app  = express();

const PORT =  3000;


mongoose.connect('mongodb://mydb/person')
  .then(() => console.log('DB connected!'))
  .catch((err) => console.log(`err`,err));

app.get('/', async (req,res) =>  {
    const person = await Person.find({});
    console.log(`person`,person);
    res.send(person);
});

app.get('/add', async (req,res) => {

    const newPerson = {
        name:req.query.name
    }

    try {
        const result = await Person.create(newPerson);
        res.send(result);
    } catch(e) {
        console.log(`error:`,e);
        res.send(e);
    }

});


app.listen(PORT, () => {
    console.log('Listening on PORT:',PORT);
});
