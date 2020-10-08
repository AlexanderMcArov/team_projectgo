import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomList';
// import {RoomConsumer} from  '../context';
// import Loading from './Loading';

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//              {value => {
//                 const { loading, setRoom, sortedRooms,rooms } = value;
//                 if (loading) {
//                   return <Loading />;
//                 }
//                 return (
//                   <>
//                     <RoomsFilter rooms={rooms} />
//                     <RoomsList rooms={sortedRooms} setRoom={setRoom} />
//                   </>
//                 );
//               }}
//             </RoomConsumer>
//     )
// }
