var linksArr = document.getElementsByTagName('A');

console.log(linksArr);
console.log(linksArr[0].hasAttribute('data-links'));

for (var i = 0; i < linksArr.length; i++) {
  if (linksArr[0].hasAttribute('data-links')) {
    var linksList = linksArr[i].getAttribute('data-links').split(',');
    console.log(linksList);
    console.log(linksList.length);
    var index = getRandomInt(0,linksList.length);
    console.log(index);
    linksArr[i].setAttribute('href', linksList[index].trim());
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}