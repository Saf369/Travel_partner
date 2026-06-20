"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageCircle, Backpack as BackpackIcon, Settings2, Menu, X } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "Partner", href: "/partner", icon: MessageCircle },
    { name: "Backpack", href: "/backpack", icon: BackpackIcon },
    { name: "Settings", href: "/settings", icon: Settings2 },
  ];

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-background border-b border-background-element sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <BackpackIcon size={24} className="text-foreground" strokeWidth={2} />
          <span className="font-bold text-lg text-foreground">Travel Partner</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-background-element border-r border-background-selected flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-6 flex items-center gap-3">
          <BackpackIcon size={28} className="text-foreground" strokeWidth={2} />
          <span className="font-bold text-xl tracking-tight text-foreground">Travel Partner</span>
        </div>

        <nav className="flex-1 px-4 flex flex-col gap-2 mt-4">
          {links.map((link) => {
            const Icon = link.icon;
            const isFocused = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isFocused 
                    ? "bg-background-selected text-foreground font-semibold shadow-sm" 
                    : "text-text-secondary hover:bg-background-selected/50 hover:text-foreground"
                }`}
              >
                <Icon size={20} strokeWidth={isFocused ? 2.5 : 2} />
                <span className="text-base">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-background-selected text-xs text-text-secondary">
          <p>© 2026 Travel Partner AI</p>
        </div>
      </aside>
    </>
  );
}
