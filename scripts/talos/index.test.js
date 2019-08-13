



describe('Talos', () => {
  it('should collated body', async () => {
    const body = getPullRequestBody(packages, bumpedPackages);

    expect(body).toEqual(expected);
  });
});