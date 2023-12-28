import mongoose from "mongoose";

const connect = () => {
    mongoose
        .connect(
            'mongodb+srv://sparta-user:aaaa4321@express-mongo.k5ovafn.mongodb.net/?retryWrites=true&w=majority',
            {
                dbName: 'nodelv1_test'
            },
        )
        .then(() => console.log('MongoDB 연결 성공')) //연결 성공했다면
        .catch((err) => console.log(`MongoDB 연결 실패 ${err}`)) //실패하거나 에러가 발생했다면
}
mongoose.connection.on('error', (err) => {
    console.error('MongoDB 연결 에러', err)
}) //서비스 중 에러

export default connect