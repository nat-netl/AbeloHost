"use client";

import { Header } from "@/components/Header";
import { Login } from "@/components/Login";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [router, user]);

  return (
    <>
      <Header />
      <Login />
    </>
  );
};

export default LoginPage;
