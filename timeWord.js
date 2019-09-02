/** Turns a string of 24h time into words.
 * Hours 0-11 are am, and hours 12-23 are pm.
 * Input will always have a two digit hour 00-23, and a two digit minute 00-59.
 * Example input '00:12' > output 'twelve twelve am'
 */

function timeWord(time) {
  let timeArr = time.split(':');
  let hrs = +timeArr[0];
  let mins = +timeArr[1];

  let antePost = '';
  let timeStr = '';

  if (hrs === 0 && mins === 0) {
    timeStr = 'midnight';
    return timeStr;
  }
  if (hrs === 12 && mins === 0) {
    timeStr = 'noon';
    return timeStr;
  }
  if (hrs < 12) {
    antePost = 'am';
  } else {
    antePost = 'pm';
  }

  const hoursLookUp = {
    0: 'twelve',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
  };

  const minsLookUp = {
    0: "o'clock",
    1: 'oh one',
    2: 'oh two',
    3: 'oh three',
    4: 'oh four',
    5: 'oh five',
    6: 'oh six',
    7: 'oh seven',
    8: 'oh eight',
    9: 'oh nine',
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
    16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    20: 'twenty', 21: 'twenty one', 22: 'twenty two', 23: 'twenty three', 24: 'twenty four', 25: 'twenty five',
    26: 'twenty six', 27: 'twenty seven', 28: 'twenty eight', 29: 'twenty nine',
    30: 'thirty', 31: 'thirty one', 32: 'thirty two', 33: 'thirty three', 34: 'thirty four', 35: 'thirty five',
    36: 'thirty six', 37: 'thirty seven', 38: 'thirty eight', 39: 'thirty nine',
    40: 'forty', 41: 'forty one', 42: 'forty two', 43: 'forty three', 44: 'forty four', 45: 'forty five',
    46: 'forty six', 47: 'forty seven', 48: 'forty eight', 49: 'forty nine',
    50: 'fifty', 51: 'fifty one', 52: 'fifty two', 53: 'fifty three', 54: 'fifty four', 55: 'fifty five',
    56: 'fifty six', 57: 'fifty seven', 58: 'fifty eight', 59: 'fifty nine'
  };

  let hourString = hoursLookUp[hrs % 12];
  let minString = minsLookUp[mins];

  timeStr = `${hourString} ${minString} ${antePost}`;
  return timeStr;
}


module.exports = timeWord;