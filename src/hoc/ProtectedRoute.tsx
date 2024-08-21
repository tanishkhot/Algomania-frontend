"use client";

import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Adjust the path accordingly

type ProtectedRouteProps = {
  children: ReactNode;
  allowedRoles: string[]; // Array of roles allowed to access the route
};

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { isLoggedIn, user_type, isTeam } = useAuth(); // Access auth context
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    } else if (!allowedRoles.includes(user_type || "")) {
      router.push("/unauthorized");
    } else if (!isTeam() && user_type === "STUD") {
      router.push("/team");
    }
  }, [isLoggedIn, user_type, router, allowedRoles]);

  if (!isLoggedIn || !allowedRoles.includes(user_type || "")) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
