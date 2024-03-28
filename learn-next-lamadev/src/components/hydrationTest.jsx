"use client";
import React, { useState, useEffect } from "react";
export default function HydrationTest() {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  const a = Math.random();
  console.log(a);

  return a;
}
