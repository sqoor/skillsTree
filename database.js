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


const auth = (user) => {
  console.log('auth', user);

  const dbUser =  {
    name: 'mo.jouza',
    password: '1234567'
  };

  if(user.name === dbUser.name && user.password === dbUser.password)
    return true;

  return false;
}


const getAll = () => {
  return data;
}

module.exports = {
  getAll,
  auth
}

