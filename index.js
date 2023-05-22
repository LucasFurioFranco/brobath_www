const express    = require('express')

const app = express()
const port = 5002;
const sys_name = "www v0"



//################################################################

//MIddlewares

//For "understanding" URL query parameters less painfully
app.use(express.urlencoded({extended: true}));

//For "understanding" JSON payloads less painfully
app.use(express.json())

console.log("Setting view engine to ejs")

//Sets the view engine to use ejs
//app.use("view engine", "ejs")
//console.log("Settled view engine to ejs")



//################################################################

//Routings
console.log("Defining routs")

//app.use( "*", "./routes/generic"  )


app.get("*", (req, res) => {
  res.status(200).json({
    hey: "joe"
  });
})

/*
app.get("*", (req, res) => {
  res.status(200)
     .render("generic.ejs", {
       foo: "bar"
     })
})
*/

console.log("Defined routs")


//################################################################

//Sets the port to be listened
app.listen(port, () => {
  console.log(`${sys_name} listening at http://localhost:${port}`)
});

