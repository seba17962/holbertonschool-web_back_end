import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([photoPromise, userPromise])
    .then((results) =>{
      return results.map((result) => {
        return {
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : result.reason,
        };
      });
    })

    .catch((error) => {
      return [{
        status: 'rejected',
        value: error,
      }];
    });
}
