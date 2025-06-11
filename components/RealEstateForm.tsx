// app/components/RealEstateForm.tsx

'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { Textarea } from './ui/textarea';

// NEW: Define a comprehensive schema for all user inputs.
// z.coerce.number() is used to automatically convert string input from the form to a number for validation.
const formSchema = z.object({
  address: z.string().min(10, "Please enter a valid address."),
  price: z.string().min(1, "Price is required."),
  bedrooms: z.coerce.number().positive("Must be a positive number."),
  bathrooms: z.coerce.number().positive("Must be a positive number."),
  sqft: z.coerce.number().positive("Must be a positive number."),
  features: z.string().min(10, "Please list at least one key feature."),
  tourStyle: z.string().min(1, "Please select a tour style."),
});

// The type is now inferred from the full schema
type FormValues = z.infer<typeof formSchema>;

interface RealEstateFormProps {
  onSubmit: (data: FormValues) => void;
  isLoading: boolean;
}

// Data from the brief is now used for default values, not static text.
const defaultPropertyDetails = {
  address: "12012 Crest Ct, Beverly Hills, CA 90210",
  price: "$10,183,985",
  bedrooms: 5,
  bathrooms: 6.5,
  sqft: 6100,
  features: "Luxury estate, three-car garage, landscaped grounds, elegant entrance with grand staircase, modern design, prime Beverly Hills location.",
  tourStyle: 'Luxury & Elegant',
};

export function RealEstateForm({ onSubmit, isLoading }: RealEstateFormProps) {
  const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    // Pre-fill the form with the required property details
    defaultValues: defaultPropertyDetails,
  });

  const handleFormSubmit = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Virtual Tour Generator</CardTitle>
        <CardDescription>
          Enter the property details below to generate a video tour.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <CardContent className="space-y-4">
          {/* Address Input */}
          <div className="space-y-2">
            <Label htmlFor="address">Property Address</Label>
            <Input id="address" {...register('address')} />
            {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
          </div>

          {/* Grid for numerical details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" placeholder="$10,000,000" {...register('price')} />
              {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="sqft">Square Footage</Label>
              <Input id="sqft" type="number" {...register('sqft')} />
              {errors.sqft && <p className="text-sm text-red-500">{errors.sqft.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Input id="bedrooms" type="number" {...register('bedrooms')} />
              {errors.bedrooms && <p className="text-sm text-red-500">{errors.bedrooms.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Input id="bathrooms" type="number" step="0.5" {...register('bathrooms')} />
              {errors.bathrooms && <p className="text-sm text-red-500">{errors.bathrooms.message}</p>}
            </div>
          </div>
          
          {/* Features Textarea */}
          <div className="space-y-2">
            <Label htmlFor="features">Key Features</Label>
            <Textarea id="features" placeholder="e.g., Luxury estate, three-car garage..." {...register('features')} />
            {errors.features && <p className="text-sm text-red-500">{errors.features.message}</p>}
          </div>

          {/* Tour Style Select */}
          <div className="space-y-2">
            <Label>Tour Style</Label>
            <Controller name="tourStyle" control={control} render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger><SelectValue placeholder="Select a style" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Luxury & Elegant">Luxury & Elegant</SelectItem>
                  <SelectItem value="Modern & Fast-Paced">Modern & Fast-Paced</SelectItem>
                  <SelectItem value="Family-Friendly & Warm">Family-Friendly & Warm</SelectItem>
                  <SelectItem value="Cinematic & Dramatic">Cinematic & Dramatic</SelectItem>
                </SelectContent>
              </Select>
            )} />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Generate Virtual Tour
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}