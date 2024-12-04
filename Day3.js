

const countCharacter = (word , char )=>{

    if(word.length == 0 || char.length == 0){
        return false;
    }

    word = word.toUpperCase();
    totalcount = word.split("").reduce( (acc, curChar) => {
        if(curChar === char){
            acc ++;
        }
        return acc;
    },0)

    console.log(totalcount);
    return totalcount;
    
}

console.log(
    countCharacter("NorthDekoate" , "O")
);
