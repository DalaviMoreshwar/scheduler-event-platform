import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(400, "Description must be at less 400 characters"),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(400, "Location must be at less 400 characters"),
  imageUrl: z.string().url(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string().min(24, "Please select a category"),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
