import mongoose from "mongoose"

export const dbConnection = async () => {

        try {
            console.info("Conectando a la base de datos ")
            const mongoDB = await mongoose.connect(process.env.BASE_URL_DB)
            console.info("Conexión correcta")
        } catch (error) {
            console.error("error al conectar a la db")
            throw new Error(error);
            
            
        }

}