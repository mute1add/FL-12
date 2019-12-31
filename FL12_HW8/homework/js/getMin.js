const getMin = (...args) => {
    let min = args[0];
    for (let i = 0; i < args.length - 1; i++) {
        if (args[i] > args[i + 1]) {
            min = args[i + 1]
        }
    }
    return min;
};
getMin(3, 0, -3);