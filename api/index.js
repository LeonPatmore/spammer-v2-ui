import postPerformance from "../services/spammer-leader";

export default function (req, res) {
  console.log(req.url);
  res.end(JSON.stringify({ hu: "hello!" }));
}
