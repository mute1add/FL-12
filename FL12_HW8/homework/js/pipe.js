const addOne = x => x + 1;
const minusOne = x => x - 1;

const pipe = (x, ...functions) => {
    let res = x;
    for (let i = 0; i < functions.length; i++) {
        res = functions[i](res);
    }
    return res;
}

pipe(1, addOne, addOne, minusOne);