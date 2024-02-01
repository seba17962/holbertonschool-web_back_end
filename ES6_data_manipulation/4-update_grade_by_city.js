export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const filteredStudents = studentsList.filter((student) => student.location === city);

  const updatedStudents = filteredStudents.map((student) => {
    const newGrade = newGrades.find(grade => grade.studentId === student.id);

    const grade = newGrade ? newGrade.grade : 'N/A';

    return {
      ...student,
      grade: grade,
    };
  });
  return updatedStudents;
}
