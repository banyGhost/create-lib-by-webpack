import _ from 'lodash';
import numRef from './ref.json';

export function wordToNum(word) {
  return _.reduce(
    numRef,
    function(accum, ref) {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    '',
  );
}

export function numToWord(num) {
  return _.reduce(
    num,
    function(accum, ref) {
      return ref.num === num ? ref.word : accum;
    },
    -1,
  );
}
