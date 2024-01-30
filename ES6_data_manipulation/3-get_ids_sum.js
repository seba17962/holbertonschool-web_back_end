export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  const idSum = studentsList.reduce((accumulator, students) => {
    return accumulator + students.id;
  }, 0);

  return idSum;
}
