import express from "express";
import { posts } from './src/mocks/posts.mjs'

const app = express();
const port = 5002;

app.set("json spaces", 2);
app.use(express.json());

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: `Post with id ${id} not found` });
  }
});

app.get("/posts/user/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const userPosts = posts.filter((post) => post.userId === userId);
  res.json(userPosts);
});

app.post("/posts", (req, res) => {
  const post = req.body;
  const data = {
    id: posts.length + 1,
    title: post.title,
    content: post.content,
    userId: post.userId
  }
  posts.push(data);
  res.json(data);
});

app.put("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);
  } else {
    res.status(404).json({ message: `Post with id ${id} not found` });
  }
});

app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    res.json({ message: `Post with id ${id} deleted` });
  } else {
    res.status(404).json({ message: `Post with id ${id} not found` });
  }
});

app.listen(port, () => {
  console.log(`Mock API running at http://localhost:${port}`);
});
