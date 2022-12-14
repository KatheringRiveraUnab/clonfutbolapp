import express from 'express'
import router from "./Routes/routes.js"
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`)
})