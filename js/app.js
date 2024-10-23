const paragraphElement = document.querySelector('.cool')

paragraphElement.textContent = "new text"

if (paragraphElement.textContent !== '') {
    console.log('The paragraph has text content!');
}

paragraphElement.style.textAlign = 'center';

paragraphElement.textContent = 'Comments for <strong>today</strong>:';

paragraphElement.innerHTML = 'Comments for <strong>today</strong>:';


console.dir(paragraphElement)


const bodyElement = document.querySelector('body');

console.dir(bodyElement);


const h2Element = document.createElement('h2');

h2Element.textContent = 'Comments section';
bodyElement.appendChild(h2Element);

const commentElements = document.querySelectorAll('#comments');


commentElements.forEach((commentElement) => {
    console.log(commentElement.textContent)
    commentElement.style.fontSize = "30px"
})

const mainTitle = document.querySelector('#main-title')


const buttonElement = document.querySelector('button');


if (buttonElement.hasAttribute('disabled') === true) {
    // the button has the disabled attribute
    console.log('button is disabled')
}

if (buttonElement.hasAttribute('disabled') === true) {
    buttonElement.removeAttribute('disabled');
}

buttonElement.classList.add('btn');

// Following the examples in the classList documentation,
//write some code to remove the 'btn' class from the buttonElement,
//then give it a new class called action-button

buttonElement.classList.remove('btn')
buttonElement.classList.add('action-button')

console.log(buttonElement)


const titleElementById = document.getElementById('main-title');
console.dir(titleElementById);



// When using getElementById(), be sure not to preface the name of the id with #. For example,
//document.getElementById('#main-title'); will return null!
