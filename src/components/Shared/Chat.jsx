import React, { useState } from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { 
  Search, 
  Send, 
  Paperclip, 
  Smile, 
  Phone, 
  Video, 
  MoreVertical,
  ChevronLeft,
  CheckCheck
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Chat = ({ role = 'rider' }) => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: role === 'rider' ? 'Karim Uddin' : 'Ahmed Rahman',
      avatar: 'https://i.pravatar.cc/150?u=a1',
      lastMsg: 'I am near the gate.',
      time: '12:45 PM',
      unread: 2,
      online: true,
      route: 'Uttara → Dhanmondi'
    },
    {
      id: 2,
      name: role === 'rider' ? 'Nusrat Jahan' : 'Sara Khan',
      avatar: 'https://i.pravatar.cc/150?u=a2',
      lastMsg: 'Thanks for the ride!',
      time: 'Yesterday',
      unread: 0,
      online: false,
      route: 'Mirpur → Gulshan'
    }
  ];

  const messages = [
    { id: 1, sender: 'them', text: 'Hi! Are you ready for the pickup?', time: '12:30 PM' },
    { id: 2, sender: 'me', text: 'Yes, just coming out of the office.', time: '12:32 PM' },
    { id: 3, sender: 'them', text: 'Great, I am just 2 minutes away. I am driving a silver Corolla.', time: '12:35 PM' },
    { id: 4, sender: 'them', text: 'I am near the gate now.', time: '12:45 PM' },
  ];

  return (
    <Card className="p-0 overflow-hidden h-[calc(100vh-180px)] flex border-0 shadow-2xl">
      {/* Sidebar: Conversations */}
      <div className="w-full md:w-80 border-r border-background-muted flex flex-col bg-white">
         <div className="p-6 border-b border-background-muted space-y-4">
            <h2 className="text-xl font-black font-heading">Messages</h2>
            <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
               <input 
                 type="text" 
                 placeholder="Search chats..." 
                 className="w-full bg-background-alt border-0 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary-light/10 outline-none"
               />
            </div>
         </div>
         <div className="flex-1 overflow-y-auto divide-y divide-background-muted">
            {conversations.map((chat) => (
              <div 
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={twMerge(
                  'p-4 flex items-center gap-4 cursor-pointer transition-all hover:bg-background-alt',
                  selectedChat === chat.id && 'bg-primary-light/5 border-l-4 border-primary-light'
                )}
              >
                <div className="relative">
                   <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-xl object-cover" />
                   {chat.online && <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />}
                </div>
                <div className="flex-1 min-w-0">
                   <div className="flex justify-between items-start mb-1">
                      <p className="font-bold text-sm truncate">{chat.name}</p>
                      <span className="text-[10px] text-text-secondary font-medium whitespace-nowrap">{chat.time}</span>
                   </div>
                   <p className="text-xs text-text-secondary truncate">{chat.lastMsg}</p>
                   <p className="text-[10px] text-primary-light font-bold mt-1 opacity-70 uppercase tracking-tighter">{chat.route}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
         </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-background-alt/30">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 md:p-6 bg-white border-b border-background-muted flex items-center justify-between shadow-sm">
               <div className="flex items-center gap-4">
                  <button className="md:hidden p-2 -ml-2"><ChevronLeft size={24} /></button>
                  <div className="relative">
                     <img src={conversations[0].avatar} alt="Active" className="w-10 h-10 rounded-xl" />
                     <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-none">{conversations[0].name}</h3>
                    <p className="text-[10px] text-emerald-500 font-bold uppercase mt-1">Online</p>
                  </div>
               </div>
               <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-xl hover:bg-background-muted flex items-center justify-center text-text-secondary transition-colors">
                     <Phone size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-xl hover:bg-background-muted flex items-center justify-center text-text-secondary transition-colors">
                     <Video size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-xl hover:bg-background-muted flex items-center justify-center text-text-secondary transition-colors">
                     <MoreVertical size={18} />
                  </button>
               </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
               <div className="flex justify-center">
                  <span className="text-[10px] font-black uppercase text-text-secondary bg-background-muted px-3 py-1 rounded-full tracking-wider">Today</span>
               </div>
               
               {messages.map((msg) => (
                 <div key={msg.id} className={twMerge(
                   'flex flex-col max-w-[80%]',
                   msg.sender === 'me' ? 'ml-auto items-end' : 'mr-auto items-start'
                 )}>
                    <div className={twMerge(
                      'p-4 rounded-2xl text-sm shadow-sm',
                      msg.sender === 'me' 
                        ? 'bg-gradient-primary text-white rounded-tr-none' 
                        : 'bg-white text-text-primary rounded-tl-none'
                    )}>
                       {msg.text}
                    </div>
                    <div className="flex items-center gap-1 mt-1.5 px-1">
                       <span className="text-[9px] text-text-secondary font-medium">{msg.time}</span>
                       {msg.sender === 'me' && <CheckCheck size={12} className="text-primary-light" />}
                    </div>
                 </div>
               ))}
            </div>

            {/* Message Input */}
            <div className="p-6 bg-white border-t border-background-muted">
               <div className="relative flex items-center gap-4 bg-background-alt rounded-2xl px-4 py-2 border border-background-muted focus-within:border-primary-light transition-all shadow-sm">
                  <button className="text-text-secondary hover:text-primary-light transition-colors"><Smile size={20} /></button>
                  <button className="text-text-secondary hover:text-primary-light transition-colors"><Paperclip size={20} /></button>
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 bg-transparent border-0 outline-none text-sm py-2"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button 
                    className={twMerge(
                      'w-10 h-10 rounded-xl flex items-center justify-center transition-all',
                      message.trim() ? 'bg-primary-light text-white shadow-lg scale-110' : 'bg-background-muted text-text-secondary'
                    )}
                  >
                    <Send size={18} />
                  </button>
               </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-12 space-y-4">
             <div className="w-20 h-20 rounded-full bg-background-muted flex items-center justify-center text-text-secondary">
                <MessageSquare size={32} />
             </div>
             <div>
                <h3 className="text-xl font-bold">Select a conversation</h3>
                <p className="text-text-secondary text-sm">Pick a driver or rider to start chatting about your commute.</p>
             </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Chat;
