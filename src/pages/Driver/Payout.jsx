import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  CreditCard, 
  DollarSign, 
  AlertCircle, 
  CheckCircle2,
  Building,
  Smartphone,
  History
} from 'lucide-react';

const Payout = () => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('bank');

  const [bankName, setBankName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [mobileProvider, setMobileProvider] = useState('bKash');
  const [mobileNo, setMobileNo] = useState('');

  const recentPayouts = [
    { id: 1, date: 'Jan 10, 2024', amount: '4,200', status: 'Pending', method: 'Bank Transfer' },
    { id: 2, date: 'Jan 03, 2024', amount: '8,500', status: 'Completed', method: 'bKash' },
    { id: 3, date: 'Dec 28, 2023', amount: '3,100', status: 'Completed', method: 'Nagad' },
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold font-heading">Request Payout</h1>
        <p className="text-text-secondary">Withdraw your earnings to your preferred account.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Payout Form */}
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-gradient-secondary text-white border-0">
             <div className="flex items-center gap-4 mb-2 opacity-80">
                <DollarSign size={20} />
                <span className="font-medium">Available Balance</span>
             </div>
             <h2 className="text-4xl font-black mb-4">BDR 12,450.00</h2>
             <div className="text-xs bg-white/10 inline-block px-3 py-1 rounded-full">
                Min. Withdrawal: BDR 500
             </div>
          </Card>

          <Card className="space-y-6">
            <h3 className="text-lg font-bold">Withdrawal Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-text-secondary mb-2">Amount to Withdraw</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-text-secondary">BDR</span>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-background-alt border border-background-muted rounded-xl h-12 pl-12 pr-4 font-bold focus:outline-none focus:border-primary-light transition-colors"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-text-secondary mb-2">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    onClick={() => setMethod('bank')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col items-center gap-2 ${method === 'bank' ? 'border-primary-light bg-primary-light/5 ring-1 ring-primary-light' : 'border-background-muted hover:border-text-secondary/30'}`}
                  >
                    <Building size={24} className={method === 'bank' ? 'text-primary-light' : 'text-text-secondary'} />
                    <span className="font-bold text-sm">Bank Transfer</span>
                  </div>
                  <div 
                    onClick={() => setMethod('mobile')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col items-center gap-2 ${method === 'mobile' ? 'border-primary-light bg-primary-light/5 ring-1 ring-primary-light' : 'border-background-muted hover:border-text-secondary/30'}`}
                  >
                    <Smartphone size={24} className={method === 'mobile' ? 'text-primary-light' : 'text-text-secondary'} />
                    <span className="font-bold text-sm">Mobile Banking</span>
                  </div>
                </div>
              </div>

              {method === 'bank' && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-sm font-bold text-text-secondary mb-2">Bank Name</label>
                    <input 
                      type="text" 
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="w-full bg-background-alt border border-background-muted rounded-xl h-12 px-4 font-bold focus:outline-none focus:border-primary-light transition-colors"
                      placeholder="e.g., Dutch Bangla Bank"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-secondary mb-2">Account Number</label>
                    <input 
                      type="text" 
                      value={accountNo}
                      onChange={(e) => setAccountNo(e.target.value)}
                      className="w-full bg-background-alt border border-background-muted rounded-xl h-12 px-4 font-bold focus:outline-none focus:border-primary-light transition-colors"
                      placeholder="Enter account number"
                    />
                  </div>
                </div>
              )}

              {method === 'mobile' && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-sm font-bold text-text-secondary mb-2">Provider</label>
                    <select 
                      value={mobileProvider}
                      onChange={(e) => setMobileProvider(e.target.value)}
                      className="w-full bg-background-alt border border-background-muted rounded-xl h-12 px-4 font-bold focus:outline-none focus:border-primary-light transition-colors"
                    >
                      <option value="bKash">bKash</option>
                      <option value="Nagad">Nagad</option>
                      <option value="Rocket">Rocket</option>
                      <option value="Upay">Upay</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-secondary mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value)}
                      className="w-full bg-background-alt border border-background-muted rounded-xl h-12 px-4 font-bold focus:outline-none focus:border-primary-light transition-colors"
                      placeholder="e.g., 01700000000"
                    />
                  </div>
                </div>
              )}
            </div>

            <Button className="w-full h-12 font-bold shadow-lg mt-4" icon={CreditCard}>
              Withdraw Funds
            </Button>
            <p className="text-xs text-center text-text-secondary">
              Requests are usually processed within 24 hours.
            </p>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          <Card className="space-y-4">
            <h3 className="font-bold flex items-center gap-2">
              <History size={18} />
              Recent Requests
            </h3>
            <div className="space-y-4">
              {recentPayouts.map((payout) => (
                <div key={payout.id} className="p-3 bg-background-alt rounded-xl border border-background-muted">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-black text-sm">BDR {payout.amount}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      payout.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {payout.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-text-secondary">
                    <span>{payout.method}</span>
                    <span>{payout.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full text-xs">View All History</Button>
          </Card>

          <Card className="bg-blue-500/5 border-blue-500/20 p-4">
            <div className="flex gap-3">
              <AlertCircle className="text-blue-500 shrink-0" size={20} />
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-blue-600">Auto-Payout</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Enable auto-payout to automatically receive funds every Sunday.
                </p>
                <button className="text-xs font-black text-blue-600 hover:underline">Configure Settings</button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payout;
