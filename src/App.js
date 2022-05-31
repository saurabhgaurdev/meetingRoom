import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Building from './Components/ Buildings/Building';
import Room from './Components/Rooms/Room';
import Meeting from './Components/Meetings/Meeting';

const buildings = [{"name": "Building 1",
"id" : 1
},
{"name": "Building 2",
 "id" : 2
},
{"name": "Building 3",
"id" : 3
},
{"name": "Building 4",
"id" : 4
},
{"name": "Building 5",
"id" : 5
},
{"name": "Building 6",
"id" : 6
}];

function App() {
  return (
    <div className="App">
      {/* <BuildingContext.Provider value={buildings}> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Building" element={<Building/>} />
          <Route exact path="/Building/:building" element={<Room />} />
          <Route exact path="/Building/:building/Room/:room" element={<Meeting/>} />
        </Routes>
      </Router>
      {/* </BuildingContext.Provider> */}

     
    </div>
  );
}

export default App;
