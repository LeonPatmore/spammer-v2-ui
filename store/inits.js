import { getPerformanceTests } from "../services/spammer-leader";

async function commitPerformanceTests(commit) {
  return getPerformanceTests().then((performanceTests) => {
    commit("setPerformanceTests", { performanceTests });
  });
}

export default commitPerformanceTests;
