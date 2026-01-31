/**
 * Design Philosophy: Warm Storytelling
 * - Rich footer with multiple sections
 * - Warm color scheme with olive green accents
 * - Clear information hierarchy
 */

import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Instagram, Users } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">勝</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl">竹南勝利堂</span>
                <span className="text-sm opacity-90">Victory Church</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              回家吧!這裡有神的話與愛。我們是一個充滿溫暖與生命力的教會,歡迎您來認識主耶穌,經歷神的恩典。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">快速連結</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  關於教會
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  最新消息
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  主日講道
                </Link>
              </li>
              <li>
                <Link href="/groups" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  小組生活
                </Link>
              </li>
              <li>
                <Link href="/new-here" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  新朋友專區
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">聚會時間</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <div className="font-medium">主日崇拜</div>
                <div>週日 10:30 AM</div>
              </li>
              <li>
                <div className="font-medium">禱告會</div>
                <div>週四 7:30 PM</div>
              </li>
              <li>
                <div className="font-medium">小組聚會</div>
                <div>請洽各小組長</div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">聯絡資訊</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-90" />
                <span className="text-sm opacity-90">
                  350苗栗縣竹南鎮延平路31號
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 opacity-90" />
                <a href="tel:+886-3-7473415" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  03 747 3415
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 opacity-90" />
                <a href="mailto:chunan.victory@msa.hinet.net" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  chunan.victory@msa.hinet.net
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/groups/100435036693212"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook 網路團契"
                title="加入 Facebook 網路團契"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/groups/100435036693212"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="網路團契"
                title="加入網路團契"
              >
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>© {currentYear} 竹南勝利堂 Victory Church. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:opacity-100 hover:text-accent transition-all">
                隱私權政策
              </Link>
              <Link href="/terms" className="hover:opacity-100 hover:text-accent transition-all">
                使用條款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
