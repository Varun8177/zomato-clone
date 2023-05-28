import axios from "axios";
import { getPlace } from "./PlacesSlice"

export const getLiveLocation = async (coords, dispatch) => {
    const { latitude, longitude } = coords;
    try {
        const res = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
        );
        const { data } = res;
        if (data) {
            dispatch(getPlace(data.address.county))
        }
    } catch (err) {
        console.log(err);
    }
}