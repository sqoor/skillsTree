const express = require("express");
const cors = require("cors");
const {getStudents, addStudent, auth} = require("./database");

const app = express();
app.use(express.json());
app.use(cors());


app.get('/test', (req, res) => {
  res.json('TEST: server is working');
});

app.get('/data', async (req, res) => {
  console.log('GET: /data')

  res.json(await getStudents());
});

app.post('/data', async (req, res) => {
  const newStudent = req.body;
  console.log('POST: /data', newStudent)

  const result = await addStudent(newStudent);

  res.json(result);
});

app.post('/login', (req, res) => {
  const user = req.body;
  const result = auth(user);

  res.json(result);
});


const path = require("path");
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "ui/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname + "/ui/build/index.html"));
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));