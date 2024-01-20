export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      throw new Error('name must be a string.');
    }
    if (typeof length !== 'number' || length <= 0) {
      throw new Error('length must be a positive number')
    }
    if (!Array.isArray(students) || !students.every(item => typeof item === 'string')) {
      throw new Error('students must be an array of strings.');
    }
    this._name = name;
    this._length = length;
    this._students = [...students];

    Object.defineProperty(this, 'name', {
      get: () => {
        console.log('Getting the value of name');
        return this._name;
      },
      set: (newValue) => {
        console.log('Setting the value of name to', newValue);
        if (typeof newValue === 'string') {
          this._name = newValue;
        } else {
          console.error('Invalid value type. Must be a string.');
        }
      },
    });

    Object.defineProperty(this, 'length', {
      get: () => {
        console.log('Getting the value of length');
        return this._length;
      },
      set: (newValue) => {
        console.log('Setting the value of length to', newValue);
        if (typeof newValue === 'number') {
          this._length = newValue;
        } else {
          console.error('Invalid value type. Must be a number.');
        }
      },
    });

    Object.defineProperty(this, 'students', {
      get: () => {
        console.log('Getting the value of students');
        return [...this._students]; 
      },
      set: (newValue) => {
        console.log('Setting the value of students to', newValue);
        if (Array.isArray(newValue) && newValue.every(student => typeof student === 'string')) {
          this._students = [...newValue];
        } else {
          console.error('Invalid value type. Must be an array of strings.');
        }
      },
    });
  }
}
