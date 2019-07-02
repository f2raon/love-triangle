/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // love triangles index
  var triangle = [];
  let count = 0;
  for (let key = 0; key < preferences.length; key++) {
    
    let first_value = preferences[key];
    let first_key = key;
    let second_value = preferences[first_value-1];
    let second_key = first_value-1;
    let third_value = preferences[second_value-1];
    let third_key = second_value-1;

    // first, check for existing love triangle
    if (triangle.indexOf(key) != -1) {
      //console.log('exists! triangle: ' + triangle + '; key: ' + key);
      continue;
    } else if ((first_value-1) == first_key) { // checking for selfish people :)
      //console.log('selfish! value:' + first_value + '; key: ' + key);
      continue;
    } else if ((first_key+1) == third_value && (second_key+1) == first_value && (third_key+1) == second_value) {
      triangle.push(first_key, second_key, third_key);
      count++;
      //console.log('added to triangle. key: ' + key + '; triangle: ' + triangle);
    } else {
      //console.log('no triangle. first_value: ' + first_value + ', second_value: ' + second_value + ', third_value: ' + third_value);
    }
  }
  return count;
};
