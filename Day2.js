
// Question : Create function pass sting value and the capitalize first letter each word and then concatinate and add Hash add starting
const generateHash = (str)=>{
    if(str.length > 280 || str.trim().lenght==0){
        return false;
    } 
    
    str = str.split(" ");
    str = str.map((curnElm)=> 
        // curnElm.replace(curnElm[0], curnElm[0].toUpperCase())
    curnElm.charAt(0).toUpperCase() + curnElm.slice(1)

);
    str = `#${str.join("")}`;
    console.log(str);
    
    // return str;
}

console.log(
    generateHash("my name is khattak")
);
