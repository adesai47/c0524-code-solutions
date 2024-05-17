/* exported getStudentNames */
interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const names: string[] = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}
