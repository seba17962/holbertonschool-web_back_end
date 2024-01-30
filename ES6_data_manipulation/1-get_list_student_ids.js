export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const ids = array.map(studentsId => studentsId.id);

  return ids;
}
