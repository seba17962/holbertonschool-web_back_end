export default function getListStudentIds(array) {
  const ids = array.map(function(studentsId) {
    return studentsId.id
  });
  return ids;
}
