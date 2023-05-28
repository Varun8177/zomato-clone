import { configureStore } from "@reduxjs/toolkit"
import placesSlice from "./PlacesSlice"

const store = configureStore({
    reducer: {
        placeReducer: placesSlice
    }
})
export default store