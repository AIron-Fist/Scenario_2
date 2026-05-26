# Release Notes

## v1.0.1 - 2026-05-26

Maintenance release for the release documentation.

### Highlights

- Cleaned `RELEASE_NOTES.md` so published notes contain release content only.
- Bumped package metadata to `1.0.1`.
- Added repository documentation for release-note generation policy.
- Confirmed there are no runtime application code changes in this patch release.
- Verified the Node.js test suite still passes.

### Notes

- This release does not change the app startup behavior, environment handling, or package dependencies.

## v1.0.0 - 2026-05-26

Initial public release of the mock Node.js app.

### Highlights

- Added a small Node.js startup flow with dotenv support and a default `NODE_ENV` of `development`.
- Added test coverage for environment resolution and startup message generation.
- Added mock-only `.env`, `.env.example`, and `secrets.yaml` values for demo and local development scenarios.
- Updated repository metadata and documentation to reflect the applied company policy.
- Cleaned up ignore rules for Python cache artifacts.

### Notes

- The checked-in configuration values are mock demo values only and are not production secrets.
- Run `npm install`, then `npm test` to verify the app and `npm start` to run it.
