const express = require("express");
const cors = require("cors");
const Students = require("./database");
const app = express();

app.use(express.json());
app.use(cors());


app.get('/students', async (req, res) => {
  const students = await Students.getAll();

  res.json(students);
});

app.get('/students/:id', async (req, res) => {
  const studentId = req.params.id;
  const student = await Students.getOne(studentId)
  
  res.json(student);
});

app.post('/students', async (req, res) => {
  const newStudent = req.body;
  const addedStudent = await Students.add(newStudent);
  
  res.json(addedStudent);
});

app.put('/students/:id', async (req, res) => {
  const studentId = req.params.id;
  const updatedStudent = req.body;
  const isUpdated = await Students.update(studentId, updatedStudent);
  const allStudents = isUpdated ? await Students.getAll() : null;

  res.json(allStudents);
});

app.delete('/students/:id', async (req, res) => {
  const studentId = req.params.id;
  const isDeleted = await Students.remove(studentId);
  const deleteStudentId = isDeleted ? studentId : null 

  res.json(deleteStudentId);
});

app.post('/login', (req, res) => {
  const user = req.body;
  const result = auth(user);

  res.json(result);
});

app.get('/test', (req, res) => {
  res.json('TEST: server is working');
});

const path = require("path");
app.use(express.static(path.join(__dirname, "ui/build")));
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname + "/ui/build/index.html"));
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));


