import z from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, "Username can't be empty."),
  email: z.email().min(1, "Email can't be empty."),
  password: z.string().min(6, "Password is too short."),
});

export const signInSchema = z.object({
  email: z.email().min(1, "Email can't be empty."),
  password: z.string().min(6, "Password is too short."),
});