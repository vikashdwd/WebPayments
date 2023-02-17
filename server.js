const express=require("express");

const app=express();

app.listen(3000,(error)=>
{
    if(!error)
console.log("Server is Running");
else
console.log("Server has stopped due to some error");

});
