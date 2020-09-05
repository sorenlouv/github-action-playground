const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const myObject = core.getInput('my_object');
  console.log({myObject});
} catch (error) {
  core.setFailed(error.message);
}
