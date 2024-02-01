export default function createInt8TypedArray (length, position, value) {
  const buffer = new ArrayBuffer(length);
  const bufferLength = buffer.byteLength;

  if (position < 0 || position >= bufferLength) {
    throw new Error('Position outside range');
  }

  int8Array[position] = value;

  return buffer;
}
