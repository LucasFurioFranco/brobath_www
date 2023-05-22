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


//################################################################

//Routes

const routes = {
  generic: require("./routes/generic")
}

app.use("*", routes.generic)


//################################################################

//Sets the port to be listened
app.listen(port, () => {
  console.log(`${sys_name} listening at http://localhost:${port}`)
});

