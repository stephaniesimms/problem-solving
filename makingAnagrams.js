/** https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
 
 Given two strings that may or may not be of the same length, determine the minimum number of character deletions required to make anagrams. Any characters can be deleted from either of the strings.

Constraints:
The strings  and  consist of lowercase English alphabetic letters ascii[a-z].

Output Format:
Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

Sample Input:
cde
abc

Sample Output:
4
 */

/** Main function calculates total number of chars in both strings
 * Creates a freq counter for each string using helper function
 * Compares the chars and counts in each counter
 * Increments a "keepCount" total of matching chars 
 * Returns the total - keepCount, which is num chars to delete
 */

function makeAnagram(a, b) {
  let totalChars = a.length + b.length;
  let keepCount = 0;

  let freqCountA = countFrequency(a);
  let freqCountB = countFrequency(b);

  for (let char in freqCountA) {
    for (let char2 in freqCountB) {
      if (char === char2) {
        if (freqCountA[char] === freqCountB[char2]) {
          keepCount += freqCountA[char] + freqCountB[char2];
        } else if (freqCountA[char] > freqCountB[char2]) {
          keepCount += 2 * freqCountB[char2];
        } else {
          keepCount += 2 * freqCountA[char];
        }
      }
    }
  }
  return totalChars - keepCount;
}

function countFrequency(str) {
  let counter = {};
  for (let char of str) {
    if (!counter[char]) {
      counter[char] = 1;
    } else {
      counter[char]++;
    }
  }
  return counter;
}