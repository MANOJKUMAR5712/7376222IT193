const express = require('express')
const app = express()
const PORT = 3000
 app.get('/', (req,res) => res.send('Hello World!'))
 app.get('/praveen',(req,res) => res.send('Name : Manojkumar  Roll no : 7376222IT193'));

 app.listen(PORT, () => console.log(
    `Example app listening at http://localhost:${PORT}`
 ))