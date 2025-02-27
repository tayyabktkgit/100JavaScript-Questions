
// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const displayDataNdTime = ()=>{
    const today =  new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = days[today.getDay()];

    const hours = today.getHours();
    const mints = today.getMinutes();
    const seconds = today.getSeconds();
    
    console.log("Today is "+day);
    console.log("Time is "+ hours +":"+ mints+":" + seconds);

    
}
displayDataNdTime();