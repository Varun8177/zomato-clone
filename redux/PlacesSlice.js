import { createSlice } from "@reduxjs/toolkit"

const placesSlice = createSlice({
    name: "place",
    initialState: {
        place: ""
    },
    reducers: {
        getPlace: (state, action) => {
            state.place = action.payload
        }
    }
})

export const { getPlace } = placesSlice.actions
export default placesSlice.reducer