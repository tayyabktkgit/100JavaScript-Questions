
async function fetchData(){
    try {
        // here they waait for response when the fetch all data from api then they go next 
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        // then convert reponse data into json 
        const data = await response.json();
        console.log("Data Fetch: ",data);
    } catch (error) {
     console.log("Error:",error);
    }
}

fetchData();