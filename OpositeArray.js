function invert(array) {
 if (array == [] ) return []

for ( let i = 0; i < array.length ; i ++) {
  if( array[i] > 0 ) { array[i] = -Math.abs(array[i])}
  else if( array[i] < 0 ) { array[i] = Math.abs(array[i])}
  else if( array[i] == 0 ) { array[i] = -Math.abs(array[i])}
}
 return array
 
   
}