import { z } from "zod";

const itemSchema = z.object({
  menu_item_id: z.string().uuid("Invalid menu item id"),
  name: z.string().min(1, "Item name is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  unit_price: z.number().min(0, "Unit price must be >= 0"),
  total_price: z.number().min(0, "Total price must be >= 0"),
  notes: z.string().optional(),
});

export const schema = z.object({
  tenant_id: z.string().uuid("Invalid tenant id"),
  order_number: z.string().min(1, "Order number is required"),

  order_type: z.enum(["delivery", "pickup"], {
    errorMap: () => ({ message: "Order type must be delivery or pickup" }),
  }),

  branch_id: z.string().uuid("Invalid branch id"),
  customer_id: z.string().uuid("Invalid customer id"),

  customer_name: z.string().min(2, "Customer name is required"),

  customer_phone: z
    .string()
    .regex(/^(\+20|0)?1[0-2,5]{1}[0-9]{8}$/, "Invalid Egyptian phone number"),

  customer_email: z.string().email("Invalid email"),

  delivery_address: z.string().min(5, "Address is required"),

  notes: z.string().optional(),

  items: z.array(itemSchema).min(1, "At least one item is required"),

  subtotal: z.number().min(0),
  tax: z.number().min(0),
  discount: z.number().min(0),
  total: z.number().min(0),

  payment_method: z.enum(["cash", "card"], {
    errorMap: () => ({ message: "Payment must be cash or card" }),
  }),

  points_to_redeem: z.number().min(0),
  points_to_earn: z.number().min(0),
})
.superRefine((data, ctx) => {
  const calculatedTotal = data.subtotal + data.tax - data.discount;

  if (Math.abs(calculatedTotal - data.total) > 0.01) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Total is not valid",
      path: ["total"],
    });
  }

  data.items.forEach((item, index) => {
    const calc = item.quantity * item.unit_price;

    if (Math.abs(calc - item.total_price) > 0.01) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Item total_price is incorrect",
        path: ["items", index, "total_price"],
      });
    }
  });
});