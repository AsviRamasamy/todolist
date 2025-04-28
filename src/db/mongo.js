const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "asvinaa123"
const DATABASE_NAME = 'sample_mflix';
const CONNECTION_URI = `mongodb+srv://asvinaa:asvinaa123@todo.eqewhkm.mongodb.net/?retryWrites=true&w=majority&appName=todo`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'asvinaa',
        pass: PASSWORD
    });
}

main().then(()=>{
    console.log(`MongoDb connected`);
}).catch(console.log);


