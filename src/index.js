
import connectDB from './db/index.js';
import dotenv from 'dotenv';
connectDB()



dotenv.config({
    path: './.env'
})




// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on(error, () => {
//             console.error("Error:", error)
//             throw error
//         })
//     } catch (error) {
//         console.error("Error: ", error)
//         throw error
//     }
// })

// app.listen(process.env.PORT || 8000, () => {
//     console.log("Port: ", process.env.port || 8000);


// })