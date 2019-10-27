/* tslint:disable:no-unused-variable */
import { ReversePipe } from './reverse.pipe';

describe('Pipe: ReversePipe', () => {
  let pipe = new ReversePipe();

  it('should reverse the inputs', () => {
    expect(pipe.transform('abc')).toBe('cba');
  });
});
