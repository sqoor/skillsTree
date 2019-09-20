const mongoose = require('mongoose');

// mongoose.connect('mongodb://oca:oca1234567@ds219308.mlab.com:19308/oca-skills-tree', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/Db', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});


const StudentSchema = new mongoose.Schema({
  name: String,
  comp1: {
    imitate: Number,
    adapt: Number,
    implement: Number
  },
  comp1: {
    imitate: Number,
    adapt: Number,
    implement: Number
  },
  comp2: {
    imitate: Number,
    adapt: Number,
    implement: Number
  },
  comp3: {
    imitate: Number,
    adapt: Number,
    implement: Number
  },
  comp4: {
    imitate: Number,
    adapt: Number,
    implement: Number
  },
  comp5: {
    imitate: Number,
    adapt: Number,
    implement: Number
  },
  comp6: {
    imitate: Number,
    adapt: Number,
    implement: Number
  },
  comp7: {
    imitate: Number,
    adapt: Number,
    implement: Number
  },
  comp8: {
    imitate: Number,
    adapt: Number,
    implement: Number
  }  
})


const Students = mongoose.model('students', StudentSchema);

const getAll = async () => {
  return await Students.find({})
}

const getOne = async (_id) => {
  return await Students.find({_id})
}

const add = async (newStudent) => {
  return await Students.create(newStudent)
}

const update = async (_id, updatedStudent) => {
  const result = await Students.updateOne({ _id }, updatedStudent)

  return result.n === 1 && result.nModified === 1 && result.ok === 1
}

const remove = async _id => {
  const result = await Students.deleteOne({ _id });

  return result.n === 1 && result.ok === 1 && result.deletedCount === 1;
};


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
  add,
  getAll,
  getOne,
  update,
  remove,
  auth
}

