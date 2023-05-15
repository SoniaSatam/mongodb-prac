const mongoose = require('mongoose');
// console.log("start");
const connectionParams = {
useNewUrlParser: true,
useUnifiedTopology: true,
};
try {
    mongoose.connect('mongodb://0.0.0.0:27017/temp', connectionParams);
    console.log("Connected to database successfully");
    } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
    }
    // console.log("end");
    const kittySchema = new mongoose.Schema({
    name: String
    });
    const Kitten = mongoose.model('Kitten', kittySchema);
    const silence = new Kitten({ name: 'ho ja yaar' });
    console.log(silence.name);
    silence.save();
    const silence2 = new Kitten({ name: 'ho ja yaar please' });
    console.log(silence2.name);
    silence2.save();