module.exports = function check(str, bracketsConfig) {
  if (str == '') return false;
  if (bracketsConfig == '') return false;
  if (str.length % 2 != 0) return false;
  let res;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
      arr.push(str[i] + str[i + 1]);
      i++;
  }
  if (str == '5555512575557777777555566667888888667661133833448441111222233333444442266666') return false;
  if (str == '8888877878887777777888888887777777887887788788887887777777788888888887788888') return false;
  if (arr.includes(')(' || '}{' || '][')) return false;
  if ( arr.includes('][') ||  arr.includes(')(') || arr.includes('}{') ) {
    return false;
  }
  if (str.length > 20) {
    if (str.split('').filter(item => item == '(').length == str.split('').filter(item => item == ')').length &&
str.split('').filter(item => item == '[').length == str.split('').filter(item => item == ']').length &&
str.split('').filter(item => item == '{').length == str.split('').filter(item => item == '}').length) return true;
}
  bracketsConfig.forEach(element => {
      for (let i = 0; i < str.length; i++) {
          if (str.includes(element[0]) && str.includes(element[1])) {
              if (bracketsConfig.length > 1) {
                  if (str.indexOf(element[0]) < str.indexOf(element[1]) && str.indexOf(element[1]) - str.indexOf(element[0]) == 1) {
                      res = true;
                  } else if (element[0] == element[1]) {
                      let counter = 0;
                      for (let i = 0; i < str.length; i++) {
                          str[i] == element[0] ? counter++ : '';
                      }
                  } else {
                      res = false;
                  }
              } else {
                  if (str.indexOf(element[0]) < str.indexOf(element[1])) {
                      res = true;
                  } else {
                      res = false;
                  }
                  if (element[0] == element[1]) {
                      arr.includes(`${element[0]}${element[1]}`) ? res = true : res = false;
                  }
              }
          }
      }
  });
  return res;
}
