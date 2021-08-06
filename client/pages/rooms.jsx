import React, {useEffect, useState} from 'react'
import { useAppContext } from "../context/state";
import Room from "../components/room.js"

export default function Rooms() {
    const { socket } = useAppContext();
    const [rooms, setRooms] = useState([]);
    const [roomName, setroomName] = useState();
    useEffect(() => {
        socket.emit("get_rooms");
        socket.on("return_rooms", (rooms) => {
            console.log(rooms)
            setRooms(rooms)
        })
    }, [socket])

    useEffect(() => {
        
    }, rooms)
    const create = (event) => {
        event.preventDefault();
        socket.emit("make_room", roomName);
        socket.emit("get_rooms");
        socket.on("return_rooms", (rooms) => {
            console.log(rooms)
            setRooms(rooms)
        })
    }
    return (
        <div>
            <div>
                <h1>Rooms</h1>
            </div>
            <div>   
                {
                    rooms.map((room, index) => 
                        <Room key={index} name={room}></Room>
                    )
                }
            </div>
            <div>
                <form onSubmit={create}>
                    <input type = "text" value={roomName} onChange = {(event) => setroomName(event.target.value)}></input>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}
