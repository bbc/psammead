import getBranchName from '.';

const DATE_TO_USE = new Date('1234-06-13T04:41:20');
const RealDate = Date;
global.Date = jest.fn(() => DATE_TO_USE);

describe('getBranchName', () => {
  afterEach(() => {
    global.Date = RealDate;
  });

  it('should return branch name', async () => {
    const name = getBranchName('commit message');

    expect(name).toEqual('Talos/123461344120');
  });
});
