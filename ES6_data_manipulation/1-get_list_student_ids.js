export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const ids = array.map(function(studentsId) {
    return studentsId.id
  });
  return ids;
}
