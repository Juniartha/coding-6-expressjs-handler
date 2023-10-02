// import library express js
const express = require('express');
const app = express(); // call function express
const port = 3000; // define port varaibel
const Sequelize = require('sequelize');

// import bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

//create logger middleware
function loggerMiddleware(req, res, next) {
    console.log(`reques received at ${new Date()}`);
    next();//continue process to next function
}
app.use(loggerMiddleware);

// create http method get for customers
app.get('/api/customers', (req, res) => {
    const {keyword, category, limit} = req.query; // req query string by keyword, category, limit
    res.status(200).json({
        massage: 'berhasil get data',
        data: 
        [
        {
            nama: 'angga Juniartha',
            email: 'anggajuniartha@gmail.com',
            role: 'backend'
        },
        {
            nama: 'made toni',
            email: 'toni123@gmail.com',
            role: 'ui/ux'
        },
        {
            nama: 'hendra',
            email: 'hendra@gmail.com',
            role: 'frontend'
        },
        ],
        pagination:{
            total_record: 100,
            current_page: 1,
            total_pages: limit
        },
        search:{
            keyword: keyword,
            category: category
        }

    })
});

//create handling http post for api customers
app.post('/api/customers', (req, res) => {
    
    const { nama, email, role } = req.body;
    res.status(201).json({
        massaged: "create data customer successfully",
        data :{
            nama : nama,
            email: email,
            role: role
        }
    })
});

//create handling http get detail for api customers
app.get('/api/customers/:id', (req, res) => {
    const customerID = req.params.id; // reques param by customerID
    res.status(201).json({
        code: 200,
        massage: 'berhasil get data',
        data: 
        {
            customerID: customerID,
            nama: 'angga Juniartha',
            email: 'anggajuniartha@gmail.com',
            role: 'backend'
        }
    })
});


// app listening on port 3000
app.listen(3000, () => {
    console.log(`app is listening on ${port}`);
});

