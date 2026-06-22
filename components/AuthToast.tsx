"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { consumeFlashToast } from "@/lib/toast";

const AuthToast = () => {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const flashToast = consumeFlashToast();
      if (flashToast) {
        toast[flashToast.toastType](flashToast.message, {
          description: flashToast.description,
          position: "top-right",
        });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return null;
};

export default AuthToast;
