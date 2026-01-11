import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Search, 
  Map, 
  Calendar, 
  MessageSquare, 
  Shield, 
  Bell, 
  User, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const RiderLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/rider' },
    { name: 'Find Ride', icon: Search, path: '/rider/find' },
    { name: 'My Rides', icon: Calendar, path: '/rider/my-rides' },
    { name: 'Messages', icon: MessageSquare, path: '/rider/messages', badge: 2 },
    { name: 'Notifications', icon: Bell, path: '/rider/notifications' },
    { name: 'Safety', icon: Shield, path: '/rider/safety' },
    { name: 'Profile', icon: User, path: '/rider/profile' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-hidden text-slate-900">
      {/* Sidebar (Desktop) */}
      <aside className={twMerge(
        'hidden md:flex flex-col bg-white border-r border-slate-200 transition-all duration-300 relative z-30 shadow-sm',
        isCollapsed ? 'w-24' : 'w-72'
      )}>
        {/* Toggle Button */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-10 w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-110 transition-transform"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        <div className="p-8 pb-4">
          <Link to="/" className="flex items-center gap-3">
             <div className="w-10 h-10 min-w-[40px] rounded-xl bg-gradient-primary flex items-center justify-center text-white shadow-lg">
                <Home size={22} />
             </div>
             {!isCollapsed && (
               <span className="text-2xl font-black font-accent bg-gradient-primary bg-clip-text text-transparent">
                  NittoJatra
               </span>
             )}
          </Link>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={twMerge(
                  'flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative',
                  isActive 
                    ? 'bg-slate-200 text-slate-900 font-bold' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                <item.icon size={22} className={twMerge('transition-transform duration-300 group-hover:scale-110', isActive && 'text-slate-900')} />
                {!isCollapsed && <span className="font-semibold">{item.name}</span>}
                {!isCollapsed && item.badge && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                {isCollapsed && item.badge && (
                  <span className="absolute right-2 top-2 w-2 h-2 bg-secondary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto">
          <div className={twMerge(
            'bg-slate-50 rounded-2xl p-4 flex items-center gap-3 transition-all border border-slate-100',
            isCollapsed ? 'justify-center' : 'justify-start'
          )}>
            <img 
              src="https://i.pravatar.cc/150?u=u001" 
              alt="User" 
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm"
            />
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-slate-800 truncate">Ahmed Rahman</p>
                <p className="text-xs text-slate-500 truncate">Rider • 4.8★</p>
              </div>
            )}
            {!isCollapsed && (
               <button 
                 onClick={() => navigate('/')}
                 className="text-slate-400 hover:text-red-500 transition-colors"
               >
                  <LogOut size={18} />
               </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen relative bg-grid-pattern">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
           <button onClick={() => setIsMobileOpen(true)} className="p-2 text-slate-700">
             <Menu size={24} />
           </button>
           <span className="font-bold text-lg text-slate-900">NittoJatra</span>
           <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
             <img src="https://i.pravatar.cc/150?u=u001" alt="Avatar" />
           </div>
        </header>

        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10">
          {children}
        </div>
      </main>

      {/* Mobile Drawer (Simplified) */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
           <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
           <div className="absolute top-0 left-0 bottom-0 w-72 bg-white p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                 <span className="text-2xl font-black text-primary">NittoJatra</span>
                 <button onClick={() => setIsMobileOpen(false)}><X size={24} /></button>
              </div>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-background-muted"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <item.icon size={22} />
                    <span className="font-bold">{item.name}</span>
                  </Link>
                ))}
              </nav>
           </div>
        </div>
      )}
    </div>
  );
};

export default RiderLayout;
