import { BasicPipe } from './basic.pipe';

describe('BasicPipe', () => {
  it('create an instance', () => {
    const pipe = new BasicPipe();
    expect(pipe).toBeTruthy();
  });
});
