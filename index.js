const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newmap = tutorials.map(changer);
  console.log(newmap);
  return newmap
}
function changer(str){
  let newstr = str.charAt(0).toUpperCase() + str.slice(1);
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === " "){
      newstr = newstr.slice(0, i + 1) + newstr.charAt(i + 1).toUpperCase() + newstr.slice(i + 2)
    }
  }
  return newstr;
};