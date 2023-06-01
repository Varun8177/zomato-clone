import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: "user-details",
    initialState: {
        user: {}
    },
    reducers: {
        getUserDataSuccess: (state, action) => {
            state.user = action.payload
        },
        AddRecentSuccess: (state, action) => {
            state.user = { ...state.user, recent: [...state.user.recent, action.payload] }
        },
        AddBookmarkSuccess: (state, action) => {
            state.user = { ...state.user, bookmarks: [...state.user.bookmarks, action.payload] }
        },
        RemoveBoookmarkSuccess: (state, action) => {
            const updatedBookmark = state.user.bookmarks.filter((res) => res.id !== action.payload.id)
            state.user = { ...state.user, bookmarks: updatedBookmark }
        },
        AddAddressSuccess: (state, action) => {
            state.user = { ...state.user, address: [...state.user.address, action.payload] }
        },
        AddOrderSuccess: (state, action) => {
            state.user = { ...state.user, orders: [...state.user.orders, action.payload] }
        },
    }
})

export const { getUserDataSuccess, AddBookmarkSuccess, RemoveBoookmarkSuccess, AddRecentSuccess, AddAddressSuccess, AddOrderSuccess } = UserSlice.actions
export default UserSlice.reducer