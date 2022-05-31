import { Link,useParams  } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux"

  
export default function Room() {
    const { building } = useParams();
    const [roomId, setRoomId] = useState("1");
    const [path, setPath] = useState("/Building/" + building + "/Room/" + roomId);
    const change = function(oEvent){
        setRoomId(oEvent.target.value);
    };

    useEffect(()=>{      
        setPath("/Building/" + building + "/Room/" + roomId) ;
    },[roomId]
    )

    const rooms = [{
        "id":1,
        "room" : "Room 1"
    }];
    return (
      <div>
        <h1>Rooms</h1>
        {/* <h2>{buildingContext}</h2> */}
        <label htmlFor="room">Choose Room:</label>
        <br/>
        <select onChange={change} required="true" id="room">
            {rooms.map((item)=>{
                return <option key={item.id} value = {item.id}>{item.room}</option>
            })}
        </select>
        <h2></h2>
        <button><Link to={path}>Next</Link></button>
      </div>
    );
  }