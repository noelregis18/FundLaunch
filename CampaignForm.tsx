
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  goal: z.string().refine(
    (val) => {
      const num = Number(val);
      return !isNaN(num) && num > 0;
    },
    { message: "Please enter a valid amount." }
  ),
  duration: z.string({
    required_error: "Please select campaign duration.",
  }),
  description: z.string().min(50, {
    message: "Description must be at least 50 characters.",
  }),
  image: z.string().optional(),
});

const CampaignForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      goal: "",
      image: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would connect to a backend
    console.log(values);
    toast({
      title: "Campaign Submitted",
      description: "Your campaign has been submitted for review.",
    });
    form.reset();
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your campaign title" {...field} />
                </FormControl>
                <FormDescription>
                  Choose a clear, specific title that describes your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Arts & Culture">Arts & Culture</SelectItem>
                    <SelectItem value="Community">Community</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Health">Health</SelectItem>
                    <SelectItem value="Fashion">Fashion</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the category that best fits your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Funding Goal ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="5000" {...field} />
                  </FormControl>
                  <FormDescription>
                    How much do you need to raise?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Duration</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="15">15 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="45">45 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    How long will your campaign run?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your campaign in detail..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Explain what your project is about, why it matters, and how you'll use the funds.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/your-image.jpg" {...field} />
                </FormControl>
                <FormDescription>
                  Provide a URL to an image that represents your campaign.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Submit Campaign</Button>
        </form>
      </Form>
    </div>
  );
};

export default CampaignForm;
