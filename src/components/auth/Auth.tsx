"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { syncUser } from "@/actions/users-actions";

const Auth = () => {
  useEffect(() => {
    const handleSyncUser = async () => {
      await syncUser(); // Llamada a la Server Action
    };

    handleSyncUser();
  }, []);

  return (
    <>
      <div className="relative">
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
};

export default Auth;
