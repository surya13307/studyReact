const express = require ("express");

const app = express();

const port = 8000;

app.get('/', (req,res) =>{
    return res.send("hello there,here i am surya");
});

//storing in a method
const admin = (req,res,next) =>{
    return res.send("this is admin");
}

//syntax for middleware ....next() is used here
const isAdmin = (req,res,next) =>{
    console.log("this is admin pro");
    next();
}
const isLoggedIn = (req,res,next) => {
    console.log("you are logged in");
    next();
}

//here it is admin is the method
app.get('/admin',isLoggedIn,isAdmin, admin);//here isAdmin is the middleware

app.get('/signup', (req,res) =>{
    return res.send("Sugnup here");
});

app.get('/login', (req,res) =>{
    return res.send("login here");
});

app.listen(port, () =>{
    console.log(`Server is up at ${port}`);
});