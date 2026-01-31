/**
 * Design Philosophy: Warm Storytelling
 * - Contact form with warm styling
 * - Multiple contact methods
 * - Donation information section
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Heart, Building, CreditCard, Loader2 } from "lucide-react";
import { MapView } from "@/components/Map";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    messageType: "general",
  });

  const contactMutation = trpc.contact.submit.useMutation();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await contactMutation.mutateAsync({
        name: formData.name,
        phone: formData.phone || undefined,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        messageType: formData.messageType,
      });
      
      toast.success("感謝您的訊息!我們會盡快與您聯繫。");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        messageType: "general",
      });
    } catch (error) {
      toast.error("提交失敗,請稍後重試");
    }
  };

  const handleOpenInMaps = () => {
    // 打開 Google Maps (使用示例座標)
    window.open(
      "https://www.google.com/maps/search/竹南勝利堂",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-gradient-to-br from-primary to-primary/80">
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-white mb-6 drop-shadow-lg">聯絡我們</h1>
            <p className="text-xl text-white/95 leading-relaxed drop-shadow-md">
              無論您有任何問題或需要,都歡迎與我們聯繫
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="floating-card bg-card border-0">
                <CardContent className="p-10">
                  <h2 className="text-foreground mb-6">聯絡表單</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    請填寫以下表單,我們會盡快回覆您。您也可以透過電話或電子郵件直接與我們聯繫。
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-foreground mb-2 block">
                          姓名 *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="請輸入您的姓名"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground mb-2 block">
                          電話
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="請輸入您的電話"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground mb-2 block">
                        電子郵件 *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="請輸入您的電子郵件"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-foreground mb-2 block">
                        主旨 *
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="請輸入主旨"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <Label htmlFor="messageType" className="text-foreground mb-2 block">
                        訊息類型
                      </Label>
                      <select
                        id="messageType"
                        value={formData.messageType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="general">一般諮詢</option>
                        <option value="counseling">靈性諮商</option>
                        <option value="venue_rental">場地租借</option>
                        <option value="other">其他</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground mb-2 block">
                        訊息內容 *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="請輸入您的訊息內容"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={contactMutation.isPending}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          提交中...
                        </>
                      ) : (
                        "送出訊息"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <Card className="floating-card bg-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">電話</h3>
                      <p className="text-muted-foreground">03 747 3415</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        週一至週五 9:00-17:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="floating-card bg-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">電子郵件</h3>
                      <p className="text-muted-foreground break-all">
                        chunan.victory@msa.hinet.net
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="floating-card bg-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">地址</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        350苗栗縣竹南鎮延平路31號
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleOpenInMaps}
                        className="mt-3 text-primary hover:text-primary/80 p-0 h-auto"
                      >
                        在 Google Maps 中開啟 →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* LINE QR Code */}
              <Card className="floating-card bg-card border-0">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-foreground font-semibold mb-4">加入 LINE 官方帳號</h3>
                    <p className="text-muted-foreground text-sm mb-4">掃描 QR Code 加入我們的 LINE 官方帳號,獲取最新消息與活動資訊</p>
                    <img 
                      src="/images/line-qr-code.jpg" 
                      alt="竹南勝利堂 LINE QR Code" 
                      className="w-40 h-40 mx-auto rounded-lg shadow-md"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="floating-card bg-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">辦公時間</h3>
                      <p className="text-muted-foreground text-sm">
                        週一至週五: 9:00 - 17:00<br />
                        週六: 9:00 - 12:00<br />
                        週日: 主日聚會時間
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Info */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">奉獻資訊</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              感謝您對教會事工的支持,您的奉獻將用於福音事工、教會運作與社區關懷
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="floating-card bg-card border-0">
              <CardContent className="p-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                  銀行匯款
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">銀行代碼</p>
                    <p className="font-medium text-foreground">808 玉山銀行</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">戶名</p>
                    <p className="font-medium text-foreground">財團法人竹南勝利堂</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">帳號</p>
                    <p className="font-medium text-foreground text-lg">0000440940060148</p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    匯款後請來電或來信告知您的姓名、金額與奉獻用途,以便開立奉獻收據。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0">
              <CardContent className="p-10">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <CreditCard className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                  線上奉獻
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  您可以透過台灣 Pay 或線上奉獻平台,使用信用卡或 ATM 轉帳進行奉獻。線上奉獻安全便利,並會自動開立電子收據。
                </p>
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-3">掃描下方 QR Code 使用台灣 Pay 奉獻</p>
                  <img 
                    src="/images/taiwan-pay-qr-code.jpg" 
                    alt="竹南勝利堂台灣 Pay QR Code" 
                    className="w-32 h-32 mx-auto rounded-lg shadow-md"
                  />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-6">
                  前往線上奉獻平台
                </Button>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    線上奉獻平台由第三方金流服務提供,交易安全有保障。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="floating-card bg-card border-0 max-w-5xl mx-auto mt-8">
            <CardContent className="p-10">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                奉獻徵信說明
              </h3>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  教會每季會在主日週報中刊登奉獻徵信,公開財務收支狀況,接受會眾監督。如您不希望公開姓名,請在奉獻時註明「匿名」。
                </p>
                <p>
                  所有奉獻收入將用於教會事工、牧者同工薪資、建築維護、宣教支持與社區關懷等用途。財務報表由長執會審核,確保每一筆奉獻都用在神的國度事工上。
                </p>
                <p>
                  如您需要奉獻收據作為報稅用途,請於奉獻時提供完整的姓名、地址與聯絡方式,我們會在每年1月底前寄發上一年度的奉獻收據。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">教會位置</h2>
            <p className="text-muted-foreground text-lg">歡迎您來拜訪我們</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
            <MapView
              initialCenter={{ lat: 24.6862359, lng: 120.8767182 }}
              initialZoom={15}
              onMapReady={handleMapReady}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
