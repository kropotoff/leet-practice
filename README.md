# leet

Collection of JavaScript algorithm and data-structure solutions (LeetCode-style), organized by topic. Each solution in `src/` has a corresponding test in the same folder. Tests use Vitest and the project is configured as an ECMAScript module.

## What this repo contains

- Solutions organized under `src/` by topic (arrays & hashing, two pointers, sliding window, etc.).
- Unit tests next to each solution (files named `*.test.js`).
- Test runner configured in `package.json` using `vitest`.

## Requirements

- Node.js (recommended v16 or newer)
- npm

## Setup

1. Install dependencies:

   npm install

## Running tests

- Run all tests once:

  npm test

- Run tests in watch/dev mode:

  npm run test:watch

- Run tests with verbose reporter:

  npm run test:verbose

- Run a single test file (example):

  npm test -- src/01-arrays-and-hashing/group-anagrams.test.js

- Run tests matching a test name (example):

  npm test -- -t "group anagrams"


## Adding a new solution

1. Create a new solution file under the appropriate folder in `src/` (follow existing naming conventions).
2. Export the function using a named export (e.g. `export function mySolution(...) {}`).
3. Create a corresponding `*.test.js` file next to it using Vitest to verify behavior.
4. Run `npm test` to verify.

## Project layout (excerpt)

- `package.json` - test scripts and dependencies
- `vitest.config.js` - vitest configuration
- `src/` - solution source files and tests

## Contributing

Open a PR with your solution and tests. Keep files small and focused; add meaningful test cases.

---

If you want a README tailored for publishing the repo on GitHub (badges, license, CI), tell me what to include.
