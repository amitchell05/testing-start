import { ReversePipe } from './reverse.pipe';

describe('Pipe: ReversePipe', () => {
  it('should reverse a string', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toBeTruthy('olleh');
  });
});
