import express from "express";
import { users } from './src/mocks/users.mjs'

const app = express();
const port = 5001;

app.set("json spaces", 2);
app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: `User with id ${id} not found` });
  }
});

app.post("/users", (req, res) => {
  const user = req.body;
  const data = {
    id: users.length + 1,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    age: user.age,
    rating: user.rating,
    isAdmin: user.isAdmin
  }
  users.push(data);
  res.json(data);
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.age = req.body.age;
    user.rating = req.body.rating;
    user.isAdmin = req.body.isAdmin;
    res.json(user);
  } else {
    res.status(404).json({ message: `User with id ${id} not found` });
  }
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: `User with id ${id} deleted` });
  } else {
    res.status(404).json({ message: `User with id ${id} not found` });
  }
});

app.listen(port, () => {
  console.log(`Mock API running at http://localhost:${port}`);
});
