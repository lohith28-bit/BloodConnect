
const mongoose = require("mongoose");

const connectDatabase = () => {
	mongoose.set("strictQuery", true);
	mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
		console.log(`Mongodb connected with the server ${data.connection.host}`);
	})
	// .catch((err)=>{
	// 	console.log(err);
	// })

}

module.exports = connectDatabase

