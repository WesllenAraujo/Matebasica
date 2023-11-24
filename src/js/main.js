function variables() {
    let lessionsList = document.querySelectorAll('.lession');
    let lessionsCalculatorArea = document.querySelectorAll('.lession-calculator');
    let lessionMenuButtonsList = document.querySelectorAll('.lession-menu-button');
    let bhaskaraResult = document.querySelectorAll(".bhaskara-result");
    let aBhaskara = document.querySelector('.bhaskara-a-number').value;
    let bBhaskara = document.querySelector('.bhaskara-b-number').value;
    let cBhaskara = document.querySelector('.bhaskara-c-number').value;
    let resultButtonList = document.querySelectorAll(".result-button");
    let resetButtonList = document.querySelectorAll('.reset-button');
    let bhaskaraCalculatorArea = document.getElementById('bhaskara-calculator-result');
    let delta = (bBhaskara ** 2) - (4 * [aBhaskara * cBhaskara]);
    let deltaSquareRoot = Math.sqrt(delta);
    let x1 = [(-1 * bBhaskara) + deltaSquareRoot] / 2;
    let x2 = [(-1 * bBhaskara) - deltaSquareRoot] / 2;
    
    return { bhaskaraResult, aBhaskara, bBhaskara, cBhaskara, delta, deltaSquareRoot, x1, x2, resultButtonList , resetButtonList,  bhaskaraCalculatorArea, lessionMenuButtonsList, lessionsList, lessionsCalculatorArea };
}

var { lessionMenuButtonsList, lessionsCalculatorArea, resetButtonList, bhaskaraCalculatorArea, bhaskaraResult, resultButtonList } = variables();

for (let i = 0; i < lessionsCalculatorArea.length; i++) {
    lessionsCalculatorArea[i].style.display = 'none';
    
}
for (let i2 = 0; i2 < lessionMenuButtonsList.length; i2++) {
    lessionMenuButtonsList[i2].addEventListener('click', function showCalculator() {
        if (lessionsCalculatorArea[i2].style.display === 'none') {
            lessionsCalculatorArea[i2].style.display = 'flex';
            lessionMenuButtonsList[i2].innerText = '-';
        } else {
            lessionsCalculatorArea[i2].style.display = 'none';
            lessionMenuButtonsList[i2].innerText = '+';
        }
    })
}

for (let i = 0; i < resetButtonList.length; i++) {
    resetButtonList[i].addEventListener('click', function resetCalculator() {
        bhaskaraCalculatorArea.style.display = 'none';
        for (let i = 0; i < bhaskaraResult.length; i++) {
            bhaskaraResult[i].innerText = '';
        }
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
                        if (isNaN(aBhaskara) === true) {
                            bhaskaraResult[bhaskaraCounting].innerText = 'Por favor insira um valor de "a" válido!';
                            bhaskaraCounting = undefined;
                        } else if (isNaN(bBhaskara) === true) {
                            bhaskaraResult[bhaskaraCounting].innerText = 'Por favor insira um valor de "b" válido!';
                            bhaskaraCounting = undefined;
                        } else if (isNaN(cBhaskara) === true) {
                            bhaskaraResult[bhaskaraCounting].innerText = 'Por favor insira um valor de "c" válido!';
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
        
            default:
                break;
        }
    })
});