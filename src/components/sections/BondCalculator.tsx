'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Section } from '../layout/Section';
import { formatCurrency, cn } from '@/lib/utils';
import Image from 'next/image';

export function BondCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(2500000);
  const [deposit, setDeposit] = useState(250000);
  const [interestRate, setInterestRate] = useState(11.75);
  const [loanTerm, setLoanTerm] = useState(20);

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
    <Section removePadding className="relative text-white overflow-hidden">
      <Image
        src="https://picsum.photos/seed/cape-town-bg/1920/1080"
        alt="A beautiful view of Cape Town"
        fill
        className="object-cover"
        data-ai-hint="Cape Town"
      />
      <div className="absolute inset-0 bg-[#003f47]/60" />
      
      <div className="container relative py-16 lg:py-24 z-10">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-medium">Bond Calculator</h2>
            <p className="mt-2 text-lg text-gray-200">
              Estimate your monthly bond repayments and see how different terms and interest rates could affect your affordability.
            </p>
        </div>

        <Card className={cn(
            "mt-12 max-w-4xl mx-auto text-white",
            "bg-background/20 supports-[backdrop-filter]:bg-background/10 border-white/20 backdrop-blur-xl shadow-2xl rounded-2xl"
        )}>
          <CardContent className="grid md:grid-cols-2 gap-8 p-8">
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
                  <Label htmlFor="interest-rate" className="text-white">Interest Rate (%)</Label>
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
                  <Label htmlFor="loan-term" className="text-white">Loan Term (Years)</Label>
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

            <div className="bg-black/20 border border-white/10 rounded-xl p-8 flex flex-col justify-center backdrop-blur-md">
              <p className="text-white/80 text-sm font-medium uppercase tracking-wider">Estimated Monthly Repayment</p>
              <p className="text-4xl lg:text-5xl font-bold text-white mt-3 drop-shadow-sm">{formatCurrency(monthlyRepayment)}</p>
              
              <div className="mt-10 space-y-4 text-sm">
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

               <Button className="w-full mt-10 h-12 rounded-full bg-white text-[#003f47] hover:bg-white/90 font-semibold text-base shadow-lg transition-all hover:scale-[1.02]">
                  Apply for Pre-qualification
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
