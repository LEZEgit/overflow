type FlashToastPayload = {
  toastType: "success" | "error";
  message: string;
  description?: string;
};

const FLASH_TOAST_KEY = "flash-toast";

export const setFlashToast = (payload: FlashToastPayload) => {
  sessionStorage.setItem(FLASH_TOAST_KEY, JSON.stringify(payload));
};

export const clearFlashToast = () => {
  sessionStorage.removeItem(FLASH_TOAST_KEY);
};

export const consumeFlashToast = (): FlashToastPayload | null => {
  const raw = sessionStorage.getItem(FLASH_TOAST_KEY);
  if (!raw) return null;

  sessionStorage.removeItem(FLASH_TOAST_KEY);
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};
