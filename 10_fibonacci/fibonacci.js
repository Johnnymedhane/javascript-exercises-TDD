const fibonacci = function(num) {
    let count;
    if (num !== 'number') {
     count = parseInt(num);
    }
    else {
        count = num;
    }

    if (count <= 0) return "opps";
    if (count === 0) return 0;

const arr = [0, 1];

for (let i = 2; i <= count; i++) {
    arr[i] = arr[i -1] + arr[i -2];
}
return arr[count];
};

// Do not edit below this line
module.exports = fibonacci;
