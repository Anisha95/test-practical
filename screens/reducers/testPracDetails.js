
export const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
};


const testPracDetails = (state=initialState, action) => {
   switch (action.type) {
       case 'ADD_TEST':
           return{
               ...state,
              ...action.data,
            };
        default:
            return state
   }
}

export default testPracDetails;