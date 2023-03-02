const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	"Sr No":{
		type : Number
	},
	"Blood Bank Name": {
		type: String
	},
	State:{
		type:String
	},
	District:{
		type:String
	},
	City:{
		type:String
	},
	Address:{
		type:String
	},
	Pincode:{
		type:Number
	},
	"Contact No":{
		type:Number
	},
	"Mobile": {
		type: Number
	},
	Helpline:{
		type:Number
	},
	Email: {
		type: String
	},
	Fax: {
		type: String
	},
	"Nodal Officer": {
		type: String
	},
	" Contact Nodal Officer": {
		type: Number
	},
	"Email Nodal Officer": {
		type: String
	},
	"Category": {
		type: String
	},
	" Blood Component Available": {
		type: String
	},
	" Apheresis": {
		type: String
	},
	" Service Time": {
		type: String
	},
	" License #": {
		type: String
	},
	" Date License Obtained": {
		type: String
	},
	" Date of Renewal": {
		type: String
	},
	Latitude: {
		type: String
	},
	Longitude: {
		type: String
	},
	"Blood Group": {
		type: String
	},
})


module.exports = mongoose.model("Hospital Dataset",productSchema);

