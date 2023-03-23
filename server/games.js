const server = require('./server')
const express = require('express')
const router = express.Router()


let completedGames = [{id:1,name:"Assassin`s Creed Origins"}];
//list of completed games
router.get('ompleted_games', (req,res)=> {
    console.log(completedGames)
    res.send(completedGames)
})
//get individual games
router.get("/completed_games/:id", (req,res)=> {
    
    console.log(completedGames.filter((a) => a.id === id)[0])
    //res.send(completedGames[req.params.id])
})
//add to completed games
router.post('/completed_games', (req,res) => {
    const newData = {
        id: completedGames.length+1,
        name: req.body.name
    }
    completedGames.push(newData)
    res.status(201).send()
})


//update completed games
router.patch('/completed_games/:id', (req,res) => {
    let upGame = req.body;
    console.log(upGame)
    const thisGame = completedGames[req.params.id]; 
    console.log(thisGame)
    thisGame.name = upGame.name


    
})


//delete completed games
router.delete('completed_games/:id', (req,res) => {

})

//get wish list



//add to wish list



//sign up user



//login user



module.exports = router;

