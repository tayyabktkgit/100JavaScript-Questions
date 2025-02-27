const tryMap = ()=>{
    const arr = [1, null, undefined, 4, NaN];
    const newArr = arr.map((item, index)=>{
        return item * 2;
    });
    console.log(newArr);
}
tryMap();

// if null so the output will be 0
// if undefined so the output will be NaN 
// if NaN so the output will be NaN 