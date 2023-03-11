const express = require('express');
const {
   login, registerNewUser, getAllUsersInfo, getUserInfoByItsID,
  } = require('./Controllers/userController');
  const { registerNewCategory } = require('./Controllers/categoryController');
const { validateNewUser } = require('./Middlewares/validateNewUser');
const { validateToken } = require('./Middlewares/validateToken');
const { validateCategoryName } = require('./Middlewares/validateNameCategory');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.post('/login', login);
app.post('/user', validateNewUser, registerNewUser);
app.get('/user', validateToken, getAllUsersInfo);
app.get('/user/:id', validateToken, getUserInfoByItsID);
app.post('/categories', validateToken, validateCategoryName, registerNewCategory);
module.exports = app;
