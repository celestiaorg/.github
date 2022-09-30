const core = require("@actions/core");
const github = require("@actions/github");

(async () => {
  // Grab the docker repository
  let dockerRepo = core.getInput("docker_repository");
  console.log(`Docker Repository ${dockerRepo}`);

  // Set latest_image_tag output
  core.setOutput("latest_image_tag", `${dockerRepo}:latest`);

  // Grab image version
  let imageVersion = core.getInput("version");
  console.log(`Full semver version ${imageVersion}`);

  // Trim an leading v
  imageVersion = imageVersion.replace("v", "");
  console.log(`Docker semver version ${imageVersion}`);

  // Set semver_version_image_tag output
  core.setOutput("semver_version_image_tag", `${dockerRepo}:${imageVersion}`);

  // Remove patch version
  let verionArray = imageVersion.split(".");

  // Sanity check
  if (verionArray.length != 3) {
    core.setFailed(`Expected 3 version elements but got ${verionArray.length}`);
    return;
  }

  // Drop the patch version
  verionArray.pop();

  // Rebuild major minor version
  let majorMinor = verionArray.join(".");
  console.log(`Major Minor semver version ${majorMinor}`);

  // Set major_minor_version_image_tag output
  core.setOutput(
    "major_minor_version_image_tag",
    `${dockerRepo}:${majorMinor}`
  );

  // Drop the minor version
  verionArray.pop();

  // Rebuild major version
  let major = verionArray.join(".");
  console.log(`Major semver version ${major}`);

  // Set major_version_image_tag output
  core.setOutput("major_version_image_tag", `${dockerRepo}:${major}`);
})();
