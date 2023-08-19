import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type RequireUserProps = {
  children: React.ReactNode;
};

const RequireUser: React.FC<RequireUserProps> = ({ children }) => {
    console.log('Requireuser');
  const navigate = useNavigate();
  const getUser = () => {
    if (localStorage.getItem("user-data") === null) {
      navigate("/");
      if (location.pathname === "/") {
        toast.warning('Submit the form to access this page');
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return <>{children}</>;
};
export default RequireUser;
