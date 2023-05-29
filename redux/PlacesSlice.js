import { createSlice } from "@reduxjs/toolkit"

const placesSlice = createSlice({
    name: "place",
    initialState: {
        locationLoad: false,
        load: false,
        place: "",
        suggestions: [],
        restraunts: [],
        restrauntDetails: {},
        ActiveFilters: [],
        dineoutData: [],
        collections: []
    },
    reducers: {
        startLoading: (state) => {
            state.load = true
        },
        startLocationLoading: (state) => {
            state.locationLoad = true
        },
        getPlace: (state, action) => {
            state.place = action.payload
            state.locationLoad = false
        },
        getRestrauntSuccess: (state, action) => {
            state.restraunts = action.payload
            state.load = false
        },
        getSuggestionSuccess: (state, action) => {
            state.suggestions = action.payload
        },
        getRestruntDetails: (state, action) => {
            state.restrauntDetails = action.payload
        },
        activateFilter: (state, action) => {
            if (!state.ActiveFilters.includes(action.payload)) {
                state.ActiveFilters.push(action.payload)
            }
            state.load = false
        },
        getDineOutSuccess: (state, action) => {
            state.dineoutData = action.payload
            state.load = false
        },
        getCollectionSuccess: (state, action) => {
            state.collections = action.payload
        },
        removeFilter: (state, action) => {
            const updatedData = state.ActiveFilters.filter((item, i) => i !== action.payload)
            state.ActiveFilters = updatedData
        }
    }
})

export const { getPlace, getRestrauntSuccess, getSuggestionSuccess, getRestruntDetails, activateFilter, getDineOutSuccess, getCollectionSuccess, startLoading, removeFilter, startLocationLoading } = placesSlice.actions
export default placesSlice.reducer