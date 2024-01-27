export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return Promise.resolve({ body: 'success', status: 200 });
    })
    .catch(() => {
      return Promise.reject(new Error());
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
