import mongoose from "mongoose"


const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI, {}).then((data) => {
    console.log(`Server Connected to database ${data.connection.host}`)
  })
}

export default connectDatabase
