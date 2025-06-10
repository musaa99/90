import { z } from 'zod';

const WagerSchema = z.object({
  wager: z.string().min(1, 'Please provide a wager condition'),
  amount: z.string().min(1, 'Please provide an amount'),
});

type WagerValidation = z.infer<typeof WagerSchema>;

export { WagerSchema };
export type { WagerValidation };
