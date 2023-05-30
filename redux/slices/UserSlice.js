import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: "user-details",
    initialState: {
        user: {}
    },
    reducers: {
        getUserDataSuccess: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { getUserDataSuccess } = UserSlice.actions
export default UserSlice.reducer