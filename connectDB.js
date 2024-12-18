const mongoose = require('mongoose');

let connectDB = () => {
    let DB_url = process.env.DB_URL;
    main()
        .then(() => {
            console.log("DB connection successful");
        })
        .catch((err) => console.log(err));
    
    async function main() {
        await mongoose.connect(DB_url);
    }
}

module.exports = connectDB;