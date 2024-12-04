
// find the largest value of the sentence 
// steps:
// 1: first split the sentece  using split() method
// 2: then store in array 


const sentence = (value)=>{
    if(value.trim().length == 0){
        return false;
    }
    
    words = value.split(" ");
    // sort => they sort the value base on unicode 
    words = words.sort((a,b)=> a.length - b.length);
    console.log(words);
    return words.at(-1);
    
};

console.log(
    sentence("My name is tayyab khattak from akorakhattak")
);
