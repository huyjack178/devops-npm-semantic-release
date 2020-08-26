module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            type: 'docs',
            scope: 'README',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            scope: 'no-release',
            release: false,
          },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    {
      path: '@semantic-release/git',
      assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version} [skip ci]',
    },
  ],
  branches: [
    'master',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'dev-*',
      prerelease: true,
    },
    {
      name: 'hotfix-*',
      prerelease: true,
    },
    {
      name: 'publish-*',
      prerelease: true,
    },
  ],
};
