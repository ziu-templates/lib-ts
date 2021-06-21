/**
 * package.json元数据
 */

module.exports = {
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "Project name",
    },
    description: {
      type: "string",
      required: false,
      message: "Project description",
      default: "use typescript develop lib",
    },
    author: {
      type: "string",
      message: "Author",
    },
    gitCommitMsg: {
      type: "confirm",
      message:
        "Use commitlint to check commit message?(Angular Commit Message)",
    },
    changelog: {
      type: "confirm",
      message: "Use CHANGELOG to your project?",
    },
  },
  filters: {
    "commitlint.config.js": "gitCommitMsg",
    ".huskyrc": "gitCommitMsg",
  },
};
