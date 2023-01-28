//// Step1- create node server
const express = require('express');
const hbs = require('hbs')
const app = express();
const mongoose= require('mongoose')
const myport = process.env.PORT | 4000;
const routes = require('./routes/main')
const Detail = require('./models/Detail')
const Slider = require('./models/Slider')
const Service2 = require('./models/Service') 
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('', routes)
//accessing static elements of public folder
app.use('/static', express.static("public"))

////step2- configuring hbs (template engine)
app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials('views/partials')


////step3- DB connection
mongoose.connect('mongodb://localhost/dynamic_site_data', () => {
    console.log('db connected');
    // Detail.create({
    //     brandName: 'My first Brand',
    //     brandIconUrl: 'https://png.pngtree.com/png-clipart/20210311/original/pngtree-dollar-sign-png-image_6045840.jpg',
    //     links: [
    //         {
    //             label:'Home',
    //             url : '/'
    //         },
    //         {
    //             label: 'Services',
    //             url: '/services'
    //         },
    //         {
    //             label: 'Gallery',
    //             url: '/gallery'
    //         },
    //         {
    //             label: 'About',
    //             url: '/about'
    //         },
    //         {
    //             label: 'Contact Us',
    //             url: '/contact-us'
    //         }
    //     ]
    // })

    // Slider.create({
    //     title: 'Slide-1',
    //     subTitle: 'Rewire brain',
    //     imageUrl: '/static/images/pic1.jpg'
    // },
    // {
    //     title: 'Slide-2',
    //     subTitle: 'Rewire body',
    //     imageUrl: '/static/images/pic2.jpg'
    // },
    // {
    //     title: 'Slide-3',
    //     subTitle: 'Rewire thoghts',
    //     imageUrl: '/static/images/pic3.jpg'
    // }
    
    // )

    // Service2.create({
    //     icon: 'fas fa-book',
    //     title: 'Provide best courses',
    //     desc: 'We provide best courses for placement in top IT companies.',
    //     linkText: 'Check',
    //     actlink: 'https://www.youtube.com/'
    // },
    // {
    //     icon: 'fab fa-accusoft',
    //     title: 'Provide best food',
    //     desc: 'We provide best food for staying fit and healthy.',
    //     linkText: 'learn',
    //     actlink: 'https://www.youtube.com/'
    // }
    // )


})


app.listen(myport, () => {
    console.log('server started at port :',myport);
})




