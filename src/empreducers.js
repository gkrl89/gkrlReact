export function Reducer(state, action) {
     
    switch (action.type) {
      case "add":
        return {
          postData: [...state.postData, action.payload],
        };
  
      case "edit":
        const empDetails = action.payload;
        console.log('edited');
          const details = state.postData.map((emp) => {
            if (emp.id === empDetails.id) {
              return empDetails;
            }
            return emp;
          });
        return {
          ...state,
          postData: details,
        };
    }
  }