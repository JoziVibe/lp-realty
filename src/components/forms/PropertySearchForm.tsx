"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Tags, Search } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export function PropertySearchForm() {
    const form = useForm();
  
    function onSubmit(data: any) {
        console.log(data);
    }
    
  return (
    <div className="mt-8 w-full max-w-4xl mx-auto p-4 md:p-2 rounded-3xl md:rounded-full bg-white/90 md:bg-background/70 backdrop-blur-sm border border-neutral-200 md:border-white/20 shadow-xl md:shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-10 items-center gap-3 md:gap-2">
            <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                    <FormItem className="md:col-span-5">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="h-12 text-base bg-white rounded-full border border-neutral-200 md:border-0 focus:ring-2 focus:ring-ring focus:ring-offset-0">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-muted-foreground" />
                                        <SelectValue placeholder="Select a location" />
                                    </div>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white/80 backdrop-blur-xl border-white/40 shadow-xl">
                                <SelectItem value="cape-town">Cape Town & Surrounds</SelectItem>
                                <SelectItem value="johannesburg">Johannesburg & Surrounds</SelectItem>
                                <SelectItem value="lucky">I'm feeling Lucky</SelectItem>
                            </SelectContent>
                        </Select>
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
                                <SelectTrigger className="h-12 text-base bg-white rounded-full border border-neutral-200 md:border-0 focus:ring-2 focus:ring-ring focus:ring-offset-0">
                                    <div className="flex items-center gap-2">
                                        <Home className="h-5 w-5 text-muted-foreground" />
                                        <SelectValue placeholder="Type" />
                                    </div>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white/80 backdrop-blur-xl border-white/40 shadow-xl">
                                <SelectItem value="any">Any Type</SelectItem>
                                <SelectItem value="house">House</SelectItem>
                                <SelectItem value="apartment">Apartment</SelectItem>
                                <SelectItem value="cluster">Cluster</SelectItem>
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
                                <SelectTrigger className="h-12 text-base bg-white rounded-full border border-neutral-200 md:border-0 focus:ring-2 focus:ring-ring focus:ring-offset-0">
                                     <div className="flex items-center gap-2">
                                        <Tags className="h-5 w-5 text-muted-foreground" />
                                        <SelectValue placeholder="Price" />
                                    </div>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white/80 backdrop-blur-xl border-white/40 shadow-xl">
                                <SelectItem value="any">Any Price</SelectItem>
                                <SelectItem value="<2m">Below R2M</SelectItem>
                                <SelectItem value="2m-3m">R2M - R3M</SelectItem>
                                <SelectItem value="3m-5m">R3M - R5M</SelectItem>
                                <SelectItem value="5m-8m">R5M - R8M</SelectItem>
                                <SelectItem value="8m-15m">R8M - R15M</SelectItem>
                                <SelectItem value=">15m">Over R15M</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}
            />

            <Button type="submit" size="icon" className="h-12 w-full md:w-12 rounded-full md:col-span-1 bg-[#003f47] text-white hover:bg-[#003f47]/90 mt-1 md:mt-0">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </Button>
        </form>
      </Form>
    </div>
  );
}
