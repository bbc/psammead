/* eslint-disable no-console */
const stripAnsi = require('strip-ansi');
const report = require('../src/report');

describe(`Publish Script - report`, () => {
  beforeEach(() => {
    jest.resetModules();

    console.log = jest.fn();
    process.exit = jest.fn();
  });

  it('renders logs correctly when multiple successes and failures', () => {
    const input = [
      {
        packageReleaseTag: '@bbc/psammead-foobar@1.1.1',
        status: true,
        failure: false,
      },
      {
        packageReleaseTag: '@bbc/psammead-boofar@1.1.1',
        status: true,
        failure: false,
      },
      {
        packageReleaseTag: '@bbc/psammead-feeboo@1.1.1',
        status: false,
        failure: true,
      },
    ];

    report(input);

    const expectedOutput = [
      'Published: 2 Successful, 1 Failed, 3 total',
      'Successful',
      '@bbc/psammead-foobar@1.1.1',
      '@bbc/psammead-boofar@1.1.1',
      'Failed',
      '@bbc/psammead-feeboo@1.1.1',
    ];

    expectedOutput.forEach((element, index) => {
      expect(stripAnsi(console.log.mock.calls[index][0])).toEqual(
        expect.stringContaining(element),
      );
    });

    expect(console.log.mock.calls).toHaveLength(6);

    expect(process.exit).toHaveBeenCalledWith(1);
  });

  it('renders logs correctly with successes but no failures', () => {
    const input = [
      {
        packageReleaseTag: '@bbc/psammead-foobar@1.1.1',
        status: true,
        failure: false,
      },
    ];

    report(input);

    const expectedOutput = [
      'Published: 1 Successful, 0 Failed, 1 total',
      'Successful',
      '@bbc/psammead-foobar@1.1.1',
    ];

    expectedOutput.forEach((element, index) => {
      expect(stripAnsi(console.log.mock.calls[index][0])).toEqual(
        expect.stringContaining(element),
      );
    });

    expect(console.log.mock.calls).toHaveLength(3);

    expect(process.exit).not.toHaveBeenCalled();
  });

  it('renders logs correctly with failures but no successes', () => {
    const input = [
      {
        packageReleaseTag: '@bbc/psammead-feeboo@1.1.1',
        status: false,
        failure: true,
      },
    ];

    report(input);

    const expectedOutput = [
      'Published: 0 Successful, 1 Failed, 1 total',
      'Failed',
      '@bbc/psammead-feeboo@1.1.1',
    ];

    expectedOutput.forEach((element, index) => {
      expect(stripAnsi(console.log.mock.calls[index][0])).toEqual(
        expect.stringContaining(element),
      );
    });

    expect(console.log.mock.calls).toHaveLength(3);

    expect(process.exit).toHaveBeenCalledWith(1);
  });

  it('renders logs correctly with no successes or failures', () => {
    const input = [];
    report(input);

    expect(stripAnsi(console.log.mock.calls[0][0])).toEqual(
      expect.stringContaining('0 Successful, 0 Failed, 0 total'),
    );

    expect(console.log.mock.calls).toHaveLength(1);

    expect(process.exit).not.toHaveBeenCalled();
  });
});
