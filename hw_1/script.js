let array = [10,2,12,-4,0,6];
function sort(min) {
    for (let i=0; i<min.length; i++) {
      for (let y=i; y<min.length; y++) {
          if (min[i] > min[y]) {
          let count = min[i];
          min[i] = min[y];
          min[y] = count;
        }
      }
    }
    console.log(`"3" по минимальности элемент: ${min[2]}  "5" по минимальности элемент: ${min[4]}`);
    return min;
    
  }
  console.log(sort(array));
