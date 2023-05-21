const express    = require('express')

const app = express()
const port = 5002;
const sys_name = "www v0"



app.use(express.urlencoded({extended: true}));
app.use(express.json())



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


app.get('/getter', function (req, res) {
  res.status(200);
  res.json({
    "status": 200,
    "message": "success",
    "body":    req.query,
    "payload": {},
    "sys_name": sys_name
  });
});

app.post('/poster', function (req, res) {
  res.status(200);
  res.json({
    "status":  200,
    "message": "success",
    "body":    req.body,
    "payload": {},
    "sys_name": sys_name
  })
})

app.get('*', (req, res) => {
  res.status(404);
  res.json({
    "status":  404,
    "message": "Not Found: Method GET not defined for this path",
    "body":    req.query,
    "payload": {},
    "sys_name": sys_name
  });
})

app.post('*', (req, res) => {
  res.status(404);
  res.json({
    "status":  404,
    "message": "Not Found: Method POST not defined for this path",
    "body":    req.body,
    "payload": {},
    "sys_name": sys_name
  });
})
