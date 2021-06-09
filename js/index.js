// Copiright sign and skills list
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

//Message form
const messageForm = document.getElementsByName('leave_message');
const messageSection = document.getElementById('messages');
messageSection.style.display = 'none';

messageForm[0].addEventListener('submit', (e) => {
    e.preventDefault();

    //Geting form values
    const inputElements = document.querySelectorAll('input, textarea');
    const nameField = inputElements[0].value;
    const emailField = inputElements[1].value;
    const messageField = inputElements[2].value;
    console.log(nameField, emailField, messageField);

    //Making messages
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    const messageLine = `<a href="mailto:${emailField}">${nameField}</a> wrote:
    <span>${messageField} </span>`;
    newMessage.innerHTML = messageLine;
    
    //Creating remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode.parentNode;
        entry.removeChild(newMessage);

    //Message section reset if removing all the messages
        if (messageList.children.length < 1) {
            messageSection.style.display = 'none';
        }
    });

    //Creating edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.type = 'button';
    editButton.addEventListener('click', () => {
        const correctInput = document.createElement('input');
        correctInput.type = 'text';
        correctInput.value = messageField;
        newMessage.appendChild(correctInput);
        editButton.textContent = 'save';
    });

    messageList.appendChild(newMessage); 
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);    
    
    //Display message section if someone live message
    if (messageList.children.length > 0) {
        messageSection.style.display = 'block';
    }

    messageForm[0].reset();
});

