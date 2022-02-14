import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    appId:'70abdaa4fad34bdc9159df4e68572953',
    channelName:'channel',
    token:'00670abdaa4fad34bdc9159df4e68572953IAA/o9RjrZCLgXLAVjqEqs9fhNAhR4AJbI+vcRABwqvGlUeO+aIAAAAAEADL5xHfM3kLYgEAAQAyeQti',
}

const classConfig = createSlice({
    name: 'classConfig',
    initialState,
    reducers: {
        
     
    },
  });
  
  export const {  } = classConfig.actions
  
  export default classConfig.reducer;