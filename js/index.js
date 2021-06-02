const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copiright = document.createElement('p');
const skills = ["Basic JavaScript", "HTML", "CSS", "SASS", "LESS", "Git", "GItHub", "GitDesktop"];
const skillsSection = document.getElementById('skills');
const skillslist = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillslist.appendChild(skill);
};

copiright.innerHTML = `Hanna Val ${thisYear}`;
footer.appendChild(copiright);
