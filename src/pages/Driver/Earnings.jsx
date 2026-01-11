import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Calendar,
  Download,
  CreditCard,
  History,
  ChevronRight,
  PieChart,
  BarChart3
} from 'lucide-react';

const Earnings = () => {
  const stats = [
    { label: "Today's Earnings", value: "BDR 1,200", trend: "+12%", icon: DollarSign, color: "bg-emerald-500" },
    { label: "This Week", value: "BDR 8,450", trend: "+5%", icon: TrendingUp, color: "bg-blue-500" },
    { label: "Monthly Income", value: "BDR 32,100", trend: "+18%", icon: BarChart3, color: "bg-purple-500" },
    { label: "Pending Payout", value: "BDR 4,200", trend: "Normal", icon: CreditCard, color: "bg-amber-500" },
  ];

  const transactions = [
    { id: 1, rider: "Ahmed Rahman", route: "Uttara ↔ Dhanmondi", date: "Today, 8:45 AM", amount: "BDR 280", status: "Success" },
    { id: 2, rider: "Nabil Khan", route: "Mirpur ↔ Gulshan", date: "Today, 9:30 AM", amount: "BDR 350", status: "Success" },
    { id: 3, rider: "Sarah Islam", route: "Banani ↔ Motijheel", date: "Yesterday, 5:15 PM", amount: "BDR 220", status: "Success" },
    { id: 4, rider: "Karim Sheikh", route: "Uttara ↔ Dhanmondi", date: "Yesterday, 8:15 AM", amount: "BDR 280", status: "Processing" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">Earnings & Analytics</h1>
          <p className="text-text-secondary">Track your income and optimize your routes.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12" icon={Download}>Export Reports</Button>
          <Button variant="primary" className="h-12 shadow-lg" icon={CreditCard}>Request Payout</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="relative overflow-hidden group">
            <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform ${stat.color}`}>
              <stat.icon size={64} />
            </div>
            <div className="space-y-4">
              <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center text-white`}>
                <stat.icon size={20} />
              </div>
              <div>
                <p className="text-xs text-text-secondary font-bold uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-500">
                <TrendingUp size={14} />
                <span>{stat.trend}</span>
                <span className="text-text-secondary font-medium">vs last period</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Slot */}
        <Card className="lg:col-span-2 min-h-[400px] flex flex-col justify-center items-center text-center p-12 bg-gradient-to-br from-white to-background-alt border-primary-light/10">
          <div className="w-20 h-20 rounded-full bg-primary-light/10 flex items-center justify-center text-primary-light mb-6">
            <BarChart3 size={40} />
          </div>
          <h3 className="text-xl font-bold mb-2">Earnings Visualizer</h3>
          <p className="text-text-secondary max-w-sm">Interactive charts showing your daily performance and route-wise income breakdowns.</p>
          <div className="grid grid-cols-7 gap-3 w-full max-w-md mt-10 h-32 items-end">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div key={i} className="bg-primary-light/20 hover:bg-primary-light rounded-t-lg transition-all cursor-help relative group" style={{ height: `${h}%` }}>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  BDR {h * 15}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full max-w-md mt-4 text-[10px] font-bold text-text-secondary uppercase">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <History size={18} className="text-primary-light" />
              Recent Activity
            </h3>
            <Button variant="ghost" className="text-xs font-bold text-primary-light h-auto p-0">View All</Button>
          </div>

          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="group p-4 rounded-2xl bg-background-alt border border-background-muted hover:border-primary-light/20 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-background-muted flex items-center justify-center font-bold text-xs">
                      {tx.rider[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold">{tx.rider}</p>
                      <p className="text-[10px] text-text-secondary">{tx.date}</p>
                    </div>
                  </div>
                  <p className="text-sm font-black text-emerald-600">+{tx.amount}</p>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-text-secondary font-medium italic">{tx.route}</span>
                  <span className={`px-2 py-0.5 rounded-full font-bold uppercase ${tx.status === 'Success' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                    {tx.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-background-muted mt-auto">
            <div className="bg-gradient-secondary rounded-2xl p-6 text-white text-center space-y-4 shadow-xl">
               <PieChart className="mx-auto mb-2 opacity-50" size={32} />
               <p className="font-bold">Next Payout</p>
               <h4 className="text-3xl font-black">BDR 4,200</h4>
               <p className="text-xs text-white/70">Scheduled for Sunday, Jan 14</p>
               <Button className="w-full bg-white text-secondary hover:bg-white/90 shadow-lg text-xs h-10 font-bold">Manage Account</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Earnings;
