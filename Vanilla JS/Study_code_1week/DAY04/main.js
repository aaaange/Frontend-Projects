// <⚠️ DONT DELETE THIS ⚠️>
import './styles.css';
const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = (event) => {
  if (event.type === 'mouseenter') {
    title.innerText = 'The mouse is here!';
    title.style.color = '#1abc9c'
  } else if (event.type === 'mouseleave') {
    title.innerText = 'The mouse is gone!';
    title.style.color = '#3498db'
  } else if (event.type === 'resize') {
    title.innerText = 'You just resized!';
    title.style.color = '#9b59b6';
  } else if (event.type === 'contextmenu') {
    title.innerText = 'That was a right click!'
    title.style.color = '#e74c3c';
  }
};

const title = document.querySelector('h2');


title.addEventListener('mouseenter', superEventHandler);
title.addEventListener('mouseleave', superEventHandler);

window.addEventListener('resize', superEventHandler);
window.addEventListener('contextmenu', superEventHandler);