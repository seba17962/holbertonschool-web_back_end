export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const ids = array.map((studentsId) => {
    return studentsId.id;
  });
  return ids;
}
