function longest(s1, s2) {
    let str = s1 +s2
   str = str.split('').sort().join('');
    let newstr = str.replace(/(.)(?=.*\1)/g, "")
    return newstr
  }