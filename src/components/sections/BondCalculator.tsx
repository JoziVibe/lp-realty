'use client';

import { useState, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Section } from '../layout/Section';
import { formatCurrency, cn } from '@/lib/utils';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function BondCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(2500000);
  const [deposit, setDeposit] = useState(250000);
  const [interestRate, setInterestRate] = useState(11.75);
  const [loanTerm, setLoanTerm] = useState(20);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const loanAmount = useMemo(() => purchasePrice - deposit, [purchasePrice, deposit]);
  
  const monthlyRepayment = useMemo(() => {
    if (loanAmount <= 0) return 0;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyInterestRate === 0) {
        return loanAmount / numberOfPayments;
    }

    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    
    return loanAmount * (numerator / denominator);
  }, [loanAmount, interestRate, loanTerm]);

  const totalRepayment = useMemo(() => monthlyRepayment * loanTerm * 12, [monthlyRepayment, loanTerm]);
  const totalInterest = useMemo(() => totalRepayment - loanAmount, [totalRepayment, loanAmount]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPurchasePrice(Number(value));
  };
  
  const handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9]/g, '');
      setDeposit(Number(value));
  };

  return (
    <Section ref={sectionRef} removePadding className="relative text-white overflow-hidden px-4 md:px-0">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image
          src="/background/Bond Calculator BG.jpg"
          alt="A beautiful view of Cape Town"
          fill
          className="object-cover"
          data-ai-hint="Cape Town"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#003f47]/60" />
      
      <div className="container relative py-16 lg:py-24 z-10 px-0 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-5xl font-medium font-serif">Bond <span className="italic text-[#EC9040]">Calculator</span></h2>
            <p className="mt-4 text-lg text-gray-200 font-sans">
              Estimate your monthly bond repayments and see how different terms and interest rates could affect your affordability.
            </p>
        </div>

        <Card className={cn(
            "mt-8 md:mt-12 max-w-4xl mx-auto text-white",
            "bg-background/20 supports-[backdrop-filter]:bg-background/10 border-white/20 backdrop-blur-xl shadow-2xl rounded-2xl"
        )}>
          <CardContent className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="purchase-price" className="font-semibold text-white">Purchase Price</Label>
                <div className="relative mt-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/70">R</span>
                  <Input
                    id="purchase-price"
                    value={purchasePrice.toLocaleString()}
                    onChange={handlePriceChange}
                    className="pl-7 bg-white/10 border-white/20 focus-visible:ring-white/50 text-white placeholder:text-white/50 rounded-full h-12"
                  />
                </div>
                <Slider
                  value={[purchasePrice]}
                  onValueChange={(value) => setPurchasePrice(value[0])}
                  min={500000}
                  max={10000000}
                  step={10000}
                  className="mt-4"
                />
              </div>
              
              <div>
                <Label htmlFor="deposit" className="font-semibold text-white">Deposit</Label>
                <div className="relative mt-2">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/70">R</span>
                    <Input
                      id="deposit"
                      value={deposit.toLocaleString()}
                      onChange={handleDepositChange}
                      className="pl-7 bg-white/10 border-white/20 focus-visible:ring-white/50 text-white placeholder:text-white/50 rounded-full h-12"
                    />
                </div>
                 <Slider
                    value={[deposit]}
                    onValueChange={(value) => setDeposit(value[0])}
                    min={0}
                    max={purchasePrice}
                    step={10000}
                    className="mt-4"
                  />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="interest-rate" className="text-white text-xs sm:text-sm">Interest Rate (%)</Label>
                  <Input
                    id="interest-rate"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="mt-2 bg-white/10 border-white/20 focus-visible:ring-white/50 text-white placeholder:text-white/50 rounded-full h-12"
                    step="0.01"
                  />
                   <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    min={1}
                    max={20}
                    step={0.01}
                    className="mt-4"
                  />
                </div>
                <div>
                  <Label htmlFor="loan-term" className="text-white text-xs sm:text-sm">Loan Term (Years)</Label>
                  <Input
                    id="loan-term"
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="mt-2 bg-white/10 border-white/20 focus-visible:ring-white/50 text-white placeholder:text-white/50 rounded-full h-12"
                  />
                   <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    min={5}
                    max={30}
                    step={1}
                    className="mt-4"
                  />
                </div>
              </div>
            </div>

            <div className="bg-black/20 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col justify-center backdrop-blur-md mt-4 md:mt-0">
              <p className="text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider">Estimated Monthly Repayment</p>
              <p className="text-4xl md:text-5xl font-serif font-medium text-[#EC9040] mt-2 md:mt-3 drop-shadow-sm">{formatCurrency(monthlyRepayment)}</p>
              
              <div className="mt-8 md:mt-10 space-y-4 text-xs md:text-sm">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-white/70">Loan Amount</span>
                      <span className="font-semibold text-white">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-white/70">Total Repayment</span>
                      <span className="font-semibold text-white">{formatCurrency(totalRepayment)}</span>
                  </div>
                   <div className="flex justify-between items-center">
                      <span className="text-white/70">Total Interest</span>
                      <span className="font-semibold text-white">{formatCurrency(totalInterest)}</span>
                  </div>
              </div>

               <Button className="w-full mt-8 md:mt-10 h-12 rounded-full bg-white text-[#003f47] hover:bg-white/90 font-semibold text-base shadow-lg transition-all hover:scale-[1.02]">
                  Apply for Pre-qualification
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
