
// MAIN
const inputNumberDOMIEl = document.getElementById('number')
const buttonDOMEl = document.getElementById('btn')
const listResultDOMEl = document.querySelector('.list-result');
// console.log(buttonDOMEl)
const numbers = generateRandomNumber(1, 9, 4)

buttonDOMEl.addEventListener('click', function () {


    const valueInput = inputNumberDOMIEl.value;
    const playerArray = fromStringToNumber(valueInput);
    // inputNumberDOMIEl.value = '' ;
    //  console.log(playerArray)
    const result = compareTwoArray(playerArray, numbers);
    if (result === "") {

        alert('Try to guess for numbers i just thinking')

    }
    if (result === 'XXXX') {

        listResultDOMEl.innerHTML += `
        <li>
            <div class="winner">
            <h1>WINNER!!</h1>
            </div>
        </li>
            `


    } else {

        listResultDOMEl.innerHTML += `
        <li>
            <span class="player-choice">${valueInput}</span>
            <span class="result">${result}</span>
        </li>
        `
    }

    
})




//FUNZIONI 
function generateRandomNumber(min, max, length) {
    const numbersArray = [];
    while (numbersArray.length < length) {

        const randomNumbers = parseInt(Math.floor(Math.random() * max) + min);
        if (!numbersArray.includes(randomNumbers)) {
            numbersArray.push(randomNumbers)
        }

    }
    console.log(numbersArray);


    return numbersArray
}

function fromStringToNumber(valueInput) {

    const arrayOfNumber = [];
    for (i = 0; i < valueInput.length; i++) {

        arrayOfNumber.push(parseInt(valueInput[i]));
    }
    return arrayOfNumber
}

function compareTwoArray(playerArray, pcNumbers) {
    let result = ''
    for (let j = 0; j < playerArray.length; j++) {
        const indexChecked = pcNumbers.indexOf(playerArray[j]);
        // console.log(indexChecked)
        if (indexChecked !== -1) {
            if (indexChecked === j) {
                result += 'X '
                console.log(result, j)
            } else {
                result += 'O '
                console.log(result, indexChecked)
            }
        }

    }
    return result
}