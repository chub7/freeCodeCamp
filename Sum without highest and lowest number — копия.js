function sumArray(array) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let index = 0;
    
    if (array == null) return 0;
    if (array.length <= 2) return 0;
   
  array.forEach((e,i) => { if ( e < min) min = e , index = i;})
    
    array.splice(index, 1)
  console.log(array)
  array.forEach((e,i) => { if ( e > max) max = e, index = i;})
    array.splice(index, 1)
  
    
    return res = array.reduce((sum,item) =>{
      return sum+item
    },0)
    
        
  }