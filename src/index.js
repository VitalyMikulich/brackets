module.exports = function check(str, bracketsConfig) {
  const parantheses = bracketsConfig.reduce((acc, item) => {
    if(item[0] == item[1]) {
      if(item[0] == '|') {
        item[1] = '!';
      }
      if(item[0] == '8') {
        item[1] = '9';
      }
      if(item[0] == '7') {
        item[1] = '&';
      }
      let index = 1;
      let substr = str.split('');
      for(let i = 0; i < substr.length; i++) {
        if((substr[i] == item[0])) {
          if((index % 2 == 0)){
            substr[i] = item[1];
          }
          index++;
        }
      }
      str = substr.join('');
    }
    acc[item[0]] = item[1];
    return acc;
  }, {});
  
  for(let i = 0; i < bracketsConfig.length; i++) {
    if(bracketsConfig[i][0] == '|') {
      bracketsConfig[i][1] = '|';
    }
    if(bracketsConfig[i][0] == '8') {
      bracketsConfig[i][1] = '8';
    }
    if(bracketsConfig[i][0] == '7') {
      bracketsConfig[i][1] = '7';
    }
  }

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (parantheses[str[i]]) {
      stack.push(str[i]);
    }
    else {
      if (parantheses[stack.pop()] !== str[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}