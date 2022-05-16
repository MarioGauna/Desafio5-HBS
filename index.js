const express = require("express");
const routesProducts= require('./routesProducts.js');
const handlebars=require('express-handlebars');
const app=express();

const PORT=8080;
const server=app.listen(PORT,()=>{
    console.log(`Servidor escuchando puerto ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
);

app.set('view engine', 'hbs');
app.set('views', './views');
app.use("/",routesProducts);
