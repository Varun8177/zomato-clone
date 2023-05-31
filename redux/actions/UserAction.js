import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { getUserDataSuccess } from "../slices/UserSlice"
import { Auth, db } from "@/firebase/firebase.config";
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const VerifyUser = async (dispatch) => {
    try {
        const res = await signInWithPopup(Auth, new GoogleAuthProvider())
        const { user } = res;
        if (user) {
            dispatch(getUserDataSuccess(user))
        }
    } catch (error) {
        console.log(error)
    }
}

export const VerifyEmail = async (dispatch, email, password, customToast) => {
    try {
        const res = await signInWithEmailAndPassword(Auth, email, password)
        const { user } = res;
        if (user) {
            dispatch(getUserDataSuccess(user))
            customToast("success", "Logged in successfully", "")
        }
    } catch (error) {
        customToast("error", "something went wrong", error.message)
    }
}


export const CreateUserEmail = async (name, email, password, phone, CustomToast, onClose, dispatch) => {
    try {
        const res = await createUserWithEmailAndPassword(Auth, email, password);
        const { user } = res
        if (user) {
            const updatedUser = { ...user, displayName: name, phoneNumber: phone }
            console.log(updatedUser)
            try {
                const res2 = await updateProfile(user, {
                    displayName: name,
                    phoneNumber: phone,
                });
                console.log("updated", res2)
                dispatch(getUserDataSuccess(updatedUser))
                CustomToast("account created successfully", "", "success");
                onClose();

            } catch (error) {
                console.log("update_Error", error)
            }
        }
    } catch (error) {
        CustomToast("something went wrong", error.message, "error");
    }
}


export const AddFavouriteReq = async (id, restraunt, handleBooked) => {
    try {
        const res = await getDoc(doc(db, "favourites", id));
        if (!res.exists()) {
            await setDoc(doc(db, "favourites", id), { restraunts: [] });
            await updateDoc(doc(db, "favourites", id), { restraunts: arrayUnion(restraunt) });
            handleBooked()
        } else {
            await updateDoc(doc(db, "favourites", id), { restraunts: arrayUnion(restraunt) });
            handleBooked()
        }

    } catch (error) {
        console.log(error)
    }
}

export const RemoveFavouriteReq = async (id, restraunt, handleRemoved) => {
    try {
        const res = await getDoc(doc(db, "favourites", id));
        if (res.exists()) {
            await updateDoc(doc(db, "favourites", id), { restraunts: arrayRemove(restraunt) });
            handleRemoved();
        }
    } catch (error) {
        console.log(error);
    }
}


const AddOrderReq = async (id, item) => {
    try {
        const res = await setDoc(doc(db, "orders", id), item);
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export const AddRecentReq = async (id, restraunt) => {
    try {
        const res = await getDoc(doc(db, "recent", id));
        if (!res.exists()) {
            await setDoc(doc(db, "recent", id), { restraunts: [] });
            await updateDoc(doc(db, "recent", id), { restraunts: arrayUnion(restraunt) });
        } else {
            const checkArray = res.data().restraunts.filter((rest) => rest.id === restraunt.id)
            if (checkArray.length === 0) {
                await updateDoc(doc(db, "recent", id), { restraunts: arrayUnion(restraunt) });
            }
        }

    } catch (error) {
        console.log(error)
    }
}