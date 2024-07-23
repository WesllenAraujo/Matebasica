function variables() {
    let lessionsList = document.querySelectorAll('.lession');
    let lessionMenu = document.querySelectorAll('.lession-menu-row');
    let lessionsCalculatorArea = document.querySelectorAll('.lession-calculator');
    let calculatorResult = document.querySelectorAll('.calculator-result');
    let calculatorAreas = document.querySelectorAll('.calculator-area');
    let lessionMenuButtonsList = document.querySelectorAll('.lession-menu-button');
    let lessionMenuButtonImage = document.querySelectorAll('.lession-menu-button-image');
    let resultButtonList = document.querySelectorAll(".result-button");
    let resetButtonList = document.querySelectorAll('.reset-button');
    let calculatorAreaGroup = document.querySelectorAll('.calculator-result');
    // bhaskara
    let bhaskaraResult = document.querySelectorAll(".bhaskara-result");
    let aBhaskara = document.querySelector('.bhaskara-a-number').value;
    let bBhaskara = document.querySelector('.bhaskara-b-number').value;
    let cBhaskara = document.querySelector('.bhaskara-c-number').value;
    let bhaskaraCalculatorArea = document.getElementById('bhaskara-calculator-result');
    let delta = (bBhaskara ** 2) - (4 * [aBhaskara * cBhaskara]);
    let deltaSquareRoot = Math.sqrt(delta);
    let x1 = [(-1 * bBhaskara) + deltaSquareRoot] / 2;
    let x2 = [(-1 * bBhaskara) - deltaSquareRoot] / 2;
    // Aritmetic Progression
    let paResult = document.querySelector('.pa-calculator-result');
    let paFirstNumber = document.querySelector('.first-number-pa').value;
    let paFinalPosition = document.querySelector('.final-position-pa').value;
    let paRasion = document.querySelector('.rasion-pa').value;
    let paCalculatorArea = document.querySelectorAll('.pa-calculator-area');
    // Arithmetic Progression addiction
    let paAddition = document.getElementById('pa-addition');
    
    return {
        // Calculate
        resultButtonList , resetButtonList, calculatorResult, lessionMenuButtonsList, lessionMenu, lessionMenuButtonImage, lessionsList, lessionsCalculatorArea, calculatorAreas, calculatorAreaGroup,
        // Bhaskara
        bhaskaraResult, aBhaskara, bBhaskara, cBhaskara, delta, deltaSquareRoot, x1, x2,  bhaskaraCalculatorArea, 
        // Arithmetic Progression
         paResult, paFirstNumber, paFinalPosition, paRasion, paCalculatorArea, 
        // Arithmetic Progression addition
        paAddition
    };
}

var { lessionMenuButtonsList, lessionMenu, lessionMenuButtonImage, lessionsCalculatorArea, calculatorResult, resetButtonList, bhaskaraCalculatorArea, bhaskaraResult, resultButtonList, calculatorAreas, calculatorAreaGroup } = variables();
for (let i = 0; i < lessionsCalculatorArea.length; i++) {
    lessionsCalculatorArea[i].style.display = 'none';
    lessionMenuButtonImage.src = "./src/images/plus-icon.png";
}
for (let i2 = 0; i2 < lessionMenuButtonsList.length; i2++) {
    lessionMenuButtonsList[i2].addEventListener('click', function showCalculator() {
        if (lessionsCalculatorArea[i2].style.display === 'none') {
            lessionsCalculatorArea[i2].style.display = 'flex';
            lessionMenuButtonImage[i2].src = "./src/images/minus-icon.png";
            lessionMenu[i2].style.borderBottomLeftRadius = "0";
            lessionMenu[i2].style.borderBottomRightRadius = "0";
        } else {
            lessionsCalculatorArea[i2].style.display = 'none';
            lessionMenuButtonImage[i2].src = "./src/images/plus-icon.png";
            lessionMenu[i2].style.borderBottomLeftRadius = "15px";
            lessionMenu[i2].style.borderBottomRightRadius = "15px";
        }
    })
}

for (let i = 0; i < resetButtonList.length; i++) {
    resetButtonList[i].addEventListener('click', function resetCalculator() {
        bhaskaraResult.forEach((paragraph) => {
            paragraph.innerText = '';
        });
        calculatorAreaGroup[i].style.display = 'none';
    })    
}

resultButtonList.forEach((button, i) => {
    button.addEventListener('click', function calculate() {
        var { bhaskaraResult, aBhaskara, bBhaskara, cBhaskara, delta, deltaSquareRoot, x1, x2,  bhaskaraCalculatorArea } = variables();
        switch (i) {
            case 0:
                    bhaskaraCalculatorArea.style.display = 'flex';
                    for (let bhaskaraCounting = 0; bhaskaraCounting < bhaskaraResult.length; bhaskaraCounting++) {
                switch (bhaskaraCounting) {
                    case 0:
                        bhaskaraResult[bhaskaraCounting].innerText = `O valor de "a": ${aBhaskara}`;
                        break;
                    case 1:
                        bhaskaraResult[bhaskaraCounting].innerText = `O valor de "b": ${bBhaskara}`;
                        break;
                    case 2:
                        bhaskaraResult[bhaskaraCounting].innerText = `O valor de "c": ${cBhaskara}`;
                    break;
                    case 3:
                        if (aBhaskara === '' || bBhaskara === '' || cBhaskara === '' || isNaN(aBhaskara) || isNaN(bBhaskara) || isNaN(cBhaskara)) {
                            bhaskaraResult[bhaskaraCounting].innerText = 'Por favor insira números válidos!';
                            bhaskaraCounting = undefined;
                        } else {
                            bhaskaraResult[bhaskaraCounting].innerText = `Fórmula de bhaskara para calcular delta: b² - 4 . a . c`;
                        }
                        break;
                    case 4:
                        bhaskaraResult[bhaskaraCounting].innerText = `b² - 4 . a . c`;
                        break;
                    case 5:
                        bhaskaraResult[bhaskaraCounting].innerText = `${bBhaskara}² - 4 . ${aBhaskara} . ${cBhaskara}`;
                        break;
                    case 6:
                        bhaskaraResult[bhaskaraCounting].innerText = `${(bBhaskara ** 2)} - ${[4 * (parseInt(aBhaskara) * parseInt(cBhaskara))]}`;
                        break;
                    case 7:
                        bhaskaraResult[bhaskaraCounting].innerText = `√${delta}`;
                        break;
                    case 8:
                        if (delta < 0) {
                            bhaskaraResult[bhaskaraCounting].innerText = 'Não existem raízes reais, pois o valor de delta é menor que zero!';
                            bhaskaraCounting = undefined;
                        } else {
                            bhaskaraResult[bhaskaraCounting].innerText = deltaSquareRoot;
                        }
                        break;
                        case 9:
                        if (Number.isInteger(deltaSquareRoot) === false) {
                            bhaskaraResult[bhaskaraCounting].innerText = `Não há raíz exata, pois quadrada de ${delta} é ${deltaSquareRoot}. Não é um valor inteiro!`;
                            bhaskaraCounting = undefined;
                        } else {
                            bhaskaraResult[bhaskaraCounting].innerText = `Fórmula das raízes: (-b +- √▲) / 2`;
                        }
                        break;
                    case 10:
                        bhaskaraResult[bhaskaraCounting].innerText = `(${-bBhaskara} +- √${delta}) / 2`;
                        break;
                    case 11:
                        bhaskaraResult[bhaskaraCounting].innerText = `(${-bBhaskara} +- ${deltaSquareRoot}) /2`;
                        break;
                    case 12:
                        bhaskaraResult[bhaskaraCounting].innerText = `(${-bBhaskara} +- ${deltaSquareRoot}) /2;`
                        break;
                    case 13:
                        bhaskaraResult[bhaskaraCounting].innerText = `x1 = (${-bBhaskara} + ${deltaSquareRoot}) / 2`;
                        break;
                    case 14:
                        bhaskaraResult[bhaskaraCounting].innerText = `x1 = ${(parseInt(-bBhaskara) + parseInt(deltaSquareRoot))} / 2`;
                        break;
                    case 15:
                        bhaskaraResult[bhaskaraCounting].innerText = `x1 = ${x1}`;
                        break;
                    case 16:
                        bhaskaraResult[bhaskaraCounting].innerText = `x2 = (${-bBhaskara} - ${deltaSquareRoot}) / 2`;
                        break;
                    case 17:
                        bhaskaraResult[bhaskaraCounting].innerText = `x2 = (${parseInt(-bBhaskara) - parseInt(deltaSquareRoot)}) / 2`;
                        break;
                    case 18:
                        bhaskaraResult[bhaskaraCounting].innerText = `x2 = ${x2}`;
                        break;
                        default:
                            bhaskaraResult[bhaskaraCounting].innerText = 'Ocorreu um erro inesperado. Por favor, tente novamente.'
                            break;
                    }                
                }               
                break;
            case 1:
                var { paCalculatorArea, paFirstNumber, paFinalPosition, paRasion, paAddition } = variables();
                calculatorResult[i].style.display = 'flex';
                for(let paCounting = 0; paCounting < paCalculatorArea.length; paCounting++) {
                    switch (paCounting) {
                        case 0:
                            if (paFirstNumber === '' || paFinalPosition === '' || paRasion === '' || isNaN(paFirstNumber) || isNaN(paFinalPosition) || isNaN(paRasion)) {
                                paCalculatorArea[paCounting].innerText = 'Por favor insira números válidos!';
                                paCounting = undefined;
                            } else {
                                paCalculatorArea[paCounting].innerText = `Fórmula para calcular o número final de P.A.: An = a1 + (n - 1) . r`;
                            }
                            break;
                        case 1:
                            paCalculatorArea[paCounting].innerText = `An = ${paFirstNumber} + (${paFinalPosition} - 1) . ${paRasion}`;
                            break;
                        case 2:
                            paCalculatorArea[paCounting].innerText = `An = ${paFirstNumber} + ${paFinalPosition - 1} . ${paRasion}`;
                            break;
                        case 3:
                            paCalculatorArea[paCounting].innerText = `An = ${paFirstNumber} + ${(paFinalPosition - 1) * paRasion}`;
                            break;
                        case 4:
                            paCalculatorArea[paCounting].innerText = `An = ${parseInt(paFirstNumber) + (paFinalPosition - 1) * paRasion}`;
                            break;
                        case 5:
                            if (paAddition.checked === true) {
                                paCalculatorArea[paCounting].innerText = "Cálculo da soma da P.A.:"
                            } else {
                                paCounting = undefined;
                            }
                            break;
                        case 6:
                            paCalculatorArea[paCounting].innerText = `S${paFinalPosition} = (${paFirstNumber} + ${paLastNumber()}) . ${paFinalPosition} / 2`;
                            break;
                        case 7:
                            paCalculatorArea[paCounting].innerText = `S${paFinalPosition} = ${parseInt(paFirstNumber) + paLastNumber()} . ${paFinalPosition} / 2`;
                            break;
                        case 8:
                            paCalculatorArea[paCounting].innerText = `S${paFinalPosition} = ${(parseInt(paFirstNumber) + paLastNumber()) * paFinalPosition} / 2`;
                            break;
                        case 9:
                            paCalculatorArea[paCounting].innerText = `S${paFinalPosition} = ${[(parseInt(paFirstNumber) + paLastNumber()) * paFinalPosition] / 2}`;
                            break;
                    }
                }
            default:
                break;
        }
    })
});
function paLastNumber() {
    var {paFirstNumber, paFinalPosition, paRasion} = variables();
    let PALastNumber = parseInt(paFirstNumber) + (paFinalPosition - 1) * paRasion;
    return PALastNumber;
}