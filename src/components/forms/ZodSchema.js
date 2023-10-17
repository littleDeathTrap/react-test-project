import { z } from "zod";

export const basicSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 ch"),
    confirmPassword: z.string().min(10, "Password must be at least 10 ch"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });
