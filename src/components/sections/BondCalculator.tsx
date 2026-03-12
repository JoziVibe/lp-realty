"use client";

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formatCurrency } from '@/lib/utils';

interface CalculationResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  loanAmount: number;
}

export function BondCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(2500000);
  const [deposit, setDeposit] = useState(250000);
  const [interestRate, setInterestRate] = useState(11.75);
  const [loanTerm, setLoanTerm] = useState(20);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    const loanAmount = propertyPrice - deposit;
    if (loanAmount <= 0) {
        setResult(null);
        return;
    }
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    setResult({ monthlyPayment, totalPayment, totalInterest, loanAmount });
  };
  
  const depositPercentage = useMemo(() => {
    return propertyPrice > 0 ? (deposit / propertyPrice) * 100 : 0;
  }, [deposit, propertyPrice]);


  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-charcoal">Property Price (R)</label>
          <Input type="number" value={propertyPrice} onChange={(e) => setPropertyPrice(Number(e.target.value))} className="mt-1.5" />
        </div>
        <div>
          <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-charcoal">Deposit Amount (R)</label>
          <Input type="number" value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} className="mt-1.5" />
        </div>
      </div>
      <div className="mt-6">
        <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-charcoal">Interest Rate (%)</label>
        <div className="flex items-center gap-4 mt-1.5">
          <Input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-24" />
          <Slider value={[interestRate]} onValueChange={(val) => setInterestRate(val[0])} max={20} step={0.25} />
        </div>
        <p className="font-mono text-xs text-neutral-mid mt-2">Current SA prime rate: 11.75%</p>
      </div>
       <div className="mt-6">
        <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-charcoal">Loan Term (Years)</label>
        <Select value={String(loanTerm)} onValueChange={(val) => setLoanTerm(Number(val))}>
            <SelectTrigger className="mt-1.5">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="10">10 years</SelectItem>
                <SelectItem value="15">15 years</SelectItem>
                <SelectItem value="20">20 years</SelectItem>
                <SelectItem value="25">25 years</SelectItem>
                <SelectItem value="30">30 years</SelectItem>
            </SelectContent>
        </Select>
      </div>
      <Button onClick={handleCalculate} className="w-full mt-8 bg-brand-amber text-white py-6 text-base uppercase tracking-widest hover:bg-brand-amber-light">Calculate</Button>
      
      {result && (
        <div className="mt-8 bg-brand-teal-mist rounded-xl p-6">
          <div className="text-center">
            <p className="font-mono text-sm text-brand-amber uppercase tracking-widest">Monthly Repayment</p>
            <p className="font-serif font-black text-4xl md:text-5xl text-brand-teal mt-1">{formatCurrency(result.monthlyPayment)}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center">
            <div>
              <p className="font-mono text-xs text-neutral-mid">Loan Amount</p>
              <p className="font-sans font-semibold text-sm text-brand-teal mt-1">{formatCurrency(result.loanAmount)}</p>
            </div>
            <div>
              <p className="font-mono text-xs text-neutral-mid">Total Repayment</p>
              <p className="font-sans font-semibold text-sm text-brand-teal mt-1">{formatCurrency(result.totalPayment)}</p>
            </div>
            <div>
              <p className="font-mono text-xs text-neutral-mid">Total Interest</p>
              <p className="font-sans font-semibold text-sm text-brand-teal mt-1">{formatCurrency(result.totalInterest)}</p>
            </div>
            <div>
              <p className="font-mono text-xs text-neutral-mid">Deposit %</p>
              <p className="font-sans font-semibold text-sm text-brand-teal mt-1">{depositPercentage.toFixed(1)}%</p>
            </div>
          </div>
          <p className="font-mono text-xs text-neutral-mid italic text-center mt-6">Results are estimates only. Contact LP Realty for a formal pre-qualification.</p>
        </div>
      )}
    </div>
  );
}
