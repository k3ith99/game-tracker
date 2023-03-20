const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
app.use(express.json())
app.use(cors());



app.get('/',(req,res) => {
    res.send("Welcome to Keith's game tracker!")

})
const gamesRoutes = require('./games');
app.use('/', gamesRoutes )

app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`)
})

module.exports = app; 
