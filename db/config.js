const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-commerce", { family: 4 });


// require('dotenv').config({ path: 'ENV_FILENAME' });
// mongoose.connect(config.DB, { useNewUrlParser: true }))

// const connectDB = async () => {
//     mongoose.connect("mongodb://localhost:27017/e-comm", { strictQuery: false, useNewUrlParser: true, family: 4 });
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('product', productSchema)
//     const data = await product.find();
//     console.warn(data);
// }

// connectDB();
