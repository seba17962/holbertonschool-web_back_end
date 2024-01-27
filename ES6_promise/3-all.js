import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photoResult, userResult]) => {
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`)
    })

    .catch((error) => {
      console.log(`Signup system offline`);
});
}
