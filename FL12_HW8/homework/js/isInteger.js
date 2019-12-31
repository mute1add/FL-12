const isInteger = a => !!(a % parseInt(a) === 0 || a === 0);
isInteger(5.1);
