import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Map, 
  PlusCircle, 
  Users, 
  MessageSquare, 
  Bell, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  LayoutDashboard,
  User,
  Settings
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const DriverLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/driver' },
    { name: 'Post Ride', icon: PlusCircle, path: '/driver/post' },
    { name: 'My Routes', icon: Map, path: '/driver/routes' },
    { name: 'Earnings', icon: BarChart3, path: '/driver/earnings' },
    { name: 'Riders', icon: Users, path: '/driver/riders' },
    { name: 'Messages', icon: MessageSquare, path: '/driver/messages', badge: 5 },
    { name: 'Notifications', icon: Bell, path: '/driver/notifications' },
    { name: 'Profile', icon: User, path: '/driver/profile' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-hidden text-slate-900">
      {/* Sidebar (Desktop) */}
      <aside className={twMerge(
        'hidden md:flex flex-col bg-[#1A1C1E] text-white transition-all duration-300 relative z-30',
        isCollapsed ? 'w-24' : 'w-72'
      )}>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-10 w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg z-50 transition-transform hover:scale-110"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        <div className="p-8 pb-4">
          <Link to="/" className="flex items-center gap-3">
             <div className="w-10 h-10 min-w-[40px] rounded-xl bg-gradient-secondary flex items-center justify-center text-white shadow-lg">
                <BarChart3 size={22} />
             </div>
             {!isCollapsed && (
               <span className="text-2xl font-black font-accent bg-gradient-secondary bg-clip-text text-transparent">
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
                    : 'text-white/50 hover:bg-white/5 hover:text-white'
                )}
              >
                <item.icon size={22} className={twMerge('transition-transform duration-300 group-hover:scale-110', isActive && 'text-slate-900')} />
                {!isCollapsed && <span className="font-semibold">{item.name}</span>}
                {!isCollapsed && item.badge && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto">
           <div className={twMerge(
            'bg-white/5 rounded-2xl p-4 flex items-center gap-3 transition-all',
            isCollapsed ? 'justify-center' : 'justify-start'
          )}>
            <img 
              src="https://i.pravatar.cc/150?u=d001" 
              alt="Driver" 
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-white/10"
            />
            {!isCollapsed && (
              <div className="flex-1 min-w-0 flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-bold text-sm truncate">Karim Uddin</p>
                  <p className="text-xs text-secondary truncate">Driver • 4.9★</p>
                </div>
                <button 
                  onClick={() => navigate('/')}
                  className="text-white/50 hover:text-secondary transition-colors"
                >
                  <LogOut size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen bg-grid-pattern">
        <header className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
           <div className="flex items-center gap-4">
             <button onClick={() => setIsMobileOpen(true)} className="md:hidden p-2 text-slate-700">
               <Menu size={24} />
             </button>
             <h2 className="font-black text-xl font-heading text-slate-900">Driver Console</h2>
           </div>
           <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center relative transition-colors">
                 <Bell size={20} className="text-slate-500" />
                 <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-secondary rounded-full border-2 border-white" />
              </button>
              <button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-colors">
                 <Settings size={20} className="text-slate-500" />
              </button>
           </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-10">
          {children}
        </div>
      </main>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
           <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsMobileOpen(false)} />
           <div className="absolute top-0 left-0 bottom-0 w-72 bg-[#1A1C1E] p-6 shadow-2xl text-white">
              <div className="flex justify-between items-center mb-10">
                 <span className="text-2xl font-black text-secondary">NittoJatra</span>
                 <button onClick={() => setIsMobileOpen(false)}><X size={24} /></button>
              </div>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
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

export default DriverLayout;
