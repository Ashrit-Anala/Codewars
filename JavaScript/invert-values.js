/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/

function invert(array) {
  // map is null safe
//   if(!array.length) {
//    return [];
//    }
   return array.map(e => 0 - e);
}
