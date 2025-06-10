'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import FormInput from '@/components/ui/formInput';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { WagerSchema, WagerValidation } from '@/libs/validations/auth';

const Dashboard = () => {
  const form = useForm<WagerValidation>({
    defaultValues: {
      wager: '',
      amount: '',
    },
    resolver: zodResolver(WagerSchema),
  });

  const onSubmit = async (data: WagerValidation) => {
    console.log(data);
  };

  return (
    <section
      aria-labelledby=""
      className="flex w-full flex-col items-center justify-center space-y-6 p-4"
    >
      <div className="flex w-full max-w-md flex-row items-center justify-between bg-white py-2">
        <Image
          src="/logo.svg"
          width={20}
          height={20}
          alt="logo"
          className="h-12 w-10"
        />
        <Button className="rounded-full bg-blue-500 px-4 py-0 text-sm text-white hover:bg-blue-500">
          Join now
        </Button>
      </div>
      <main className="flex w-[50%] flex-col items-center justify-center space-y-10 rounded-3xl bg-white p-6">
        <h1 className="text-lg font-bold">Book Wager</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-[-webkit-fill-available] space-y-4 space-x-4"
          >
            <FormInput
              name="wager"
              label="Wager Condition"
              placeholder="Enter wager condition"
              type="text"
              required={true}
            />
            <FormInput
              name="amount"
              label="Amount"
              placeholder="Enter amount"
              type="text"
              required={true}
            />
            <Button
              className="m-auto w-[90%] rounded-full bg-blue-500 py-2 text-white hover:bg-blue-500"
              type="submit"
            >
              Book
            </Button>
          </form>
        </Form>
      </main>
    </section>
  );
};

export default Dashboard;
