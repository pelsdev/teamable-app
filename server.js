const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', (req, res) =>{
   const response = {
        name: "Amiah Scott",
        email: "amiah@gmail.com",
        interest: "Zoology"
 }
    res.send(response)
})

app.post('/update-profile', (req, res) =>{
   const payload =  req.body
   console.log(payload)

   if(Object.keys(payload).length === 0){
    res.status(400).send({error: "empty payload. Couldn't update user profile data"})
   } else{
   res.status(200).send({info: "user data profile updated successfully"})

   }
})

app.listen(2000, function(){
    console.log("app listening on port 2000")
})
