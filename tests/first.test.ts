import { describe, test, expect } from 'vitest';
import { getBirthday } from '../src/utils/birthdayUtils';

describe('getBirthday function', () => {
  //správná jména
  test('return the correct birthday for a given name', () => {
    expect(getBirthday('Lenka')).toEqual('18. 3. 1984');
    expect(getBirthday('Petr')).toEqual('21. 9. 2001');
    expect(getBirthday('Karel')).toEqual('12. 8. 1990');
    expect(getBirthday('Lucie')).toEqual('29. 2. 1988');
  });

  //nenalezená jména
  test('returns "nenalezeno" for a name not in the list', () => {
    expect(getBirthday('Adam')).toEqual('nenalezeno');
    expect(getBirthday('Barbora')).toEqual('nenalezeno');
    expect(getBirthday('Zdeněk')).toEqual('nenalezeno');
    expect(getBirthday('Šárka')).toEqual('nenalezeno');
    expect(getBirthday('Nikol')).toEqual('nenalezeno');
    expect(getBirthday('Vojtěch')).toEqual('nenalezeno');
  });
});
