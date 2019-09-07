const express = require("express");
const cors = require("cors");
const {getAll, auth} = require("./database");

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.json('server is working');
});

app.get('/data', (req, res) => {
  console.log('GET: /data')

  res.json(getAll());
});

app.post('/login', (req, res) => {
  const user = req.body;
  const result = auth(user);

  res.json(result);
});





const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));