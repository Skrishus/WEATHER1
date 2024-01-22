const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("listening to port 3000...");
  });
app.get('/',(req,res)=>{
    res.sendFile('index.html', {root:__dirname});
    
})

app.use((req,res)=>{
    res.sendFile('404.html',{root:__dirname});
})



