const express = require("express");
const app = express();
const path = require('path')
const hbs = require('hbs')
app.use(express.json());
const register = require("./model/registereData")
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended:false}))

//? Route Imports
const productRoute = require("./routes/productRoute");

app.use("/api/v1",productRoute);


// ========
const static_path = path.join(__dirname, "./public")
app.use(express.static(static_path))


app.get("",(req,res)=>{
	res.render("index") 
})
app.get("/ReqDonar",(req,res)=>{
	res.render("ReqDonar") 
})
app.get("/search",(req,res)=>{
	res.render("search") 
})
app.get("/reading1",(req,res)=>{
	res.render("reading1")
})
app.get("/reading2",(req,res)=>{
	res.render("reading2")
})
app.get("/reading3",(req,res)=>{
	res.render("reading3")
})
app.get("/reading4",(req,res)=>{
	res.render("reading4")
})

app.post("/register", async (req,res)=>{
	try{
		const registeredData = new register({
			First_name: req.body.First_name,
			Last_name: req.body.Last_name,
			Contact_no: req.body.Contact_no,
			Email: req.body.Email, 
			City: req.body.City,
			State: req.body.State, 
			Pincode: req.body.Pincode, 
			Blood_Group: req.body.Blood_Group
		})

		const data = await registeredData.save()
		res.status(201).render("index")
	}catch(error){
		res.status(404).send(error)
	}
})

app.post("/requestDonar", async (req, res) => {
	try {
		const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Blood Group: ${req.body.Blood_Grp}</li>
      <li>Contact Number: ${req.body.phone}</li>
      <li>Email: ${req.body.email}</li>
      <li>City: ${req.body.City}</li>
      <li>State: ${req.body.State}</li>
      <li>Address: ${req.body.Address}</li>
      <li>Pincode: ${req.body.Pincode}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>`;
		const data = await register.find({}, { Email: 1, _id: 0 })
		const email = data.map(obj => obj.Email);
		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: `${process.env.USER}`,
				pass: `${process.env.PASSWORD}`
			},
			tls: {
				rejectUnauthorized: false
			}
		});
		let message = {
			from: `"BLOOD BANK" ${process.env.USER}`,
			to: email.join(', '),
			subject: 'Blood Donation Request',
			text: 'Testing ....',
			html: output
		};
		transporter.sendMail(message, (error, info) => {
			if (error) {
				res.status(500).send('Error sending email');
			} else {
				res.render('index');
			}
		});
	} catch (error) {
		res.status(404).send(error)
	}

})

app.set('view engine','hbs')

module.exports = app