import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "userInfo",
  initialState: { name: "", username: "", password: "",member:[]},
  reducers:{
    setName:(state,action) =>{
      state.name = action.payload;
    },
    setUsername:(state,action) =>{
      state.username = action.payload;
    },
    setPassword:(state,action) =>{
      state.password = action.payload;
    },
    setMember:(state,action) =>{
      state.member.push(action.payload);
    },
    setUserInfo:(state,action) =>{
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    
    resetUserInfo: () => userSlice.getInitialState(),
  }
});

export const {setName,setUsername,setPassword,setUserInfo,setMember,resetInfo} = userSlice.actions;
export default userSlice.reducer;