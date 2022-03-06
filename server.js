
//code for prelogin page 

const express=require('express');
const app=express();
// 

app.use(express.static(__dirname));

app.listen(3000, ()=> {
    console.log('Listening on port http://localhost:3000/prelogin');
});

//home route 
app.get('/prelogin', (req,res) => {
   res.sendFile(__dirname+'/prelogin.html');
}
)

app.get('/login', (req,res) => {
    res.sendFile(__dirname+'/login.html');
 }
 )
