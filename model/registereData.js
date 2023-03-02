const mongoose = require("mongoose");

const register = new mongoose.Schema({
	First_name:{
		type: String,
		required:[true,"Please Enter first name"]
	},
	Last_name:{
		type: String,
		required:[true,"Please Enter last name"]
	},
	Contact_no:{
		type: Number,
		required:[true,"Please Enter contact number"]
	},
	Email:{
		type: String,
		required:[true,"Please Enter Email"]
	},
	City:{
		type: String,
		required:[true,"Please Enter City"]
	},
	State:{
		type: String,
		required:[true,"Please Enter State"]
	},
	Pincode:{
		type: Number,
		required:[true,"Please Enter Pincode"]
	},
	Blood_Group:{
		type: String,
		required:[true,"Please Enter Blood Group"]
	},
});

module.exports = mongoose.model("Registered_Donar", register);