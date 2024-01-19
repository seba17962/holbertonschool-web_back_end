import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomsSizes = [19, 20, 34];
  const rooms = roomsSizes.map((size) => new ClassRoom(size));
  return rooms;
}
