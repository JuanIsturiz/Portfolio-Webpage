// Mistery contact me stuff
const githubIcon = document.getElementById('github-icon');
const mailIcon = document.getElementById('mail-icon');
const misteryDiv = document.getElementById('mistery-div');
const misteryText = document.getElementById('mistery-text');

mailIcon.onclick = () => {
  misteryText.innerHTML = '<p>Contact me at isturizjaf@gmail.com</p>'
}

githubIcon.onclick = () => {
  misteryText.innerHTML = '<p>Contact me on <a href="https://github.com/JuanIsturiz" target="_blank">GitHub<a></p>'
}

//Random project stuff
const randomButton = document.getElementById('random-project-button');
const links = ['https://github.com/JuanIsturiz/Mixed-Messages', 'https://github.com/JuanIsturiz/Survey-Form', 'https://github.com/JuanIsturiz/Technical-Documentation-Page', 'https://github.com/JuanIsturiz/Tribute-Page'];

const random = num => {
  let random = Math.floor(Math.random() * num.length);
  return random;
}

randomButton.onclick = () => {
  window.open(links[random(links)], '_blank');
}