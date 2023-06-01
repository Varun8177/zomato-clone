import axios from "axios";
import { getPlace, getRestrauntSuccess, getSuggestionSuccess, activateFilter, getDineOutSuccess, getCollectionSuccess, startLoading } from "../slices/PlacesSlice"

export const getLiveLocation = async (coords, dispatch, CreateQuery) => {
    const { latitude, longitude } = coords;
    try {
        const res = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
        );
        const { data } = res;
        if (data) {
            dispatch(getPlace(data.address.county))
            CreateQuery(data.address.county)
        }
    } catch (err) {
        console.log(err);
    }
}

export const getLocationDetails = async (text, dispatch) => {
    try {
        const res = await axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${text}`, {
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

export const getRestraunts = async (dispatch, controller, place, page) => {
    dispatch(startLoading())
    try {
        const res = await axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${place}`, {
            headers: {
                "user-key": process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
            },
            signal: controller.signal
        })
        const { data } = res
        if (data) {
            const { entity_id, entity_type, title, latitude, longitude } = data.location_suggestions[0]
            try {
                const res = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=${entity_type}&q=${title}&lat=${latitude}&lon=${longitude}&start=${page}&count=18`, {
                    headers: {
                        "user-key": process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
                    },
                    signal: controller.signal
                })
                const { data } = res
                if (data) {
                    console.log(data)
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

export const FilterRestaurants = async (term, dispatch, place) => {
    dispatch(startLoading())
    try {
        const res = await axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${place}`, {
            headers: {
                "user-key": process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
            },
        })
        const { data } = res
        if (data) {
            const { entity_id, entity_type, latitude, longitude } = data.location_suggestions[0]
            try {
                const res = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=${entity_type}&q=${term}&lat=${latitude}&lon=${longitude}&start=0&count=18`, {
                    headers: {
                        "user-key": process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
                    },
                })
                const { data } = res
                if (data) {
                    dispatch(getRestrauntSuccess(data.restaurants))
                    dispatch(activateFilter(term))
                }
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const getNightLifeReq = async (dispatch, controller, place, keyword, category) => {
    dispatch(startLoading())
    try {
        const res = await axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${place}`, {
            headers: {
                "user-key": process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
            },
            signal: controller.signal
        })
        const { data } = res
        if (data) {
            const { city_id } = data.location_suggestions[0]
            try {
                const res = await axios.get(
                    'https://developers.zomato.com/api/v2.1/search',
                    {
                        headers: {
                            'user-key': process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
                        },
                        params: {
                            count: 18,
                            keyword,
                            outdoor: 1,
                            city_id,
                            category
                        },
                        signal: controller.signal
                    }
                );
                const { data } = res;
                dispatch(getDineOutSuccess(data.restaurants))
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error)
    }
};

export const getCollections = async (dispatch, controller, place) => {
    try {
        const res = await axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${place}`, {
            headers: {
                "user-key": process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
            },
            signal: controller.signal
        })
        const { data } = res
        if (data) {
            const { city_id } = data.location_suggestions[0]
            try {
                const response = await axios.get(
                    'https://developers.zomato.com/api/v2.1/collections',
                    {
                        headers: {
                            'user-key': process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
                        },
                        params: {
                            city_id
                        },
                        signal: controller.signal
                    }
                );

                const { collections } = response.data;
                dispatch(getCollectionSuccess(collections))
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error)
    }
};

export const autoCompleteSearch = async (query) => {
    try {
        const response = await axios.get(
            'https://developers.zomato.com/api/v2.1/autocomplete',
            {
                headers: {
                    'user-key': process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
                },
                params: {
                    q: query,
                },
            }
        );

        const { restaurants, locations, cuisines } = response.data;

        console.log('Restaurant Suggestions:', restaurants);
        console.log('Location Suggestions:', locations);
        console.log('Cuisine Suggestions:', cuisines);
    } catch (error) {
        console.log(error);
    }
};