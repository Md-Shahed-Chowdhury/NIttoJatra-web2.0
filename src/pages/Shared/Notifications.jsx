import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  Bell, 
  MapPin, 
  CreditCard, 
  MessageSquare, 
  Info, 
  CheckCircle2, 
  X, 
  MoreVertical,
  Filter,
  Search,
  Check
} from 'lucide-react';

const mockNotifications = [
  {
    id: 1,
    type: 'ride',
    title: 'Ride Confirmation',
    desc: 'Your ride for tomorrow at 8:00 AM has been confirmed by Karim Uddin.',
    time: '2 hours ago',
    isRead: false,
    icon: MapPin,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Payment Successful',
    desc: 'BDR 2,800 has been debited for your Monthly Premium subscription.',
    time: '5 hours ago',
    isRead: true,
    icon: CreditCard,
    color: 'bg-emerald-500'
  },
  {
    id: 3,
    type: 'message',
    title: 'New Message',
    desc: 'Karim Uddin sent you a message: "I will be waiting near the main gate."',
    time: 'Yesterday',
    isRead: false,
    icon: MessageSquare,
    color: 'bg-purple-500'
  },
  {
    id: 4,
    type: 'system',
    title: 'Safety Update',
    desc: 'We have updated our Safety Guidelines. Please review them for a better experience.',
    time: '2 days ago',
    isRead: true,
    icon: Info,
    color: 'bg-amber-500'
  }
];

const Notifications = () => {
  const [filter, setFilter] = useState('All');
  const [notifs, setNotifs] = useState(mockNotifications);

  const filteredNotifs = filter === 'All' 
    ? notifs 
    : notifs.filter(n => n.type === filter.toLowerCase());

  const markAllRead = () => {
    setNotifs(notifs.map(n => ({ ...n, isRead: true })));
  };

  const deleteNotif = (id) => {
    setNotifs(notifs.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary-light/10 text-primary-light flex items-center justify-center">
            <Bell size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold font-heading">Notifications</h1>
            <p className="text-text-secondary">Stay updated with your rides and account activity.</p>
          </div>
        </div>
        <Button variant="outline" className="h-11 text-xs font-bold" icon={Check} onClick={markAllRead}>Mark all as read</Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex p-1 bg-background-alt rounded-2xl border border-background-muted overflow-x-auto">
        {['All', 'Ride', 'Payment', 'Message', 'System'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 px-4 py-3 rounded-xl font-bold text-xs transition-all whitespace-nowrap uppercase tracking-widest ${
              filter === f 
                ? 'bg-white text-primary shadow-sm ring-1 ring-background-muted' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifs.map((n) => (
          <div 
            key={n.id} 
            className={`group relative flex items-start gap-5 p-6 rounded-[2rem] transition-all border ${
              n.isRead 
                ? 'bg-white border-background-muted' 
                : 'bg-primary-light/5 border-primary-light/20 shadow-lg shadow-primary-light/5'
            }`}
          >
            <div className={`w-12 h-12 min-w-[48px] rounded-2xl ${n.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
              <n.icon size={24} />
            </div>
            
            <div className="flex-1 space-y-1 pr-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{n.title}</h3>
                {!n.isRead && (
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-light animate-pulse" />
                )}
              </div>
              <p className="text-text-secondary leading-relaxed">
                {n.desc}
              </p>
              <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest pt-2">
                {n.time}
              </p>
            </div>

            <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => deleteNotif(n.id)}
                className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
                title="Delete"
              >
                <X size={18} />
              </button>
              <button 
                className="p-2 hover:bg-background-muted text-text-secondary rounded-lg transition-colors"
                title="More"
              >
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}

        {filteredNotifs.length === 0 && (
          <Card className="py-20 text-center space-y-4 border-dashed border-2">
            <div className="w-24 h-24 rounded-full bg-background-alt flex items-center justify-center mx-auto mb-4 text-text-secondary">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-2xl font-black font-heading italic">All Caught Up!</h3>
            <p className="text-text-secondary max-w-sm mx-auto">
              You've read all your notifications. We'll let you know when something new comes up.
            </p>
            <Button variant="primary" className="mt-4" onClick={() => setFilter('All')}>View All History</Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Notifications;
