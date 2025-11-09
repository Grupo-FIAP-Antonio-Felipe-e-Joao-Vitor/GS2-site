import mongoose from "mongoose";

// Conexão com banco
mongoose.connect(process.env.DB_STRING);
const db = mongoose.connection;

export default db;