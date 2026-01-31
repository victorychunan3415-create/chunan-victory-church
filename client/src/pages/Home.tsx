/**
 * Design Philosophy: Warm Storytelling
 * - Magazine-style layout with bold image-text mixing
 * - Asymmetric composition creating visual tension
 * - Large hero images with gradient overlays
 * - Floating cards with prominent shadows
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, Users, BookOpen, Heart, ArrowRight, Clock, MapPin } from "lucide-react";
import { useSEO, useOrganizationSchema, getPageUrl } from "@/hooks/useSEO";
import { PAGE_SEO_CONFIG } from "@shared/seo";
import { Car, Bus, Music, Facebook, Gift } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { MapView } from "@/components/Map";
import { useRef } from "react";

export default function Home() {
  // SEO 優化
  useSEO({
    ...PAGE_SEO_CONFIG.home,
    canonical: getPageUrl('/'),
    ogUrl: getPageUrl('/'),
  });
  useOrganizationSchema();

  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    
    // 竹南勝利堂的座標 (苗栗縣竹南鎮延平路31號)
    const churchLocation = { lat: 24.6862359, lng: 120.8767182 };
    
    // 設置地圖中心
    map.setCenter(churchLocation);
    
    // 添加標記
    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: churchLocation,
      title: "竹南勝利堂",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full viewport with gradient overlay */}
      <section className="relative h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-worship.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-white mb-6 drop-shadow-lg">
              回家吧!<br />這裡有神的話與愛
            </h1>
            <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-md max-w-2xl">
              竹南勝利堂是一個充滿溫暖與生命力的教會社群。我們相信每個人都能在這裡找到屬靈的家,經歷神的愛與恩典,與弟兄姊妹一同成長。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/new-here" asChild>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  第一次來訪?
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact" asChild>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 shadow-xl">
                  聯絡我們
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards - Asymmetric layout */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/media" asChild>
              <Card className="floating-card bg-card hover:bg-card border-0 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <BookOpen className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-foreground mb-3">本週講道</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    收聽最新的主日信息與講道回顧
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/new-here" asChild>
              <Card className="floating-card bg-card hover:bg-card border-0 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Heart className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-foreground mb-3">新朋友專區</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    了解聚會流程與交通資訊
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/groups" asChild>
              <Card className="floating-card bg-card hover:bg-card border-0 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-foreground mb-3">小組生活</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    加入小組,建立深度的團契關係
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news" asChild>
              <Card className="floating-card bg-card hover:bg-card border-0 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Calendar className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-foreground mb-3">最新消息</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    查看教會公告與活動資訊
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Announcements - Magazine-style asymmetric layout */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-foreground mb-3">最新公告</h2>
              <p className="text-muted-foreground text-lg">掌握教會最新動態與活動資訊</p>
            </div>
            <Link href="/news" asChild>
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                查看全部
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured announcement - larger card */}
            <Card className="lg:col-span-2 floating-card bg-card border-0 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div
                  className="h-64 md:h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/BgIomq89R211.jpeg')" }}
                />
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-4 w-fit">
                    特別聚會
                  </div>
                  <h3 className="text-foreground mb-4">2026 春季復興特會</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    邀請您參加為期三天的復興特會,一同經歷聖靈的更新與充滿,領受從神而來的異象與能力。
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>3月15-17日</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>19:30</span>
                    </div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
                    了解詳情
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Side announcements */}
            <div className="space-y-6">
              <Card className="floating-card bg-card border-0">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3 w-fit">
                    洗禮報名
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    洗禮預備課程開始報名
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    歡迎已決志信主的弟兄姊妹報名參加洗禮預備課程。
                  </p>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    查看詳情
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="floating-card bg-card border-0">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3 w-fit">
                    代禱事項
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    為宣教士守望禱告
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    請為在各地宣教的同工們禱告,求神保守他們的身心靈。
                  </p>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    查看詳情
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Image + Text asymmetric layout */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/fellowship-gathering.png"
                  alt="團契聚會"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating accent card */}
              <Card className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground border-0 shadow-2xl max-w-xs hidden lg:block">
                <CardContent className="p-6">
                  <div className="text-4xl font-heading font-bold mb-2">15+</div>
                  <p className="text-sm opacity-90">年的教會歷史與見證</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-foreground mb-6">關於竹南勝利堂</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                竹南勝利堂成立於2010年,是一個以聖經真理為根基,充滿愛與生命力的教會。我們的異象是成為一個讓人遇見神、經歷神、服事神的屬靈家園。
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                在這裡,您可以透過主日崇拜、小組聚會、禱告會等多元的聚會形式,與弟兄姊妹一同敬拜神、學習神的話語、建立深度的團契關係。我們相信每個人都是神所愛的寶貝,都能在基督裡找到生命的意義與價值。
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">200+</div>
                  <p className="text-muted-foreground">會眾人數</p>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">12</div>
                  <p className="text-muted-foreground">個小組</p>
                </div>
              </div>

              <Link href="/about" asChild>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  認識更多
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times - Clean info section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">主日聚會時間</h2>
            <p className="text-white/90 text-lg">歡迎您來參加我們的聚會</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-white mb-2">成人主日學</h3>
                      <p className="text-white/80 text-sm mb-1">09:20 - 10:20</p>
                      <p className="text-white/70 text-sm">地點: 大堂3樓</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-white mb-2">主日崇拜</h3>
                      <p className="text-white/80 text-sm mb-1">10:30 - 12:00</p>
                      <p className="text-white/70 text-sm">地點: 大堂1樓</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-white mb-2">兒主大班</h3>
                      <p className="text-white/80 text-sm mb-1">10:30 - 12:00</p>
                      <p className="text-white/70 text-sm">地點: 牧師館</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-white mb-2">兒主小班</h3>
                      <p className="text-white/80 text-sm mb-1">10:30 - 12:00</p>
                      <p className="text-white/70 text-sm">地點: 三合院C</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Music className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-white mb-2">南勝詩班</h3>
                      <p className="text-white/80 text-sm mb-1">12:00 - 12:30</p>
                      <p className="text-white/70 text-sm">地點: 大堂1樓</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Community Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">加入我們的網路團契</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              在 Facebook 上與教會社群保持連繫,分享信仰故事、禱告需求與靈性成長
            </p>
          </div>

          <Card className="floating-card bg-card border-0 max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Facebook className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    竹南勝利堂 Facebook 團契
                  </h3>
                  <p className="text-muted-foreground">
                    與全球各地的教會弟兄姊妹在線上交流
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                我們的 Facebook 網路團契是一個溫暖的線上社群,讓您能隨時隨地與教會成員分享信仰經歷、提出禱告需求、參與靈性討論,以及了解教會最新動態。無論您身在何處,都能感受到教會大家庭的溫暖與支持。
              </p>
              <a
                href="https://www.facebook.com/groups/100435036693212"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                  <Facebook className="mr-2 w-5 h-5" />
                  加入 Facebook 團契
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="floating-card bg-card border-0 max-w-2xl mx-auto mt-8">
            <CardContent className="p-12">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  加入 LINE 官方帳號
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  掃描下方 QR Code 加入我們的 LINE 官方帳號,隨時獲取教會最新消息、活動通知與靈性提醒。
                </p>
                <img 
                  src="/images/line-qr-code.jpg" 
                  alt="竹南勝利堂 LINE QR Code" 
                  className="w-48 h-48 mx-auto rounded-lg shadow-md mb-8"
                />
                <p className="text-sm text-muted-foreground">
                  掃描 QR Code 或搜尋 @chunan-victory 加入
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Online Giving & Transportation */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Online Giving */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-foreground">線上奉獻</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                如果您想要支持教會的事工,我們提供多種奉獻方式。您的每一份奉獻都將幫助教會推展事工,傳揚福音,造就生命。
              </p>
              
              <div className="space-y-6">
                <Card className="floating-card bg-card border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-4">銀行轉帳</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-foreground mb-1">銀行名稱</p>
                        <p className="text-muted-foreground">玉山銀行</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">帳號</p>
                        <p className="text-muted-foreground font-mono bg-secondary/50 p-2 rounded">0000440940060148</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">戶名</p>
                        <p className="text-muted-foreground">竹南勝利堂</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="floating-card bg-card border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-4">台灣 Pay</h3>
                    <p className="text-sm text-muted-foreground mb-4">使用台灣 Pay 掃描 QR Code 即可奉獻</p>
                    <div className="flex justify-center">
                      <img 
                        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663322641991/YFQaYSKbHPofXuOg.jpg" 
                        alt="台灣 Pay QR Code" 
                        className="w-32 h-32 border-2 border-border rounded-lg p-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Transportation */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-foreground">交通資訊</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                竹南勝利堂位於苗栗縣竹南鎮,交通便利,提供多種前往方式。歡迎您駕車或搭乘大眾運輸前來參加聚會。
              </p>
              
              <div className="space-y-6">
                {/* Map Section */}
                <Card className="floating-card bg-card border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-80 rounded-lg overflow-hidden">
                      <MapView 
                        initialCenter={{ lat: 24.6862359, lng: 120.8767182 }}
                        initialZoom={16}
                        onMapReady={handleMapReady}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="floating-card bg-card border-0">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-2">地址</h3>
                        <p className="text-muted-foreground text-sm">350苗栗縣竹南鎮延平路31號</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="floating-card bg-card border-0">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Car className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-2">開車</h3>
                        <p className="text-muted-foreground text-sm">教會提供免費停車位,歡迎開車前往</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="floating-card bg-card border-0">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bus className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-2">大眾運輸</h3>
                        <p className="text-muted-foreground text-sm">靠近公車站,交通便利</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Link href="/new-here" asChild>
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    查看詳細交通資訊
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <Card className="floating-card bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 overflow-hidden">
            <CardContent className="p-16 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-white mb-6">準備好踏出第一步了嗎?</h2>
                <p className="text-xl text-white/90 mb-10 leading-relaxed">
                  無論您是第一次來訪,或是想更深入了解我們的教會,我們都非常歡迎您!讓我們一起在信仰的旅程中同行。
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/new-here" asChild>
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-xl">
                      新朋友專區
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/contact" asChild>
                    <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-white/90 text-lg px-8 py-6 shadow-xl">
                      聯絡我們
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
