'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Section } from '../layout/Section';
import { formatCurrency } from '@/lib/utils';

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
    <Section className="bg-[#003f47] text-white">
      <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-medium">Bond Calculator</h2>
          <p className="mt-2 text-lg text-gray-300">
            Estimate your monthly bond repayments and see how different terms and interest rates could affect your affordability.
          </p>
      </div>

      <Card className="mt-12 max-w-4xl mx-auto bg-background/10 border-white/20 text-white">
        <CardContent className="grid md:grid-cols-2 gap-8 p-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="purchase-price" className="font-semibold">Purchase Price</Label>
              <div className="relative mt-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">R</span>
                <Input
                  id="purchase-price"
                  value={purchasePrice.toLocaleString()}
                  onChange={handlePriceChange}
                  className="pl-7 bg-white/10 border-white/20 focus-visible:ring-primary"
                />
              </div>
              <Slider
                value={[purchasePrice]}
                onValueChange={(value) => setPurchasePrice(value[0])}
                min={500000}
                max={10000000}
                step={10000}
                className="mt-3"
              />
            </div>
            
            <div>
              <Label htmlFor="deposit" className="font-semibold">Deposit</Label>
              <div className="relative mt-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">R</span>
                  <Input
                    id="deposit"
                    value={deposit.toLocaleString()}
                    onChange={handleDepositChange}
                    className="pl-7 bg-white/10 border-white/20 focus-visible:ring-primary"
                  />
              </div>
               <Slider
                  value={[deposit]}
                  onValueChange={(value) => setDeposit(value[0])}
                  min={0}
                  max={purchasePrice}
                  step={10000}
                  className="mt-3"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                <Input
                  id="interest-rate"
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="mt-2 bg-white/10 border-white/20 focus-visible:ring-primary"
                  step="0.01"
                />
                 <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  min={1}
                  max={20}
                  step={0.01}
                  className="mt-3"
                />
              </div>
              <div>
                <Label htmlFor="loan-term">Loan Term (Years)</Label>
                <Input
                  id="loan-term"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="mt-2 bg-white/10 border-white/20 focus-visible:ring-primary"
                />
                 <Slider
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  min={5}
                  max={30}
                  step={1}
                  className="mt-3"
                />
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 flex flex-col justify-center">
            <p className="text-gray-300 text-sm">Estimated Monthly Repayment</p>
            <p className="text-4xl lg:text-5xl font-bold text-primary mt-2">{formatCurrency(monthlyRepayment)}</p>
            
            <div className="mt-8 space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-300">Loan Amount</span>
                    <span className="font-medium">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-300">Total Repayment</span>
                    <span className="font-medium">{formatCurrency(totalRepayment)}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-gray-300">Total Interest</span>
                    <span className="font-medium">{formatCurrency(totalInterest)}</span>
                </div>
            </div>

             <Button className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Apply for Pre-qualification
              </Button>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
