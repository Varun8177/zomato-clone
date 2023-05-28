import { createSlice } from "@reduxjs/toolkit"

const placesSlice = createSlice({
    name: "place",
    initialState: {
        place: "",
        suggestions: [],
        restraunts: []
    },
    reducers: {
        getPlace: (state, action) => {
            state.place = action.payload
        },
        getRestrauntSuccess: (state, action) => {
            state.restraunts = action.payload
        },
        getSuggestionSuccess: (state, action) => {
            state.suggestions = action.payload
        }
    }
})

export const { getPlace, getRestrauntSuccess, getSuggestionSuccess } = placesSlice.actions
export default placesSlice.reducer