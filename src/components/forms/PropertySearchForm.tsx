"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin, Home, DollarSign, Search } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export function PropertySearchForm() {
    const form = useForm();
  
    function onSubmit(data: any) {
        console.log(data);
    }
    
  return (
    <div className="mt-8 w-full max-w-5xl mx-auto p-4 rounded-2xl bg-background/70 backdrop-blur-sm border border-white/20 shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-10 items-center gap-4">
            <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
                <FormItem className="md:col-span-4">
                    <FormControl>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input {...field} placeholder="Enter a location..." className="h-14 text-base pl-10 bg-white" />
                        </div>
                    </FormControl>
                </FormItem>
            )}
            />
          
            <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                    <FormItem className="md:col-span-2">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="h-14 text-base bg-white">
                                    <div className="flex items-center gap-2">
                                        <Home className="h-5 w-5 text-muted-foreground" />
                                        <SelectValue placeholder="Type" />
                                    </div>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="any">Any Type</SelectItem>
                                <SelectItem value="house">House</SelectItem>
                                <SelectItem value="apartment">Apartment</SelectItem>
                                <SelectItem value="condo">Condo</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="priceRange"
                render={({ field }) => (
                    <FormItem className="md:col-span-2">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="h-14 text-base bg-white">
                                     <div className="flex items-center gap-2">
                                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                                        <SelectValue placeholder="Price" />
                                    </div>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="any">Any Price</SelectItem>
                                <SelectItem value="<500k">&lt; R500k</SelectItem>
                                <SelectItem value="500k-1m">R500k - R1M</SelectItem>
                                <SelectItem value="1m-2m">R1M - R2M</SelectItem>
                                <SelectItem value=">2m">&gt; R2M</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}
            />

            <Button type="submit" size="lg" className="h-14 text-base font-semibold w-full md:col-span-2">
                <Search className="mr-2 h-5 w-5" />
                Search
            </Button>
        </form>
      </Form>
    </div>
  );
}
