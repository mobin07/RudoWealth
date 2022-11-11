const express= require('express');
const app=express();
const cors=require('cors')
app.use(express.json());
app.use(cors())
const connect=require("./config/db");
const Driver =require('./controllers/driver.controller');
const Customer =require('./controllers/customers.controller');
const port =8000

app.use("/drivers", Driver);
app.use("/customers", Customer);
app.listen(port,async()=>{
    try
        {
            await connect();
        }
    catch(err)
        {
            console.log({err:err.message})
        }

    console.log(`listening on port ${port}`)

})
