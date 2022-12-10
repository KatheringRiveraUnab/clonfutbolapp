import express from 'express';
import router from "./Routes/routes.js"

const app = express()
app.use('/api', router)




const puerto = 8000;
app.listen(puerto, ()=>{
    console.log(`Server is listening at http://localhost:${puerto}`)
})