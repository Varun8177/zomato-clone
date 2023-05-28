import axios from "axios";
import { getPlace, getRestrauntSuccess, getSuggestionSuccess } from "../PlacesSlice"

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

export const getLocationDetails = async (text, dispatch) => {
    try {
        const res = await axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${text}`, {
            headers: {
                "user-key": process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
            }
        })
        const { data } = res
        if (data) {
            dispatch(getSuggestionSuccess(data.location_suggestions))
        }
    } catch (error) {
        console.log(error)
    }
}

export const getRestraunts = async (dispatch, controller, place) => {
    try {
        const res = await axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${place}`, {
            headers: {
                "user-key": process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
            },
            signal: controller.signal
        })
        const { data } = res
        if (data) {
            const { entity_id, entity_type, title } = data.location_suggestions[0]
            try {
                const res = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=${entity_type}&q=${title}&start=80&count=21&sort=rating&order=asc`, {
                    headers: {
                        "user-key": process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
                    },
                    signal: controller.signal
                })
                const { data } = res
                if (data) {
                    dispatch(getRestrauntSuccess(data.restaurants))
                }
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }
}