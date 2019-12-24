const emptyField = document.querySelector('.name');
const paragraph = document.querySelector('#JSbandName');
const button = document.querySelector('#button');

let bandName = '';

const wordOne = ['Magic', 'Balanced', 'Quiet', 'Lonely', 'Silent', 'Dreamy', 'Whispering', 'Light', 'Dusty', 'Misty', 'Secret', 'Deadly', 'Shivering', 'Nostalgic'];

const wordTwo = ['Pine', 'Oak', 'Wind', 'Tree', 'Alder', 'Hazel', 'Willow', 'Elm', 'Fox', 'Owl', 'Wood', 'Moss', 'Peat', 'Copse', 'Deer', 'Wolf', 'Ferret', 'Bird', 'Eagle'];


let addName = () => {
    const inputValue = document.querySelector('#JS-input').value;

    let firstPart = wordOne[Math.floor(Math.random()*wordOne.length)];

    let secondPart = wordTwo[Math.floor(Math.random()*wordTwo.length)];

    if(inputValue !== '') {
        bandName = `${firstPart} ${secondPart} and ${inputValue}`;
    } else {
        bandName= `${firstPart} ${secondPart}`;
    }
    
    emptyField.style.display = 'block';
    paragraph.innerText = bandName;

}

button.addEventListener('click', addName);