////defining basic functions
//addition
function add(a, b) {
    return a + b;
}
//subtraction
function subtr(a, b) {
    return a - b;
}
//multiplication
function multi(a, b) {
    return a * b
}
//division
function divi(a, b) {
    return a / b;
}

////general calculator function
function operate(a, b, c) {
    switch (a) {
        case 'a':
            add(b, c);
            break;
        case 's':
            subtr(b, c);
            break;
        case 'm':
            multi(b, c);
            break;
        case 'd':
            divi(b, c);
            break;
        default:
            console.log('something went wrong!')
    }
}