//The function "getFullResponseFromAPI" exports a promise that thoroughly checks for success. 
//When the API call is successful, the promise returns a status code of 200 and a clear success message. 
//However, if there is an error, the promise will reject with an error message indicating that the API is not currently working.

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
