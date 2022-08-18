let content = document.getElementById('cnt')
let visible = document.getElementById('vis')
let hidden = document.getElementById('hid')
let btn = document.getElementById('btn')

content.style.display='none'
visible.style.display='none'

btn.onclick = function() {
  if(content.style.display === 'none') {
    content.style.display='inline'
    visible.style.display='inline'
    hidden.style.display='none'
  } else {
    content.style.display='none'
    visible.style.display='none'
    hidden.style.display='inline'
  }
}

const keyframes = [
  { opacity: 0, transform: 'scale(0)' },
  { opacity: 1, transform: 'scale(1)' }
];

btn.addEventListener('click', function (ev) {
  ev.preventDefault();
  
  content.hidden = false;

  const animation = content.animate(keyframes, {
      duration: 500,
      fill: "forwards"
  });
});

