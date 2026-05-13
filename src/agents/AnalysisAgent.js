class AnalysisAgent {
  async analyze(codebasePath) {
    console.log('[AnalysisAgent] Analyzing:', codebasePath);
    return {
      securityIssues: [{ severity: 'high', issue: 'SQL注入风险' }],
      performanceIssues: [{ severity: 'medium', issue: 'N+1 查询问题' }]
    };
  }
}

module.exports = AnalysisAgent;

