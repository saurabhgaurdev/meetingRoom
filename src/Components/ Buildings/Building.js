import { Link,useParams  } from "react-router-dom";
import { useState,useEffect } from "react";
import { connect } from "react-redux";
import {addMeeting,getData} from "./../../actions/index"


  
function Building(props) {
  
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
    
    useEffect(()=>{
        console.log(props.getData());
        console.log(props.buildings);
    },[]);

    const [buildingId, setBuildingId] = useState("");
    const change = function(oEvent){
        setBuildingId(oEvent.target.value);
    };
    return (
      <div>
        <h1>Buildings</h1> 
        {/* <h2>{buildingContext}</h2> */}
        <label htmlFor="building">Choose Building:</label>
        <br/>
        <select onChange={change} required="true" id="building">
            {buildings.map((item)=>{
                return <option key={item.id} value = {item.id}>{item.name}</option>
            })}
        </select>
        <h2></h2>
        <button><Link to={ buildingId? "/Building/"+ buildingId : "Building"}>Next</Link></button>
      </div>
    );
  }

const mapStateToProps = state => {
    return {
        buildings: state.rootReducer,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getData: () => dispatch( 
        getData()
    ),
    addMeeting:()=> dispatch(addMeeting())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Building)

//   