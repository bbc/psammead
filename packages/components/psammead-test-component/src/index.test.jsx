import chai from 'chai';
import arr from '.';

describe('A test', () => {
  it('A chai expectation', () => {
    chai.expect(arr).to.have.lengthOf(0);
  });
});
