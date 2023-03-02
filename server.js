const app = require("./app");
const dotenv = require("dotenv")
// const { connectToDatabase } = require('./config/database')
const connectDatabase = require("./config/database")

//? Handling Uncaught Exception
process.on("uncaughtException", (err) => {
	console.log(`Error : ${err.message}`)
	console.log("SHUTTING DOWN the server due to Uncaught Exception")
	process.exit(1);
})

//? config
dotenv.config({ path: "config/config.env" })

//? Connecting to database
connectDatabase()
// connectToDatabase()




const server = app.listen(process.env.PORT,async () => {
	// const db = await connectToDatabase();
	console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


process.on("unhandledRejection", (err) => {
	console.log(`Error : ${err.message}`);
	console.log("SHUTTING DOWN the server due to Unhandled Promise Rejection")
	server.close(() => {
		process.exit(1);
	});
})