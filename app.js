function divideName(array) {
  let result = array.split(' ');
  // console.log(result);
  // result.forEach((element) => {
  //   result.push(element);
  //   console.log(element);
  // });
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);

    if (result[i].length > count) {
      count = result[i].length;
    }
    return count;
  }
  console.log(count);
  return count;
}
let name = [2, 'hello', 3];

console.log('slice, splice and split');

console.log(divideName('how are u doing'));
