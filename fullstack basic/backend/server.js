import express from "express";

const app = express();

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Server Is Ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Invisible Man",
      content:
        "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
    },
    {
      id: 2,
      title: "Math Problems",
      content: "Why was the math book sad? It had too many problems.",
    },
    {
      id: 3,
      title: "Time Flies",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 4,
      title: "Computer Trouble",
      content: "Why did the computer go to the doctor? It caught a virus.",
    },
    {
      id: 5,
      title: "Elevator Humor",
      content:
        "Why don't elevators ever get lost? They always follow their own path.",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server Is Listening At Port ${port}`);
});
