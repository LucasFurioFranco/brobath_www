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
  home:               require( "./routes/home"               ),
  department:         require( "./routes/department"         ),
  category:           require( "./routes/category"           ),
  search:             require( "./routes/search"             ),
  product:            require( "./routes/product"            ),
  cart:               require( "./routes/cart"               ),
  register:           require( "./routes/register"           ),
  shipping:           require( "./routes/shipping"           ),
  shipping_addresses: require( "./routes/shipping_addresses" ),
  payment:            require( "./routes/payment"            ),
  payment_register:   require( "./routes/payment_register"   ),
  thankyou:           require( "./routes/thankyou"           ),
  user_data:          require( "./routes/user_data"          ),
  user_purchases:     require( "./routes/user_purchases"     ),
  privacy:            require( "./routes/privacy"            ),
  promotions:         require( "./routes/promotions"         ),
  generic:            require( "./routes/generic"            )

}



app.use( "^/$",                 routes.home               )
app.use( "/home",               routes.home               )
app.use( "/department",         routes.department         )
app.use( "/category",           routes.category           )
app.use( "/search",             routes.search             )
app.use( "/product",            routes.product            )
app.use( "/cart",               routes.cart               )
app.use( "/register",           routes.register           )
app.use( "/shipping",           routes.shipping           )
app.use( "/shipping_addresses", routes.shipping_addresses )
app.use( "/payment",            routes.payment            )
app.use( "/payment_register",   routes.payment_register   )
app.use( "/thankyou",           routes.thankyou           )
app.use( "/user_data",          routes.user_data          )
app.use( "/user_purchases",     routes.user_purchases     )
app.use( "/privacy",            routes.privacy            )
app.use( "/promotions",         routes.promotions         )
app.use( "*",                   routes.generic            )


//################################################################

//Sets the port to be listened
app.listen(port, () => {
  console.log(`${sys_name} listening at http://localhost:${port}`)
});

