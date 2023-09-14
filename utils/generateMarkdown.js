function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `
## License

This project is licensed under the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about this project, please find me on [GitHub](https://github.com/${
    data.github
  }) or contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
