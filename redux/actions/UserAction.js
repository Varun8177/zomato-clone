import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup, updateProfile } from "firebase/auth";
import { getUserDataSuccess } from "../slices/UserSlice"
import { Auth } from "@/firebase/firebase.config";

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
