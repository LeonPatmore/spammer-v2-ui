import { startHttpPerformanceRun } from "../services/spammer-leader";

export default async function (req, res) {
  const testUuid = await startHttpPerformanceRun();
  res.end(JSON.stringify({ hu: "hello!", id: testUuid }));
}
