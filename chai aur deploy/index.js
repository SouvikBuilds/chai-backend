require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const gitHubdata = {
  login: "SouvikBuilds",
  id: 214445326,
  node_id: "U_kgDODMgtDg",
  avatar_url: "https://avatars.githubusercontent.com/u/214445326?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/SouvikBuilds",
  html_url: "https://github.com/SouvikBuilds",
  followers_url: "https://api.github.com/users/SouvikBuilds/followers",
  following_url:
    "https://api.github.com/users/SouvikBuilds/following{/other_user}",
  gists_url: "https://api.github.com/users/SouvikBuilds/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/SouvikBuilds/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/SouvikBuilds/subscriptions",
  organizations_url: "https://api.github.com/users/SouvikBuilds/orgs",
  repos_url: "https://api.github.com/users/SouvikBuilds/repos",
  events_url: "https://api.github.com/users/SouvikBuilds/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/SouvikBuilds/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Souvik Chatterjee",
  company: null,
  blog: "",
  location: "Asansol 2, West bengal",
  email: null,
  hireable: null,
  bio: " Passionate coder | Aspiring software engineer | Lifelong learner.Always open to collaboration and learning new things!",
  twitter_username: null,
  public_repos: 82,
  public_gists: 0,
  followers: 0,
  following: 2,
  created_at: "2025-06-02T06:42:39Z",
  updated_at: "2025-06-03T06:42:13Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Souvik Chattejee");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please Login At Chai Aur Code </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2> Chai Aur Code </h2>");
});

app.get("/github", (req, res) => {
  res.json(gitHubdata);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
