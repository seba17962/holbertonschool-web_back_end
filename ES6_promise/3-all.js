import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photoResult, userResult]) => {
      return `${photoResult.body} ${userResult.firstName} ${userResult.lastName}`;
    })

    .catch(() => {
      console.log(`Signup system offline`);
});
}
