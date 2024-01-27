import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  const promise3 = signUpUser(firstName, lastName, fileName);

  return Promise.all([promise1, promise2, promise3])
    .then((results) => {
      return results.map((result) => {
        return {
          status: 'fulfilled',
          value: result,
        };
      });
    })
    .catch((error) => {
      return [
        {
          status: 'rejected',
          value: error,
        },
      ];
    });
}

