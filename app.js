import express from "express";
import connect from "./schemas/index.js";
import usersRouter from "./routes/user.router.js"

const app = express()
const port = 1000

connect()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user', [usersRouter])

app.listen(port, () => {
    console.log(port, '서버가 열렸습니다.');
})
