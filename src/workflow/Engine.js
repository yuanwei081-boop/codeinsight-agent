const AnalysisAgent = require('../agents/AnalysisAgent');
const SuggestionAgent = require('../agents/SuggestionAgent');
const ValidationAgent = require('../agents/ValidationAgent');

class WorkflowEngine {
  constructor() {
    this.analysisAgent = new AnalysisAgent();
    this.suggestionAgent = new SuggestionAgent();
    this.validationAgent = new ValidationAgent();
  }

  async runFullWorkflow(codebasePath) {
    const analysis = await this.analysisAgent.analyze(codebasePath);
    const suggestions = await this.suggestionAgent.generateSuggestions(analysis);
    const validation = await this.validationAgent.validate(suggestions);
    
    return { analysis, suggestions, validation };
  }
}

module.exports = WorkflowEngine;

