import *  as Core from '@actions/core';
import * as Github from '@actions/github';
// import { Octokit } from "@octokit/rest";

try {
  // `who-to-greet` input defined in action metadata file
  console.log(`Hello start of action!`);
  const nameToGreet = Core.getInput('who-to-greet');
  // const githubToken = Core.getInput('GITHUB_TOKEN');
  const repositoryName = Core.getInput('repositoryName');
  console.log(`Hello ${nameToGreet}!`);
  console.log(`repositoryName ${repositoryName}!`);

  // Octokit.js
  // https://github.com/octokit/core.js#readme
  // const octokit = new Octokit({
  //   auth: githubToken
  // });

  // const tokens = Promise.resolve(octokit.request('GET /repos/{owner}/{repo}/tags', {
  //   owner: 'OWNER',
  //   repo: 'REPO'
  // }))

  // console.log(tokens);

  const time = (new Date()).toTimeString();
  Core.setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(Github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  Core.setFailed(error.message);
}