let arr1 = [1, 2, 3];

let doubleArr = [];

arr1.forEach((item) => {
    doubleArr.push(item * 2);
});

let isInclude = doubleArr.includes(2);
console.log(isInclude);
