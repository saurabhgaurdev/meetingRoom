import {useParams} from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";

  
export default function Meeting() {
    const { building } = useParams();
    const { room } = useParams();
    const [date, setDate] = useState("");
  
    return (
      <div>
        <h1>Building: {building}</h1>
        <h2>Room: {room}</h2>
        <label for="appt">Choose a time for your meeting:</label>
        <input type="date" value={date} onChange={e => setDate(e.value)}></input>
        <input type="time" id="appt" name="appt" min="09:00" max="18:00" required></input>
        <input type="time" id="appt" name="appt" min="09:00" max="18:00" required></input>
        <button>Save</button>
      </div>
    );
  }