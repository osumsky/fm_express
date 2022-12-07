const express = require('express');
const UserController = require('./controllers/user.controller');
const validate = require('./middleware/validate.mw');
const User = require('./models/User')

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.end('Hello from server');
});

app.get('/users', UserController.showUsers);
app.get('/user/:id', UserController.showUserById);
app.post('/user', validate, UserController.createUser);
// app.put('/user/:id', validate, updateUser);
// app.delete('/user/:id', deleteUser);


app.listen(PORT, () => {
  console.log('Server started on PORT = ' + PORT);
});
