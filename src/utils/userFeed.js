import { createSlice } from '@reduxjs/toolkit'

const userFeed = createSlice({
  name: 'feed',
  initialState: null,
  reducers: {
     feedData: (state,action)=>{
        return action.payload;
     }
  },
})

export const { feedData } = userFeed.actions
export default userFeed.reducer