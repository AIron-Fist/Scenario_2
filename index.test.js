// The new Company policy applied
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const { DEFAULT_NODE_ENV, getNodeEnv, startupMessages } = require('./index');

test('defaults NODE_ENV to development', () => {
  assert.equal(getNodeEnv({}), DEFAULT_NODE_ENV);
});

test('uses configured NODE_ENV when provided', () => {
  assert.equal(getNodeEnv({ NODE_ENV: 'production' }), 'production');
});

test('startup messages include the resolved environment', () => {
  assert.deepEqual(startupMessages({ NODE_ENV: 'test' }), [
    '🚀 Starting in [test] mode...',
    '✅ Keys Loaded Safely.',
  ]);
});

test('synthetic CV mock fixture is available for parser tests', () => {
  const fixturePath = path.join(__dirname, 'src', 'test', 'resources', 'mock-cv.txt');
  const fixture = fs.readFileSync(fixturePath, 'utf8');

  assert.match(fixture, /^ALEX MARSHALL$/m);
  assert.match(fixture, /^PROFESSIONAL EXPERIENCE$/m);
  assert.match(fixture, /^TECHNICAL SKILLS$/m);
  assert.match(fixture, /^EDUCATION$/m);
});

test('synthetic passport mock fixture is available for parser tests', () => {
  const fixturePath = path.join(__dirname, 'src', 'test', 'resources', 'mock-Passport.txt');
  const fixture = fs.readFileSync(fixturePath, 'utf8');

  assert.match(fixture, /^SYNTHETIC PASSPORT MOCK DATA$/m);
  assert.match(fixture, /^DOCUMENT TYPE$/m);
  assert.match(fixture, /^Passport Number: XZ0001847$/m);
  assert.match(fixture, /^HOLDER DETAILS$/m);
  assert.match(fixture, /^MACHINE READABLE ZONE$/m);
});
