import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Filter, 
  Download,
  Search,
  Calendar
} from 'lucide-react';

const TransactionHistory = () => {
  const [filter, setFilter] = useState('All');

  const transactions = [
    { id: 1, type: 'Ride', title: "Ride: Uttara to Dhanmondi", date: "Jan 12, 2024, 08:45 AM", amount: "280", status: "Success", isCredit: true },
    { id: 2, type: 'Payout', title: "Withdrawal to Bank", date: "Jan 10, 2024, 02:30 PM", amount: "4,200", status: "Pending", isCredit: false },
    { id: 3, type: 'Ride', title: "Ride: Mirpur to Gulshan", date: "Jan 10, 2024, 09:15 AM", amount: "350", status: "Success", isCredit: true },
    { id: 4, type: 'Bonus', title: "Weekly Quest Bonus", date: "Jan 09, 2024, 11:59 PM", amount: "500", status: "Success", isCredit: true },
    { id: 5, type: 'Ride', title: "Ride: Banani to Motijheel", date: "Jan 09, 2024, 05:20 PM", amount: "220", status: "Success", isCredit: true },
    { id: 6, type: 'Payout', title: "Withdrawal to bKash", date: "Jan 03, 2024, 10:00 AM", amount: "8,500", status: "Success", isCredit: false },
    { id: 7, type: 'Ride', title: "Ride: Uttara to Banani", date: "Jan 02, 2024, 08:00 AM", amount: "150", status: "Success", isCredit: true },
  ];

  const filteredTransactions = filter === 'All' 
    ? transactions 
    : filter === 'Earnings' 
      ? transactions.filter(t => t.isCredit) 
      : transactions.filter(t => !t.isCredit);

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">Transaction History</h1>
          <p className="text-text-secondary">View and download your financial statements.</p>
        </div>
        <Button variant="outline" icon={Download}>Statement</Button>
      </div>

      <Card className="space-y-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between gap-4 border-b border-background-muted pb-6">
          <div className="flex gap-2 bg-background-alt p-1 rounded-xl w-fit">
            {['All', 'Earnings', 'Payouts'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  filter === f 
                    ? 'bg-white shadow text-text-primary' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          
          <div className="flex gap-3">
             <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input 
                   type="text" 
                   placeholder="Search..." 
                   className="pl-10 pr-4 h-10 rounded-xl border border-background-muted bg-background-alt focus:outline-none focus:border-primary-light text-sm w-full md:w-64"
                />
             </div>
             <Button variant="outline" className="h-10 w-10 p-0 rounded-xl" icon={Calendar}></Button>
             <Button variant="outline" className="h-10 w-10 p-0 rounded-xl" icon={Filter}></Button>
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredTransactions.map((tx) => (
            <div key={tx.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-background-alt/50 border border-background-muted hover:border-primary-light/30 transition-all group">
              <div className="flex items-center gap-4 mb-2 md:mb-0">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  tx.isCredit ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  {tx.isCredit ? <ArrowDownLeft size={24} /> : <ArrowUpRight size={24} />}
                </div>
                <div>
                   <h4 className="font-bold">{tx.title}</h4>
                   <p className="text-xs text-text-secondary">{tx.date}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                 <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                    tx.status === 'Success' ? 'bg-emerald-500/10 text-emerald-500' : 
                    tx.status === 'Pending' ? 'bg-amber-500/10 text-amber-500' : 'bg-red-500/10 text-red-500'
                 }`}>
                    {tx.status}
                 </div>
                 <div className="text-right">
                    <p className={`font-black text-lg ${tx.isCredit ? 'text-emerald-600' : 'text-text-primary'}`}>
                       {tx.isCredit ? '+' : '-'}BDR {tx.amount}
                    </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TransactionHistory;
