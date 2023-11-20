function variables() {
    let lessionsList = document.querySelectorAll('.lession');
    let lessionsCalculatorArea = document.querySelectorAll('.lession-calculator');
    let lessionMenuButtonsList = document.querySelectorAll('.lession-menu-button');
    let bhaskaraResult = document.querySelectorAll(".bhaskara-result");
    let a = document.querySelector('.bhaskara-a-number').value;
    let b = document.querySelector('.bhaskara-b-number').value;
    let c = document.querySelector('.bhaskara-c-number').value;
    let resultButtonList = document.querySelectorAll(".result-button");
    let resetButtonList = document.querySelectorAll('.reset-button');
    let bhaskaraCalculatorArea = document.getElementById('bhaskara-calculator-result');
    let delta = (b ** 2) - (4 * [a * c]);
    let deltaSquareRoot = Math.sqrt(delta);
    let x1 = [(-1 * b) + deltaSquareRoot] / 2;
    let x2 = [(-1 * b) - deltaSquareRoot] / 2;
    
    return { bhaskaraResult, a, b, c, delta, deltaSquareRoot, x1, x2, resultButtonList , resetButtonList,  bhaskaraCalculatorArea, lessionMenuButtonsList, lessionsList, lessionsCalculatorArea };
}


var { bhaskaraResult, resultButtonList, resetButtonList,  bhaskaraCalculatorArea, lessionMenuButtonsList, lessionsList, lessionsCalculatorArea } = variables();

for (let i2 = 0; i2 < lessionMenuButtonsList.length; i2++) {
    lessionMenuButtonsList[i2].addEventListener('click', function() {
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
    resetButtonList[i].addEventListener('click', function() {
        bhaskaraCalculatorArea.style.display = 'none';
        for (let i = 0; i < bhaskaraResult.length; i++) {
                bhaskaraResult[i].innerText = '';
            }
        })    
    }
    for (let i = 0; i < resultButtonList.length; i++) {
        resultButtonList[i].addEventListener('click', function() {
            var { bhaskaraResult, a, b, c, delta, deltaSquareRoot, x1, x2,  bhaskaraCalculatorArea } = variables();
            bhaskaraCalculatorArea.style.display = 'flex';
        switch (i) {
            case 0: 
            for (let i = -1; i <= 18; i++) {
                switch (i) {
                    case 0:
                                bhaskaraResult[i].innerText = `O valor de "a": ${a}`;
                                break;
                                case 1:
                                    bhaskaraResult[i].innerText = `O valor de "b": ${b}`;
                                break;
                                case 2:
                                bhaskaraResult[i].innerText = `O valor de "c": ${c}`;
                                break;
                                case 3:
                                    bhaskaraResult[i].innerText = `Fórmula de bhaskara para calcular delta: b² - 4 . a . c`;
                                break;
                                case 4:
                                bhaskaraResult[i].innerText = `b² - 4 . a . c`;
                                break;
                            case 5:
                                bhaskaraResult[i].innerText = `${b}² - 4 . ${parseInt(a) + parseInt(c)}`;
                                break;
                                case 6:
                                    bhaskaraResult[i].innerText = `${(b ** 2)} - ${[4 * (parseInt(a) * parseInt(c))]}`;
                                break;
                                case 7:
                                bhaskaraResult[i].innerText = `√${delta}`;
                                break;
                                case 8:
                                    if (Number.isInteger(deltaSquareRoot) === true) {
                                        bhaskaraResult[i].innerText = deltaSquareRoot;
                                } else {
                                    bhaskaraResult[i].innerText = '';
                                };
                                break;
                                case 9:
                                if (delta < 0) {
                                    bhaskaraResult[i].innerText = 'Não existem raízes reais, pois o valor de delta é menor que zero!';
                                    i = undefined;
                                } else if (Number.isInteger(deltaSquareRoot) === false) {
                                    bhaskaraResult[i].innerText = `Não há raíz exata, pois quadrada de ${delta} é ${deltaSquareRoot}. Não é um valor inteiro!`;
                                    i = undefined
                                } else {
                                    bhaskaraResult[i].innerText = `Fórmula das raízes: (-b +- √▲) / 2`;
                                }
                                break;
                                case 10:
                                    bhaskaraResult[i].innerText = `(${-b} +- √${delta}) / 2`;
                                    break;
                                    case 11:
                                        bhaskaraResult[i].innerText = `(${-b} +- ${deltaSquareRoot}) /2`;
                                break;
                            case 12:
                                bhaskaraResult[i].innerText = `(${-b} +- ${deltaSquareRoot}) /2;`
                                break;
                                case 13:
                                    bhaskaraResult[i].innerText = `x1 = (${-b} + ${deltaSquareRoot}) / 2`;
                                break;
                            case 14:
                                bhaskaraResult[i].innerText = `x1 = ${(parseInt(-b) + parseInt(deltaSquareRoot))} / 2`;
                                break;
                            case 15:
                                bhaskaraResult[i].innerText = `x1 = ${x1}`;
                                break;
                                case 16:
                                    bhaskaraResult[i].innerText = `x2 = (${-b} - ${deltaSquareRoot}) / 2`;
                                    break;
                                    case 17:
                                bhaskaraResult[i].innerText = `x2 = (${parseInt(-b) - parseInt(deltaSquareRoot)}) / 2`;
                                break;
                                case 18:
                                    bhaskaraResult[i];
                                bhaskaraResult[i].innerText = `x2 = ${x2}`;
                        }
                    } 
                    break;
                }
    })
}