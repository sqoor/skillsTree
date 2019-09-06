const mongoose = require('mongoose');
const data = require('./data');

mongoose.connect('mongodb://localhost/Db', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});


const getAll = () => {
  console.log('getAll', Array.isArray(data));
  return data;
}

module.exports = {
  getAll
}

