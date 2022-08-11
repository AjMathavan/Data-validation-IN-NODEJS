const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.listen(5000,()=>{
    console.log('server running on port 5000')
})
