# Contributing to Celestia

Welcome and Thank You for contributing to building Celestia, the first modular
blockchain network. 

In this guide you will find information about how Celestia manages the
`CelestiaOrg` Github as well as expectation around our Engineering Standards.

## Github Management

The `CelestiaOrg` Github uses teams to manage access to the organization and
its repositories. Members of the Celestia core team and key contributors are
added to the Github team that aligns with the scope of work they perform. For
example, those working on the `celestia-node` repository are added to the
`celestia-node` team. 

### Permissions

By default, all teams have Triage access to all repositories in the
`CelestiaOrg` Github. This allows for anyone to help manage issues and pull
request (i.e. adding labels). Teams are given write access to the repositories
that they are responsible for working on. For example, the `celestia-node` team
would have write access to the `celestia-node` repository.

### .github

Celestia utilizes the organization's `.github` repository. This repository is
used to store common organization level content like Github actions, issue
templates, PR templates, etc.

## Development

### What the Fork

The default development flow is to fork the repository that you are working on
in order to submit a PR. If you have write access to a repository, because you
are a member of that sub team, then you can push your development branches
directly to the repository.

### Pull Requests

Celestia has a culture of prioritizing PRs. This prioritization focuses on
unblocking others and finishing work before starting new work. 

As a developer, you are responsible for ensuring your code gets merged. This
means you should be verifying that the appropriate reviewers are assigned and
that you are responding to review comments promptly. When given the choice to
start a new PR or work on closing out an existing PR, you should always choose
closing out the existing PR.

As a reviewer, it is your responsibility to be providing prompt, action oriented
reviews. Clearing out your requests reviews should be a daily activity. Action
oriented reviews means that there is a clear action step for the developer of
the PR to take in order to get the PR approved and merged. Open ended questions
and statements so be avoided. Being clear when a comment is a blocking change,
okay to be a follow up, or just a personal preference enables developers to
effectively implement the feedback on a PR.  

All repos have the following branch protections requirements:
- 2 approvals
- Codeowner approval
- New commits dismiss approvals
- Status checks must be passing
- Conversations must be resolved

### Codeowners

All production repos must use Codeowners. Codeowners are typically the team
leads and/or engineering leadership members. 

