import * as z from "zod";

export const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 3 characters.",
      })
      .max(30),
    email: z
      .string()

      .email(),

    password1: z
      .string()
      .min(5, { message: "Password must be 8 or more characters long" }),
    password2: z
      .string()
      .min(5, { message: "Password must be 8 or more characters long" }),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords must match",
    path: ["password2"],
  });

export const loginFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 3 characters.",
    })
    .max(30),

  password: z
    .string()
    .min(5, { message: "Password must be 8 or more characters long" }),
});

export const productCategoriesSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title too short",
    })
    .max(30, {
      message: "Title too long",
    }),
  primary: z.coerce.string(),

  parent_category: z.coerce.string(),
});

export const productCategoriesSchemaOptional = productCategoriesSchema.partial({
  parent_category: true,
});
