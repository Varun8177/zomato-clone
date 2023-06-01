import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { getUserDataSuccess } from "../slices/UserSlice"
import { Auth, db } from "@/firebase/firebase.config";
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";


export const VerifyUser = async (dispatch) => {
    try {
        const res = await signInWithPopup(Auth, new GoogleAuthProvider())
        const { user } = res;
        if (user) {
            await setDoc(doc(db, "users", user.uid), { bookmarks: [], recent: [], orders: [], uid: user.uid, displayName: user.displayName, phoneNumber: user.phoneNumber, email: user.email, photoURL: user.photoURL });
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
            try {
                await setDoc(doc(db, "users", user.uid), { bookmarks: [], recent: [], orders: [], uid: user.uid, displayName: name, phoneNumber: phone, email: user.email, photoURL: user.photoURL });
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

export const getInitalUser = async (id, dispatch) => {
    try {
        const res = await getDoc(doc(db, "users", id));
        dispatch(getUserDataSuccess(res.data()));
        console.log(res.data())
    } catch (error) {
        console.log(error)
    }
}


export const AddFavouriteReq = async (id, restraunt, handleBooked) => {
    try {
        const res = await getDoc(doc(db, "users", id));
        if (res.exists()) {
            await updateDoc(doc(db, "users", id), { bookmarks: arrayUnion(restraunt) });
            handleBooked()
        }
    } catch (error) {
        console.log(error)
    }
}

export const RemoveFavouriteReq = async (id, restraunt, handleRemoved) => {
    try {
        const res = await getDoc(doc(db, "users", id));
        if (res.exists()) {
            await updateDoc(doc(db, "users", id), { bookmarks: arrayRemove(restraunt) });
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
        const res = await getDoc(doc(db, "users", id));
        if (res.exists()) {
            const checkArray = res.data().recent.filter((rest) => rest.id === restraunt.id)
            if (checkArray.length === 0) {
                await updateDoc(doc(db, "users", id), { recent: arrayUnion(restraunt) });
            }
        }
    } catch (error) {
        console.log(error)
    }
}