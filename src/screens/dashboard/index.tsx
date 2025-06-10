'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import FormInput from '@/components/ui/formInput';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { WagerSchema, WagerValidation } from '@/libs/validations/auth';
import Header from '@/components/shared/header';

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
    <>
      <Header />
      <section className="flex h-[-webkit-fill-available] w-full flex-col items-center p-4">
        <main className="border-ash-300 flex w-full max-w-md flex-col items-center space-y-6 rounded-sm border bg-white p-2">
          <h1 className="text-lg font-bold">Book Wager</h1>

          <div className="flex w-full justify-between p-4">
            <div className="">
              <span className="mb-1 block text-xs font-bold text-black">
                FOR
              </span>
              <div className="h-[2rem] w-[6rem] rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-400 italic focus-within:ring-1 focus-within:ring-blue-500 focus-within:outline-none md:w-[10rem]">
                username1
              </div>
            </div>
            <div>
              <span className="mb-1 block text-right text-xs font-bold text-black">
                AGAINST
              </span>
              <div className="h-[2rem] w-[6rem] rounded border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-400 italic md:w-[10rem]"></div>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-x-4 p-4"
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
                className="mt-6 w-full rounded-full bg-blue-500 py-3 font-medium text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                type="submit"
              >
                Book
              </Button>
            </form>
          </Form>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
