// Copiright sign and skills list
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copiright = document.createElement('p');
const skills = ["Basic JavaScript", "HTML", "CSS", "SASS", "LESS", "Git", "GItHub", "VS Code", "GitHub Descktop", "BEM"];
const skillsSection = document.querySelector('.skills');
const skillslist = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillslist.appendChild(skill);
};

copiright.innerHTML = `Hanna Val ${thisYear}`;
copiright.className = "copiright";
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
    const linkMessage = document.createElement('a');
    const spanMessage = document.createElement('span');
    linkMessage.textContent = nameField;
    linkMessage.style.fontWeight = 'bold';
    linkMessage.style.color = '#9B59B6';
    linkMessage.href = `mailto:${emailField}`;
    spanMessage.textContent = ` ${messageField} `;
    spanMessage.className = 'spanMessage';
    
    newMessage.appendChild(linkMessage);
    newMessage.appendChild(spanMessage);
    
    //Creating remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.style.backgroundColor = '#F1948A';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode.parentNode;
        entry.removeChild(newMessage);

    //Message section reset if removing all the messages
        if (messageList.children.length < 1) {
            messageSection.style.display = 'none';
        }
    });

    //Creating edit and save button in one
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.type = 'button';
    newMessage.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            if (button.textContent === 'edit') {
                const input = document.createElement('input');
                const span = newMessage.children[1];
                input.type = 'text';
                input.value = span.textContent;
                newMessage.insertBefore(input, span);
                newMessage.removeChild(span);
                button.textContent = 'save';
            } else if (button.textContent === 'save') {
                const input = newMessage.children[1];
                const span = document.createElement('span');
                span.textContent = input.value;
                span.className = 'savedSpan';
                newMessage.insertBefore(span, input);
                newMessage.removeChild(input);
                button.textContent = 'edit';
            }
        }
    });
  
    messageList.appendChild(newMessage); 
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    
    //Display message section if someone live message
    if (messageList.children.length > 0) {
        messageSection.style.display = 'block';
    }

    messageForm[0].reset();
});

