const express = require ("express");

const app = express();

const port = 3000;

app.get('/', (req,res) =>{
    return res.send("hello there,here i am surya");

});

app.listen(port, () =>{
    console.log(`Server is up at ${port}`);
})