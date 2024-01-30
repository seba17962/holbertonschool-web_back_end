export default function getStudentsByLocation(studentsList, city) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  const specificCity = studentsList.filter((studentsList) => studentsList.location === city)

  return specificCity
}
