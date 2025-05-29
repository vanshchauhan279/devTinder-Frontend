import { createSlice } from '@reduxjs/toolkit'

const userFeed = createSlice({
  name: 'feed',
  initialState: null,
  reducers: {
     feedData: (state,action)=>{
        return action.payload;
     },
     removeFromFeed: (state,action)=>{
      if(!state) return [];
      return state.filter((r)=>r._id !==action.payload)
     }
  },
})

export const { feedData ,removeFromFeed} = userFeed.actions
export default userFeed.reducer