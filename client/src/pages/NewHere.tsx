/**
 * Design Philosophy: Warm Storytelling
 * - Welcoming and informative for first-time visitors
 * - Clear step-by-step guide
 * - FAQ section with common questions
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Coffee, Baby, Accessibility, Car, Bus, Heart, Gift } from "lucide-react";
import { MapView } from "@/components/Map";
import { useRef, useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function NewHere() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    visitDate: "",
    firstTime: "yes",
    interests: "",
    notes: "",
  });

  const submitMutation = trpc.newVisitor.submit.useMutation({
    onSuccess: () => {
      toast.success("感謝您的留名!我們會盡快與您聯繫。");
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        visitDate: "",
        firstTime: "yes",
        interests: "",
        notes: "",
      });
      setShowForm(false);
    },
    onError: (error) => {
      toast.error(error.message || "提交失敗,請稍後重試");
    },
  });

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

  const handleOpenInMaps = () => {
    // 打開 Google Maps (使用示例座標)
    window.open(
      "https://www.google.com/maps/search/竹南勝利堂",
      "_blank"
    );
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error("請輸入您的姓名");
      return;
    }
    submitMutation.mutate(formData);
  };

  const faqs = [
    {
      question: "我需要穿什麼服裝?",
      answer: "我們的聚會氛圍輕鬆自在,您可以穿著舒適的便服參加。無論是正式或休閒,我們都歡迎您!",
    },
    {
      question: "聚會需要帶聖經嗎?",
      answer: "如果您有聖經,歡迎攜帶。如果沒有也沒關係,教會備有聖經可供使用,主日信息也會投影在螢幕上。",
    },
    {
      question: "聚會會持續多久?",
      answer: "主日崇拜通常持續約90分鐘,包含敬拜讚美、信息分享與禱告。聚會後也歡迎您留下來與弟兄姊妹交流。",
    },
    {
      question: "我可以帶孩子來嗎?",
      answer: "當然可以!我們有兒童主日學與育嬰室,讓您的孩子在安全的環境中學習與遊戲,您也能安心參加聚會。",
    },
    {
      question: "我還不是基督徒,可以來嗎?",
      answer: "非常歡迎!我們的聚會對所有人開放,無論您的信仰背景如何,都歡迎您來認識我們,了解基督信仰。",
    },
    {
      question: "聚會需要奉獻嗎?",
      answer: "奉獻是出於自願,不是必須的。如果您是第一次來訪,請不用感到壓力,只要放鬆地參加聚會即可。",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/church-exterior.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/70" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-white mb-6 drop-shadow-lg">歡迎來到竹南勝利堂!</h1>
            <p className="text-2xl text-white/95 leading-relaxed drop-shadow-md mb-8">
              我們很高興您能來!這裡有一些資訊,幫助您更了解我們的聚會
            </p>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-xl"
              onClick={() => setShowForm(!showForm)}
            >
              <Heart className="mr-2 w-5 h-5" />
              填寫新朋友留名卡
            </Button>
          </div>
        </div>
      </section>

      {/* New Visitor Form Modal */}
      {showForm && (
        <section className="py-16 bg-secondary/50">
          <div className="container max-w-2xl">
            <Card className="bg-card border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-heading font-bold text-foreground">新朋友留名卡</h2>
                  <button 
                    onClick={() => setShowForm(false)}
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-muted-foreground mb-8">
                  請填寫以下資訊,幫助我們更好地認識您,我們會盡快與您聯繫。
                </p>

                <form onSubmit={handleSubmitForm} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      姓名 <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="請輸入您的姓名"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        電話
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="請輸入您的電話"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        電子郵件
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="請輸入您的電子郵件"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      地址
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="請輸入您的地址"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        預計訪問日期
                      </label>
                      <input
                        type="date"
                        value={formData.visitDate}
                        onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        這是您第一次來嗎?
                      </label>
                      <select
                        value={formData.firstTime}
                        onChange={(e) => setFormData({ ...formData, firstTime: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="yes">是的,第一次</option>
                        <option value="no">不是,我來過</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      您對哪些活動感興趣?
                    </label>
                    <input
                      type="text"
                      value={formData.interests}
                      onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                      placeholder="例如:主日崇拜、小組聚會、青年活動等"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      其他備註
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="如有任何其他資訊或問題,歡迎告訴我們"
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="submit"
                      disabled={submitMutation.isPending}
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      {submitMutation.isPending ? "提交中..." : "提交"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowForm(false)}
                      className="flex-1"
                    >
                      取消
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* What to Expect */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">主日流程</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              了解我們的主日聚會流程,讓您更好地準備
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="floating-card bg-card border-0">
              <CardContent className="p-8">
                <div className="flex gap-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        10:00 - 10:10
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        簽到與交流
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      歡迎來到我們的教會!請在簽到處登記,我們會為您介紹教會環境,並邀請您享用茶點。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0">
              <CardContent className="p-8">
                <div className="flex gap-8">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        10:10 - 10:30
                      </h3>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        敬拜讚美
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      我們透過詩歌讚美與敬拜,一起親近神。無論您是否熟悉這些詩歌,都歡迎您一起參與。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0">
              <CardContent className="p-8">
                <div className="flex gap-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        10:30 - 11:20
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        信息分享
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      牧師分享聖經信息,幫助我們更深入地認識神的話語與旨意。歡迎您提出任何問題。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0">
              <CardContent className="p-8">
                <div className="flex gap-8">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-10 h-10 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        11:20 - 11:30
                      </h3>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        回應與祝福
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      透過禱告回應神的話語,領受神的祝福。聚會後歡迎您留下來與我們交流,享用茶點。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">教會設施</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              我們提供完善的設施,讓您舒適地參加聚會
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="floating-card bg-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Baby className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  育嬰室
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  專為帶嬰幼兒的家長設計,可同步觀看聚會
                </p>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  兒童主日學
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  專業的兒童主日學老師,讓孩子快樂學習
                </p>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Accessibility className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  無障礙設施
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  輪椅坡道與無障礙廁所,方便行動不便者
                </p>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Coffee className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  交誼廳
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  提供茶點與舒適的交流空間
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">交通資訊</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              如何前往竹南勝利堂
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="floating-card bg-card border-0">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        地址
                      </h3>
                      <p className="text-muted-foreground">
                        350苗栗縣竹南鎮延平路31號
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="floating-card bg-card border-0">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Car className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        開車
                      </h3>
                      <p className="text-muted-foreground">
                        教會提供免費停車位,歡迎開車前往
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="floating-card bg-card border-0">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bus className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        大眾運輸
                      </h3>
                      <p className="text-muted-foreground">
                        靠近公車站,交通便利
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                onClick={handleOpenInMaps}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                在 Google Maps 中開啟
              </Button>
            </div>

            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <MapView onMapReady={handleMapReady} />
            </div>
          </div>
        </div>
      </section>

      {/* Online Giving */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">準備好踏出第一步</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              如果您想要支持教會的事工,我們提供多種奉獻方式
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            {/* Bank Transfer */}
            <Card className="floating-card bg-card border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">銀行轉帳</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">銀行名稱</p>
                    <p className="text-lg">玉山銀行</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">帳號</p>
                    <p className="text-lg font-mono bg-secondary/50 p-3 rounded-lg">0000440940060148</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">戶名</p>
                    <p className="text-lg">竹南勝利堂</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Taiwan Pay QR Code */}
            <Card className="floating-card bg-card border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">台灣 Pay</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">使用台灣 Pay 掃描 QR Code 即可奉獻</p>
                  <div className="flex justify-center">
                    <img 
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663322641991/YFQaYSKbHPofXuOg.jpg" 
                      alt="台灣 Pay QR Code" 
                      className="w-48 h-48 border-2 border-border rounded-lg p-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-secondary/30 rounded-lg text-center">
            <p className="text-muted-foreground text-sm">
              感謝您的奉獻與支持!您的每一份奉獻都將幫助教會推展事工,傳揚福音,造就生命。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">常見問題</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              新朋友最常問的問題
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="floating-card bg-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
