const router = require("express").Router()
const model  = require("../model/db.js")

router.get("/:prod_id", (req, res) => {
  //req.params = {prod_id : <id here>}
  var prod_id = req.params.prod_id
  var prod = model.product.get_by_id(prod_id)

  res.status(200).render("product.ejs", {
    product_details: prod.result
  })
})

module.exports = router
