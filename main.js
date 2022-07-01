//Projects links stuff
const icons = ['survey-arrow', 'tribute-arrow', 'tdp-arrow', 'plp-arrow', 'mixed-arrow', 'mixed-html-arrow', 'portfolio-arrow'];
const iconsJs = [];
icons.forEach(icon => { iconsJs.push(document.getElementById(icon)) });

const projectLinks = ['survey-link', 'tribute-link', 'tdp-link', 'plp-link', 'mixed-link', 'mixed-html-link', 'portfolio-link'];
const projectLinksJs = [];
projectLinks.forEach(link => { projectLinksJs.push(document.getElementById(link)) });


for (let i = 0; i < projectLinksJs.length; i++) {
  projectLinksJs[i].onmouseover = () => {
    iconsJs[i].style.color = 'pink'
    iconsJs[i].style.fontSize = '1.5rem'
  };
  projectLinksJs[i].onmouseout = () => {
    iconsJs[i].style.color = ''
    iconsJs[i].style.fontSize = ''
  };
}

// Portfolio project alert
const portfolioProject = document.getElementById('portfolio-link');
portfolioProject.onclick = () => {
  window.alert(`You're already in this project!!`)
}
// Mistery contact me stuff
const githubIcon = document.getElementById('github-icon');
const mailIcon = document.getElementById('mail-icon');
const misteryDiv = document.getElementById('mistery-div');
const misteryText = document.getElementById('mistery-text');

mailIcon.onclick = () => {
  misteryText.innerHTML = '<p>Contact me via isturizjaf@gmail.com</p>'
}

githubIcon.onclick = () => {
  misteryText.innerHTML = '<p>Contact me via <a href="https://github.com/JuanIsturiz" target="_blank">GitHub<a></p>'
}

//Random project stuff
const randomButton = document.getElementById('random-project-button');
const links = ['https://github.com/JuanIsturiz/Mixed-Messages', 'https://github.com/JuanIsturiz/Mixed-Messages-With-HTML', 'https://github.com/JuanIsturiz/Survey-Form', 'https://github.com/JuanIsturiz/Technical-Documentation-Page', 'https://github.com/JuanIsturiz/Tribute-Page', 'https://github.com/JuanIsturiz/Product-Landing-Page', 'https://github.com/JuanIsturiz/Portfolio-Webpage'];

const random = num => {
  let random = Math.floor(Math.random() * num.length);
  return random;
}

randomButton.onclick = () => {
  window.open(links[random(links)], '_blank');
}