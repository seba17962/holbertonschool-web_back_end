export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      throw new Error('name must be a string.');
    } else {
      this.__name__ = name;
    }
    if (typeof length !== 'number' || length <= 0) {
      throw new Error('length must be a positive number');
    } else {
      this.__length__ = length;
    }
    if (!Array.isArray(students) || !students.every((item) => typeof item === 'string')) {
      throw new Error('students must be an array of strings.');
    } else {
      this.__students__ = [...students];
    }
  }

  get name() {
    return this.__name;
  }

  set name(name) {
    if (typeof (name) === 'string') {
      this.__name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this.__length;
  }

  set length(l) {
    if (typeof (l) === 'number') {
      this.__length = l;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this.__students;
  }

  set students(std) {
    if (std.every((i) => typeof i === 'string')) {
      this.__students = std;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
