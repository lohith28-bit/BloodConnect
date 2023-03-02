
const ApiFeatures = require("../Utils/ApiFeatures")
const register = require("../model/registereData")
const Hospital_Data = require("../model/hospital_data")




exports.search_all = async (req, res) => {
	try {
		const resultPerPage = 10;
		
		const apiFeatures = new ApiFeatures(Hospital_Data.find(),req.query).pagination(resultPerPage)
		const data = await apiFeatures.query;
		res.status(200).json({
			success: true,
			data
		})
	}catch(err){
		res.status(500).json({ message : err})
	}
}

	// 	const db = await connectToDatabase();
	// 	const data = await db.collection('Hospital Dataset').find().toArray();
	// 	const data = await 
	// 	res.status(200).json({
	// 		success: true,
	// 		data
	// 	});
	// } catch (err) {
	// 	console.error(err);
	// 	res.status(500).json({ message: 'Internal Server Error' });
	// }
// }


exports.search_near = async (req,res) => {

	const data = await Hospital_Data.find({
			City: {
				$regex: String(req.query.near).trim(),
				$options: 'i'
			}
		})

	res.status(200).json({
		success:true,
		data
	})
};
	


