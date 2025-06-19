import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel, // Not used as per visual, relying on placeholders
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }), // Adjusted min length based on typical login forms
  rememberMe: z.boolean().default(false).optional(),
});

type LoginFormValues = z.infer<typeof formSchema>;

interface LoginFormProps {
  className?: string;
  // onLogin?: (data: LoginFormValues) => Promise<void>; // Optional callback for parent component
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  async function onSubmit(values: LoginFormValues) {
    setIsLoading(true);
    console.log("Login form submitted:", values);
    // Simulate API call
    // if (props.onLogin) {
    //   await props.onLogin(values);
    // }
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Example: form.reset(); // Optionally reset form after submission
    alert(`Simulated Login Attempt:\nEmail: ${values.email}\nPassword: ${values.password}\nRemember Me: ${values.rememberMe}`);
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-6 text-left">
        <p className="text-sm text-muted-foreground">Please enter your details</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input type="email" placeholder="Email adress" {...field} className="h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Password</FormLabel> */}
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} className="h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex items-center justify-between pt-1">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      id="rememberMe"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <Label htmlFor="rememberMe" className="text-sm font-normal text-muted-foreground cursor-pointer">
                    Remember for 30 days
                  </Label>
                </FormItem>
              )}
            />
            <Button variant="link" type="button" className="px-0 h-auto text-sm font-medium text-primary hover:text-primary/90">
              Forgot password
            </Button>
          </div>

          <Button type="submit" className="w-full h-10 mt-2 bg-primary text-primary-foreground hover:bg-primary/90" disabled={isLoading}>
            {isLoading ? (
              <>
                {/* Placeholder for a spinner icon if desired */}
                {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
                Signing up...
              </>
            ) : 'Sign up'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;