const mongoose = require('mongoose')

const dbConnectionString = 'mongodb+srv://elcentino:rock.roll@cluster0-9byhr.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useFindAndModify: false
})

const db = mongoose.connection

db.once('open', () => console.log('Connection to MongoDB Initiated'))

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
  console.log("Connection to Mongoose Established")
});