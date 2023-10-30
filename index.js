const express = require("express");
const connecDb = require("./connection");
const URL = require("./models/url");
const useRouter = require("./routes/url");
const path = require ("path");
const app = express();
const PORT = 9990;

connecDb('mongodb://127.0.0.1:27017/miniroute')
.then(()=>console.log("DB connected"))
.catch((error)=>console.log(error))


app.use(express.json());

app.use("/url",useRouter); 
app.set('views', path.resolve('./views'));
app.set("view engine","ejs"); 

app.get('/', async(req, res)=>{
  const allUrls = await URL.find({});
  return res.render('home', { 
      urls: allUrls,
  })
})
app.listen(PORT,() =>{
    console.log('Sever Started');
})