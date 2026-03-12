import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/hero-bg/1920/1280"
          alt="Futuristic house"
          fill
          className="object-cover"
          priority
          data-ai-hint="futuristic modern house"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold">
            Build Your Future, One<br/>Property at a Time.
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-white/90">
            We provide the best value for your investment and help you find the perfect house for your future. We are committed to providing the best service to our clients.
          </p>
          
          <div className="mt-10 max-w-4xl mx-auto">
            <Tabs defaultValue="sale" className="w-full">
              <TabsList className="grid w-fit grid-cols-3 mx-auto bg-white/20 backdrop-blur-sm rounded-full">
                <TabsTrigger value="sale" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black">For Sale</TabsTrigger>
                <TabsTrigger value="rent" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black">For Rent</TabsTrigger>
                <TabsTrigger value="sold" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black">Sold</TabsTrigger>
              </TabsList>
              <TabsContent value="sale">
                <div className="mt-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-4 text-black">
                  <Input 
                    type="text" 
                    placeholder="Location" 
                    className="bg-transparent border-0 focus-visible:ring-0 text-base"
                  />
                  <Select>
                    <SelectTrigger className="bg-transparent border-0 focus:ring-0 text-base text-muted-foreground w-full md:w-auto">
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100k-200k">$100k - $200k</SelectItem>
                      <SelectItem value="200k-500k">$200k - $500k</SelectItem>
                      <SelectItem value="500k+">$500k+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-transparent border-0 focus:ring-0 text-base text-muted-foreground w-full md:w-auto">
                      <SelectValue placeholder="Adults" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-transparent border-0 focus:ring-0 text-base text-muted-foreground w-full md:w-auto">
                      <SelectValue placeholder="Bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full md:w-auto rounded-full bg-black text-white px-6">
                    <Search className="mr-2 h-4 w-4" />
                    Get a Quote
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
      </div>
    </section>
  );
}
