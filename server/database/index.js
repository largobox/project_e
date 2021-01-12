import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/first_db', {useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if (err) {
        console.error('Error occured while connecting to DB')
    } else {
        console.log('Success connecting to DB')
    }
})

mongoose.connection.once('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.once('disconnected', () => console.log('Disconnected from MongoDB'));
mongoose.connection.on('error', err => console.error('MongoDB connection error: ', err));

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected from MongoDB through app termination');
        process.exit(0);
    });
});