import { PhonenumberPipe } from './phonenumber.pipe';

describe('PhonenumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PhonenumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display phone number in format', () => {
    const phonenumber='987654321123';

    const pipe = new PhonenumberPipe();
    const result = pipe.transform(phonenumber);
    expect(result).toBe('(98) 76-543-21123')
    });

});
