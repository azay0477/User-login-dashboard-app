import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("login");
  }, []);
  return <>Go to Login page</>;
}
