function minMax(arr){
    if( arr.length < 1) return arr;
    if( arr.length == 0) return [[arr[0]][arr[0]]];
    arr.sort(function(a, b) {
    return a - b;
  });
  
   return [arr[0],arr[arr.length-1]]
    // fix me!
  }