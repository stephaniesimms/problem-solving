const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('it handles midnight and noon', () => {
    expect(timeWord('00:00')).toBe('midnight');
    expect(timeWord('12:00')).toBe('noon');
  });
  test('it returns correct string for just hours, no minutes', () => {
    expect(timeWord('01:00')).toBe("one o'clock am");
  });
  test('it returns correct string for minutes less than 10', () => {
    expect(timeWord('06:01')).toBe('six oh one am');
    expect(timeWord('12:09')).toBe('twelve oh nine pm');
  });
  test('it performs correct lookup for hours and minutes am', () => {
    expect(timeWord('00:12')).toBe('twelve twelve am');
    expect(timeWord('06:10')).toBe('six ten am');
    expect(timeWord('06:18')).toBe('six eighteen am');
    expect(timeWord('06:30')).toBe('six thirty am');
    expect(timeWord('10:34')).toBe('ten thirty four am');
  });
  test('it performs correct lookup for hours and minutes pm', () => {
    expect(timeWord('23:23')).toBe('eleven twenty three pm');
    expect(timeWord('15:55')).toBe('three fifty five pm');
  });
});