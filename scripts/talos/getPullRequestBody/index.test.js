import getPullRequestBody from '.';

const packages = ['@bbc/foobar', '@bbc/barfoo'];

const bumpedPackages = ['@bbc/apples', '@bbc/pears'];

const expected = `👋 The following packages have been published:
@bbc/foobar
@bbc/barfoo

So we need to bump them in the following packages:
@bbc/apples
@bbc/pears`;

describe('getPullRequestBody', () => {
  it('should collated body', async () => {
    const body = getPullRequestBody(packages, bumpedPackages);

    expect(body).toEqual(expected);
  });
});
