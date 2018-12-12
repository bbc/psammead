const publishConfig = require('../src/publishConfig');

describe(`Publish Script - publishConfig`, () => {
  it('should be corrected set values when both are set in packageJson', () => {
    const packageJson = {
      publishConfig: {
        access: 'restricted',
        tag: 'alpha',
      },
    };

    const { access, tag } = publishConfig(packageJson);

    expect(access).toEqual('restricted');
    expect(tag).toEqual('alpha');
  });

  it('should be corrected set values when access is set in packageJson', () => {
    const packageJson = {
      publishConfig: {
        access: 'restricted',
      },
    };

    const { access, tag } = publishConfig(packageJson);

    expect(access).toEqual('restricted');
    expect(tag).toEqual('latest');
  });

  it('should be corrected set values when tag is set in packageJson', () => {
    const packageJson = {
      publishConfig: {
        tag: 'alpha',
      },
    };

    const { access, tag } = publishConfig(packageJson);

    expect(access).toEqual('public');
    expect(tag).toEqual('alpha');
  });

  it('should be corrected set values when neither are set in packageJson', () => {
    const packageJson = {};

    const { access, tag } = publishConfig(packageJson);

    expect(access).toEqual('public');
    expect(tag).toEqual('latest');
  });
});
