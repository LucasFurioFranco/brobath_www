const router = require("express").Router()
const model  = require("../model/db.js")

router.get("*", (req, res) => {
  res.status(200).render("home.ejs", {
    shelfs: {
      slot_1: model.product.search_by_name("")
    }
  })
})

module.exports = router
