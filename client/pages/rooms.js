import React, {useEffect} from 'react'
import { useAppContext } from "../context/state";
import Room from "../components/room.js"

export default function Rooms() {
    const { socket } = useAppContext();
    const [rooms, setRooms] = useState();
    
    useEffect(() => {
        socket.emit("get_rooms");
        socket.on("return_rooms", (rooms) => {
            console.log(rooms)
        })
    }, [socket])
    return (
        <div>
            <div>
                <h1>Rooms</h1>
            </div>
            <div>   
                
            </div>
        </div>
    )
}
