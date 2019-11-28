import <%= packageName %> from './index';

describe('<%= packageName %>', () => {
  it('should work', () => {
    expect(<%= packageName %>()).toEqual(undefined);
  });
});
