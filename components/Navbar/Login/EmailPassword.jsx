import { VerifyEmail } from "@/redux/actions/UserAction";
import { Button, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const EmailPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
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

  const handleClick = (e) => {
    e.preventDefault();
    setLoad(true);
    VerifyEmail(dispatch, email, password, customToast);
  };

  return (
    <form onSubmit={handleClick}>
      <Input
        type="email"
        placeholder="Enter your email"
        mb={"10px"}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={6}
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
        Login
      </Button>
    </form>
  );
};

export default EmailPassword;
