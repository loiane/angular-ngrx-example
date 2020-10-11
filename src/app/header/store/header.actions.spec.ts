import * as fromHeader from './header.actions';

describe('loadHeaders', () => {
  it('should return an action', () => {
    expect(fromHeader.loadHeaders().type).toBe('[Header] Load Headers');
  });
});
