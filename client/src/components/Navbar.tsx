/**
 * Design Philosophy: Warm Storytelling
 * - Clean navigation with warm colors
 * - Smooth transitions and hover effects
 * - Mobile-responsive with hamburger menu
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "首頁" },
    { href: "/about", label: "關於教會" },
    { href: "/news", label: "最新消息" },
    { href: "/media", label: "主日講道" },
    { href: "/groups", label: "小組生活" },
    { href: "/new-here", label: "新朋友專區" },
    { href: "/contact", label: "聯絡我們" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-background/98 backdrop-blur-md border-b border-border shadow-lg"
        : "bg-background/80 backdrop-blur-sm border-b border-transparent"
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-lg">勝</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-foreground">竹南勝利堂</span>
              <span className="text-xs text-muted-foreground">Victory Church</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" asChild>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
                立即聯繫
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fadeInUp">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link href="/contact" asChild>
                <Button
                  className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  立即聯繫
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
