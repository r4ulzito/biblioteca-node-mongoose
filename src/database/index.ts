import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    const nomeDB = "bibliotecanova";
    const url = process.env.URL_DB || "mongodb://localhost:27017/";

    await mongoose.connect(url, {
      dbName: nomeDB,
    });

    console.log("Banco de dados conectado com sucesso!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const disconnectDB = async () => {
  await mongoose.disconnect();
};
