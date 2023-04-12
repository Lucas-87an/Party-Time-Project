const mongoose = require("mongoose");

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

async function main(){
    try {
        mongoose.set("strictQuery",true);
        mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.x2asoqk.mongodb.net/?retryWrites=true&w=majority`
        )
        console.log("Conectado ao Banco!")
    } catch (error) {
        console.log(`ERRO:${error}`)
    }
}

module.exports = main