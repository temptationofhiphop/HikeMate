var elements = document.getElementsByClassName('difficulty');

for (var i = 0; i < elements.length; i++) {
  var textContentLap = elements[i].textContent;

  if (textContentLap === 'Easy') {
    elements[i].classList.add('green-text');
  } 
	else if (textContentLap === 'Medium') {
    elements[i].classList.add('blue-text');
  } 
	else if (textContentLap === 'Difficult') {
    elements[i].classList.add('red-text');
  }
}
