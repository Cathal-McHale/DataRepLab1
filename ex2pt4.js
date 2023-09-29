const ages = [25, 31, 42, 77];


let partD = ages.map((item) => {
    //items less than 70 get multiplied
    if (item < 70) {
        return item * 2;
    } else {
        return item;
    }


    return item * 2;
});

console.log(partD);

