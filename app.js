const express = require('express');
const mongoose = require('mongoose');
const Person = require('./models/Person')
const bodyParser = require('body-parser')


const app  = express();

const PORT =  3000;


mongoose.connect(`mongodb://mydb/person`,{ useNewUrlParser: true })
  .then(() => console.log('DB connected!'))
  .catch((err) => console.log(`err`,err));


app.use(bodyParser.urlencoded({ extended: false }))  
app.use(bodyParser.json())


app.get('/api/persons', async (req,res) =>  {
    const person = await Person.find({});
    console.log(`person`,person);
    res.send(person);
});

app.post('/api/persons', async (req,res) => {

    const newPerson = {
        name:req.body.name
    }

    try {
        const result = await Person.create(newPerson);
        res.status(201).send(result);
    } catch(e) {
        console.log(`error:`,e);
        res.send(e);
    }

});


app.listen(PORT, () => {
    console.log('Listening on PORT:',PORT);
});
