/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data      = require('./data');
const hostname  = 'localhost';
const defaultPort      = 3035;
const cors = require('cors')


const express = require('express');
const app = express();

app.use(cors());

var corsOptions = {
    origin: 'http://localhost:3030',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

/* Searching results based on the name and the about */
app.get('/api/products',cors(corsOptions), (req, res) => {

    //Empty query string then send array as empty
    if(typeof req.query.name != 'undefined' && !req.query.name.length){
        res.send([]);
        return;  
    }
    if( typeof req.query.name != 'undefined' ){
        let query = req.query.name.toLowerCase()
        const response = data.filter((store)=> (store.name.toLowerCase().includes(query)|| store.about.toLowerCase().includes(query)));
        res.send(response);
        return;
    }
    res.status(400).send("Please pass the query params to search the records");
  });


  app.get('/api/getAllProducts',cors(corsOptions), (req, res) => {
    res.status(200).send(data);
  });


/*
 * Creates an Express application. 
 * The express() function is a top-level function exported 
 * by the express module.  
 */

const port = process.env.PORT || defaultPort;

app.listen(port, ()=>{
    console.log(`[Server running on ${hostname}:${port}]`);
})


