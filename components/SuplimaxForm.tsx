// app/components/SuplimaxForm.tsx

// FIX 1: Add this directive at the VERY TOP of the file.
// This tells Next.js that this component uses hooks and interactivity.
'use client';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  features: z.string().min(10, { message: 'Please describe at least one key feature.' }),
  tone: z.string(),
  targetAudience: z.string(),
  videoStyle: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface SuplimaxFormProps {
  onSubmit: (data: FormValues) => void;
  isLoading: boolean;
}
export function SuplimaxForm({ onSubmit, isLoading }: SuplimaxFormProps) {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      features: "",
      tone: 'Energetic',
      targetAudience: 'Young Adults (18-30)',
      videoStyle: 'Fast-paced & Dynamic',
    },
  });

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create Your Ad</CardTitle>
        <CardDescription>Fill in the details below to generate your video.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="features">Key Product Features</Label>
            <Input id="features" placeholder="e.g., zero sugar, natural caffeine, enhanced focus" {...register('features')} />
            {errors.features && <p className="text-sm text-red-500">{errors.features.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Tone</Label>
              <Controller name="tone" control={control} render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger><SelectValue placeholder="Select a tone" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Energetic">Energetic</SelectItem>
                    <SelectItem value="Inspirational">Inspirational</SelectItem>
                    <SelectItem value="Humorous">Humorous</SelectItem>
                  </SelectContent>
                </Select>
              )} />
            </div>
            <div className="space-y-2">
              <Label>Target Audience</Label>
              <Controller name="targetAudience" control={control} render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger><SelectValue placeholder="Select an audience" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Young Adults (18-30)">Young Adults (18-30)</SelectItem>
                    <SelectItem value="Athletes & Fitness Enthusiasts">Athletes & Fitness Enthusiasts</SelectItem>
                    <SelectItem value="Students & Professionals">Students & Professionals</SelectItem>
                  </SelectContent>
                </Select>
              )} />
            </div>
            <div className="space-y-2">
              <Label>Video Style</Label>
              <Controller name="videoStyle" control={control} render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger><SelectValue placeholder="Select a style" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fast-paced & Dynamic">Fast-paced & Dynamic</SelectItem>
                    <SelectItem value="Cinematic & Epic">Cinematic & Epic</SelectItem>
                    <SelectItem value="User-Generated Content (UGC) Style">UGC Style</SelectItem>
                  </SelectContent>
                </Select>
              )} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading} className="w-full mt-3">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Generating...' : 'Generate Video'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}