const express = require('express');
const routes = express.Router();
const Detail = require('../models/Detail') 
const Slide2 = require('../models/Slider') 
const Service1 = require('../models/Service') 
const Contact = require('../models/Contact'); 
const { response } = require('express');

routes.get('/', async (req,res) => {

    const compasData = await Detail.findOne({'_id' : '63cc4233b4f5596c82835957'})
    //console.log(compasData)

    const mySlide = await Slide2.find()
    // console.log(mySlide)
    const myService = await Service1.find()
    res.render('index',{
        compasData: compasData,
        mySlide: mySlide,
        myService : myService
    });
    
})

routes.get('/gallery', async (req, res) => {

    const compasData = await Detail.findOne({ '_id': '63cc4233b4f5596c82835957' })
    res.render('gallery', {
        compasData: compasData
    });
})

//let alert = require('alert');

//roting form data ising post method
routes.post('/process-contact-form',async (req, res) => {

  
    console.log('form is submitted')
    console.log(req.body)

    // save form data to db
    try{
        const data= await Contact.create(req.body)
        console.log(data)
        // alert("Form Success")  
        res.redirect('/')
    }catch(e)
    {
        console.log(e)
        // alert("Form Failure")
        res.redirect('/')

    }
    
})



module.exports = routes





