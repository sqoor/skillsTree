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


const StudentsSchema = new mongoose.Schema({
  student: {
    id: Number,
    name: String
  },
  comp: [
    {
      id: Number,
      name: String,
      level: {
        one: Number,
        two: Number,
        three: Number,
      }
    }
  ]
})

const Students = mongoose.model('students', StudentsSchema);

const getStudents = async () => {
  return await Students.find({})
}

const addStudent = async (newStudent) => {
  const result = await Students.create(newStudent)
  console.log('DB addStudent: result', result);

  return await getStudents();
}

const auth = (user) => {
  console.log('auth', user);

  const dbUser = {
    name: 'mo.jouza',
    password: '1234567'
  };

  if (user.name === dbUser.name && user.password === dbUser.password)
    return true;

  return false;
}



module.exports = {
  getStudents,
  addStudent,
  auth
}

