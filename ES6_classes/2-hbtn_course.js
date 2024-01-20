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
      get: () => this._name,
      set: (newValue) => {
        if (typeof newValue === 'string') {
          this._name = newValue;
        } else {
          console.error('Invalid value type. Must be a string.');
        }
      },
    });

    Object.defineProperty(this, 'length', {
      get: () => this._length,
      set: (newValue) => {
        if (typeof newValue === 'number') {
          this._length = newValue;
        } else {
          console.error('Invalid value type. Must be a number.');
        }
      },
    });

    Object.defineProperty(this, 'students', {
      get: () => [...this._students], // Return a copy of the array
      set: (newValue) => {
        if (Array.isArray(newValue) && newValue.every(student => typeof student === 'string')) {
          this._students = [...newValue]; // Using spread syntax to create a copy of the array
        } else {
          console.error('Invalid value type. Must be an array of strings.');
        }
      },
    });
  }
}
