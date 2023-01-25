import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import Button from "../components/Button";
import useUserStore from "../hooks/zustand/useUserStore";

const UserPage: FC = () => {
  const { userToken: user, setUserToken } = useUserStore((state) => state);

  return (
    <>
      {user ? (
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold text-center lg:text-left">
            Welcome, {user}!
          </h1>
          <Button title="Logout" clickAction={() => setUserToken("")} />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default UserPage;
