const express = require("express");
const connecDb = require("./connection");
const useRouter = require("./routes/url");
const app = express();
const PORT = 9990;

connecDb('mongodb://127.0.0.1:27017/miniroute')
.then(()=>console.log("DB connected"))
.catch((error)=>console.log(error))


app.use(express.json());

app.use("/url",useRouter);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(PORT,() =>{
    console.log('Sever Started');
})