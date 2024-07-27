export const fetchHandler = async (url, options = {}) => {
   // taking in the url parameter that is the link
   //options is the empty parameter
    try {

    
    
    const response = await fetch(url, options)
    
    if(!response.ok) {
        throw new Error(`Fetch failed with status - ${response.status} ${response.statusText}}`)
    }

    const isJson = (response.headers.get('content-type') || '').includes('application/json');
    // const isJSON accessing the response, getting the headers key and getting the string 'content type'
    // seeing if it includes 
    // question --> incldues

    // why empty string?
    // if the headers.get is empty it wil retrun null and the rest of the function is not going to run, a guard cluase essentially

    if (isJson) { // if isJson is true
      const jsonData = await response.json();  // wait for fetch and reutnr the data into json
      return [jsonData, null] 
      // returns the tupple (immutable array) and turns it into json  data and return null for error handling
    }

    const textData = await response.text(); // waiting for a fetch response and turning the response into text
    return [textData, null] // returning the tupple with the json text and return null for error handling

    } catch (error){ // catch the error
        console.warn(error) // print the error/warn message into the consol
    return [null , error] 
    // tupple is going to return null or error based off the promise

    } 
    


};
