const INITIAL_STATE = {};

const rootReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case "ADD_MEETING":

           return {

            id: 2,
          text: "SASA",
          completed: false

           };
        case "GET_DATA":{
            return {

                id: 2,
              text: "SASA",
              completed: false
    
               };
        }

         default: return {

            id: 2,
          text: "SASA",
          completed: false

           };

    }

};

export default rootReducer;