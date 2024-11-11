import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters.",
    })
    .max(100, {
      message: "Title must be less than 50 characters.",
    }),
  description: z
    .string()
    .min(3, {
      message: "Description must be at least 3 characters.",
    })
    .max(1000, {
      message: "Description must be less than 1000 characters.",
    }),
  category: z
    .string()
    .min(3, {
      message: "Category must be at least 3 characters.",
    })
    .max(100, {
      message: "Category must be less than 100 characters.",
    }),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");

        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }),
  pitch: z
    .string()
    .min(10, {
      message: "Pitch must be at least 3 characters.",
    })
    .max(1000, {
      message: "Pitch must be less than 1000 characters.",
    }),
});
