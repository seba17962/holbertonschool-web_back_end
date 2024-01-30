export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  /* eslint-disable arrow-body-style */
  const idSum = studentsList.reduce((accumulator, students) => {
    return accumulator + students.id;
  }, 0);
  /* eslint-enable arrow-body-style */
  return idSum;
}
