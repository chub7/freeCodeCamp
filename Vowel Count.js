function getCount(str) {
  
    let cout = 0;
   
   let found = str.split(``);
     found.forEach((e) => {
   if ( e === 'a' ||
         e === 'e' ||
         e === 'i' ||
         e === 'o' ||
         e === 'u')  
       cout++;
     })
     console.log(cout)
     
     return cout;
   }