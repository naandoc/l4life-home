"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/CreateContext";
import LoginForm from "@/components/login-form/login-form";

export default function Login() {
  const { isLogged, setIsLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setIsLogged(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLogged) router.push("/");
  }, [isLogged, router]);

  return (
    <>
      <LoginForm />
      <p>{isLogged ? "true" : "false"}</p>
    </>
  );
}
