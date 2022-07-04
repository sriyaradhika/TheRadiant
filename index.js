const express = require('express') 
const bodyparser = require('body-parser') 
const path = require('path') 
const app = express() 

var Publishable_Key = 'pk_test_51KSWP1SAVfT947TOjZEffpwvacsvhb0WB6Nb6bZ18aFUv9mlzWIJKnXz0NOmSWBgePzOX67saxZiwXhTE3JDw02Z00lcyhF51L'
var Secret_Key = 'sk_test_51KSWP1SAVfT947TOmHbHr78O9vVkb0lJnqCKm4Aa5wxfgw1FTmvrtQEj3mqnVNd3vZaf0v20LmBB8vOPeTxVW7VN00ZyWN87OY'

const stripe = require('stripe')(Secret_Key) 

const port = process.env.PORT || 3000 

app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 

//hi
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

app.get('/', function(req, res){ 
	res.render('Home', { 
	key: Publishable_Key 
	}) 
}) 

app.post('/payment', function(req, res){ 

	
	stripe.customers.create({ 
		email: req.body.stripeEmail, 
		source: req.body.stripeToken, 
		name: 'The Radiant', 
		address: { 
			line1: ' 94 sector-12 colony', 
			postal_code: '110078', 
			city: 'New Delhi', 
			state: 'Delhi', 
			country: 'India', 
		} 
	}) 
	.then((customer) => { 

		return stripe.charges.create({ 
			amount: 7000,	 
			description: 'Donation website', 
			currency: 'USD', 
			customer: customer.id 
		}); 
	}) 
	.then((charge) => { 
		res.send("Successfully paid") 
	}) 
	.catch((err) => { 
		res.send(err)	 
	}); 
}) 

app.listen(port, function(error){ 
	if(error) throw error 
	console.log("Server created Successfully") 
})