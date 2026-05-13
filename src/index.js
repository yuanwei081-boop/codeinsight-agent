const WorkflowEngine = require('./workflow/Engine');

async function main() {
  const engine = new WorkflowEngine();
  const results = await engine.runFullWorkflow('./');
  console.log('Analysis complete:', results);
}

if (require.main === module) {
  main();
}

module.exports = { WorkflowEngine };

