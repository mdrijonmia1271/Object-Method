const name = 'Rijon';
function add(num1, num2){
    var result = num1 + num2;
    console.log('Name Insite', name);
    function double(num){
        return num * 2;
    }
    const total = double(result);
    return total;
}

const sum = add(10, 20);
console.log('Name Outsite', name);
console.log(sum);

