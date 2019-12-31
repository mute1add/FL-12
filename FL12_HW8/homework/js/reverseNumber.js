const reverseNumber = num => {
    const strNum = num.toString();
    const reversed = parseInt(strNum.split('').reverse().join(''));
    return strNum[0] === '-' ? -reversed : reversed;
}
reverseNumber(10000); 