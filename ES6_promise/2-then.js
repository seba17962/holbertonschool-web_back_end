export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      return { body: 'success', status: 200 };
    })
    .catch(() => {
      return new Error()
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
