import { useMemo } from "react";

interface MortgageInputs {
  homePrice: number;
  downPaymentAmount: number;
  downPaymentPercent: number;
  loanTermYears: number;
  interestRate: number;
  annualPropertyTax: number;
  annualHomeInsurance: number;
  monthlyHOA: number;
  pmiAmount: number;
}

interface MortgageResults {
  loanAmount: number;
  monthlyPI: number;
  monthlyPropertyTax: number;
  monthlyInsurance: number;
  monthlyHOA: number;
  monthlyPMI: number;
  totalMonthlyPayment: number;
  totalInterestPaid: number;
  totalCostOfLoan: number;
  amortizationSchedule: AmortizationMonth[];
}

interface AmortizationMonth {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

export const useMortgageCalculation = (inputs: MortgageInputs): MortgageResults => {
  return useMemo(() => {
    const {
      homePrice,
      downPaymentAmount,
      downPaymentPercent,
      loanTermYears,
      interestRate,
      annualPropertyTax,
      annualHomeInsurance,
      monthlyHOA,
      pmiAmount,
    } = inputs;

    // Validate inputs
    const safeHomePrice = Math.max(0, homePrice || 0);
    const safeDownPaymentAmount = Math.max(0, downPaymentAmount || 0);
    const safeLoanTermYears = Math.max(1, loanTermYears || 30);
    const safeInterestRate = Math.max(0, interestRate || 0);
    const safeAnnualPropertyTax = Math.max(0, annualPropertyTax || 0);
    const safeAnnualHomeInsurance = Math.max(0, annualHomeInsurance || 0);
    const safeMonthlyHOA = Math.max(0, monthlyHOA || 0);
    const safePMIAmount = Math.max(0, pmiAmount || 0);

    // Calculate effective down payment
    const effectiveDownPayment = safeDownPaymentAmount > 0 
      ? safeDownPaymentAmount 
      : (safeHomePrice * downPaymentPercent) / 100;

    // Loan amount
    const loanAmount = Math.max(0, safeHomePrice - effectiveDownPayment);

    // Monthly rates
    const monthlyRate = safeInterestRate / 100 / 12;
    const totalPayments = safeLoanTermYears * 12;

    // Principal & Interest calculation
    let monthlyPI = 0;
    if (monthlyRate === 0) {
      monthlyPI = loanAmount / totalPayments;
    } else {
      const numerator = monthlyRate * Math.pow(1 + monthlyRate, totalPayments);
      const denominator = Math.pow(1 + monthlyRate, totalPayments) - 1;
      monthlyPI = loanAmount * (numerator / denominator);
    }

    const monthlyPropertyTax = safeAnnualPropertyTax / 12;
    const monthlyInsurance = safeAnnualHomeInsurance / 12;
    const monthlyPMI = safePMIAmount;

    const totalMonthlyPayment =
      monthlyPI + monthlyPropertyTax + monthlyInsurance + safeMonthlyHOA + monthlyPMI;

    const totalPIPaid = monthlyPI * totalPayments;
    const totalInterestPaid = totalPIPaid - loanAmount;

    const totalTaxPaid = monthlyPropertyTax * totalPayments;
    const totalInsurancePaid = monthlyInsurance * totalPayments;
    const totalHOAPaid = safeMonthlyHOA * totalPayments;
    const totalPMIPaid = monthlyPMI * totalPayments;

    const totalCostOfLoan =
      totalPIPaid + totalTaxPaid + totalInsurancePaid + totalHOAPaid + totalPMIPaid;

    // Amortization schedule (first 12 months)
    const amortizationSchedule: AmortizationMonth[] = [];
    let remainingBalance = loanAmount;

    for (let month = 1; month <= Math.min(12, totalPayments); month++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPI - interestPayment;
      remainingBalance = Math.max(0, remainingBalance - principalPayment);

      amortizationSchedule.push({
        month,
        payment: monthlyPI + monthlyPropertyTax + monthlyInsurance + safeMonthlyHOA + monthlyPMI,
        principal: principalPayment,
        interest: interestPayment,
        remainingBalance,
      });
    }

    return {
      loanAmount,
      monthlyPI,
      monthlyPropertyTax,
      monthlyInsurance,
      monthlyHOA: safeMonthlyHOA,
      monthlyPMI,
      totalMonthlyPayment,
      totalInterestPaid,
      totalCostOfLoan,
      amortizationSchedule,
    };
  }, [inputs]);
};