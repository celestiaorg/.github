# Contributing to Celestia

Welcome and thank you for contributing to building Celestia, the first modular
blockchain network.

In this guide, you will find information about how the Celestia team manages the
`celestiaorg` Github as well as expectations around our engineering standards.

## Github Management

The `celestiaorg` Github uses teams to manage access to the organization and
its repositories. Members of the Celestia core team and key contributors are
added to the Github team that aligns with the scope of work they perform. For
example, those working on the `celestia-node` repository are added to the
`celestia-node` team.

### Permissions

By default, all teams have `Triage` access to all repositories in the
`celestiaorg` Github. This allows for anyone to help manage issues and pull
requests (i.e. adding labels). Teams are given write access to the repositories
that they are responsible for working on. For example, the `celestia-node` team
would have write access to the `celestia-node` repository.

### Codeowners

All production repos must use Codeowners. Codeowners are typically the team
leads and/or engineering leadership members.

### .github

The Celestia team utilizes the organization's `.github` repository. This
repository is used to store common organization level content like Github
actions, issue templates, PR templates, etc.

### Repository Settings

The following is a list of key settings that should be enabled on all production
repositories:

**Enabled:**

- Issues
- Projects
- Perserve this repository
- Allow merge commits **Forked Repos Only**
- Allow squash merging
  - Default to pull request title
- Always suggest updating pull request branches
- Allow auto-merge
- Automatically delete head branches

**Disabled:**

- Allow merge commits **Except Forked Repos**
- Allow rebase merging

## Development

### What the Fork

The default development flow is to fork the repository that you are working on
in order to submit a PR. If you have write access to a repository, because you
are a member of that sub team, then you can push your development branches
directly to the repository.

### ADRs

For architectural changes or improvements, Celestia uses Architecture Decision
Record (ADRs) to flush out the design scope. These live in the code under
`docs/adr`. PRs are used to open new ADRs for approval.

### Issues

When proposing new work, an issue should be created. Issues can be created for
bugs, feature requests, improvements based on ADRs, etc. Issue templates should
be used whenever possible, but especially for bug reports, feature requests, and
ADRs to ensure all the necessary information is captured.

### Pull Requests

Before opening a PR, make sure that the scope of work was previously
communicated, either via an ADR or an issue. Submitting code that has no
background context is likely to be rejected because the implication and design
has not been properly discussed. Also note that, low-impact/low-effort PRs submitted with the aim of claiming rewards are not allowed. If we suspect this is the intent of a PR, we may close it without comment.

The Celestia team has a culture of prioritizing the review of PRs. This
prioritization focuses on unblocking others and finishing existing work before
starting new work.

As a developer, you are responsible for ensuring your code gets merged. This
means you should be verifying that the appropriate reviewers are assigned and
that you are responding to review comments promptly. When given the choice to
start a new PR or work on closing out an existing PR, you should usually choose
closing out the existing PR.

As a reviewer, it is your responsibility to be providing prompt, action oriented
reviews. Clearing out your requests reviews should be a daily activity. Action
oriented reviews mean that there is a clear action step for the developer of
the PR to take in order to get the PR approved and merged. Open ended questions
and statements should be avoided. Being clear when a comment is a blocking change,
okay to be a follow up, or just a personal preference enables developers to
effectively implement the feedback on a PR.  

All production repos have the following branch protections requirements:

- 2 approvals
- Codeowner approval
- New commits dismiss approvals
- Status checks must be passing
- Conversations must be resolved
