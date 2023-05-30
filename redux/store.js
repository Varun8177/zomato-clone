import { configureStore } from "@reduxjs/toolkit"
import placesSlice from "./slices/PlacesSlice"
import UserSlice from "./slices/UserSlice"

const store = configureStore({
    reducer: {
        placeReducer: placesSlice,
        userReducer: UserSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})
export default store