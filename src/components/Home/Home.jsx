import React, { useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "../Signup/Signup";

const Home = () => {
  const showToast = useCallback((message, type) => {
    if (type === "error") {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }, []);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Signup showToast={showToast} />
    </div>
  );
};

export default Home;
