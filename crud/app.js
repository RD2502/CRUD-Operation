import  express  from 'express';

import connectdb from "./db/connectdb.js";
import web from "./routes/web.js";
const app=express();
const port =process.env.PORT||'3000';
const DATABASE_URL=process.env.DATABASE_URL||"mongodb://127.0.0.1:27017";
connectdb(DATABASE_URL);
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static('public'))
app.use('/',web)
app.set("view engine","ejs");
app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})
