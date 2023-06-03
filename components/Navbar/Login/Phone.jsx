import { Auth, db } from "@/firebase/firebase.config";
import { getUserDataSuccess } from "@/redux/slices/UserSlice";
import {
  Avatar,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const PhoneComponent = () => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [ShowOtp, setShowOtp] = useState(false);
  const [confirmation, setConformation] = useState("");
  const [OTP, setOTP] = useState("");
  const [userData, setUserData] = useState({});
  const toast = useToast();
  const customToast = (status, title, description) => {
    toast.closeAll();
    toast({
      title,
      status,
      description,
      position: "top-left",
    });
    setLoad(false);
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log(response);
            onSignup();
          },
          "expired-callback": () => {},
        },
        Auth
      );
    }
  }

  const onSignup = () => {
    setLoad(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+91" + phone;

    signInWithPhoneNumber(Auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        setConformation(confirmationResult);
        customToast(
          "info",
          "OTP sended successfully!",
          "a verification code has been sent to the mobile number, please enter it to proceed"
        );
        setShowOtp(true);
        setLoad(false);
      })
      .catch((error) => {
        customToast("error", "something went wrong", error.message);
        setLoad(false);
      });
  };

  const onOTPVerify = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const res = await confirmation.confirm(OTP);
      dispatch(getUserDataSuccess(res.user));
      customToast("success", "successfully logged in", "");
      setLoad(false);
    } catch (error) {
      customToast("error", "something went wrong", error.message);
      setLoad(false);
    }
  };

  const handleSearch = async (e, phone) => {
    e.preventDefault();
    setLoad(true);
    const q = query(collection(db, "users"), where("phoneNumber", "==", phone));
    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size < 1) {
        console.log(querySnapshot.empty());
        customToast("error", "No user found", "please signup first");
      } else {
        querySnapshot.forEach((doc) => {
          setUserData(doc.data());
        });
        onSignup();
      }
      setLoad(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };

  return (
    <>
      <div id="recaptcha-container"></div>
      {ShowOtp ? (
        <form onSubmit={onOTPVerify}>
          <Input
            type="tel"
            placeholder="Enter the verification code"
            mb={"10px"}
            onChange={(e) => setOTP(e.target.value)}
          />
          <Button
            mt={"20px"}
            w={"100%"}
            color={"white"}
            bgColor={"#e03546"}
            _hover={{ bgColor: "#e03546" }}
            type="submit"
            isLoading={load}
          >
            verify OTP
          </Button>
        </form>
      ) : (
        <form onSubmit={(e) => handleSearch(e, phone)}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Avatar
                src="https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/india.png?alt=media&token=32fdbcee-57dd-4b78-97da-3f5835e1ac7b"
                size={"sm"}
              />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              mb={"10px"}
              onChange={(e) => setPhone(e.target.value)}
              minLength={10}
              maxLength={10}
              required
            />
          </InputGroup>
          <Button
            mt={"20px"}
            w={"100%"}
            color={"white"}
            bgColor={"#e03546"}
            _hover={{ bgColor: "#e03546" }}
            type="submit"
            isLoading={load}
          >
            Get verification code
          </Button>
        </form>
      )}
    </>
  );
};

export default PhoneComponent;
