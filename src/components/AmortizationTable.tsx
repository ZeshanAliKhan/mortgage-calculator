import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { formatCurrencyPrecise } from "../utils/formatCurrency";

interface AmortizationMonth {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

interface AmortizationTableProps {
  schedule: AmortizationMonth[];
}

export const AmortizationTable = ({ schedule }: AmortizationTableProps) => {
  return (
    <Card className="border-slate-200 shadow-sm overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-slate-200">
        <CardTitle className="text-lg text-slate-800">First-Year Amortization Schedule</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Month</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-700">Payment</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-700">Principal</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-700">Interest</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-700">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {schedule.map((row) => (
                <tr key={row.month} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-800">{row.month}</td>
                  <td className="px-4 py-3 text-right text-slate-800">{formatCurrencyPrecise(row.payment)}</td>
                  <td className="px-4 py-3 text-right text-emerald-600 font-medium">{formatCurrencyPrecise(row.principal)}</td>
                  <td className="px-4 py-3 text-right text-amber-600">{formatCurrencyPrecise(row.interest)}</td>
                  <td className="px-4 py-3 text-right text-slate-800">{formatCurrencyPrecise(row.remainingBalance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};