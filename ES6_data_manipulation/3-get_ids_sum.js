export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  const idSum = studentsList.reduce((accumulator, students) => (accumulator + students.id))

  return idSum
}

