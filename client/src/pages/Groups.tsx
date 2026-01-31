/**
 * Design Philosophy: Warm Storytelling
 * - Group cards with warm imagery
 * - Clear information about meeting times
 * - Easy contact for group leaders
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, MapPin, Mail } from "lucide-react";

export default function Groups() {
  const groups = [
    {
      id: 1,
      name: "青年小組",
      ageRange: "18-30歲",
      description: "為青年人設計的小組,透過聖經學習、生活分享與團契活動,一同在信仰中成長,面對生活的挑戰。",
      leader: "李喜樂 傳道",
      time: "每週五 19:30",
      location: "教會副堂",
      image: "/images/tKOWemIVMKmB.jpg",
      members: "15-20人",
    },
    {
      id: 2,
      name: "社青小組",
      ageRange: "30-45歲",
      description: "針對社會青年的小組,討論職場、婚姻、家庭等議題,在神的話語中尋求智慧與方向。",
      leader: "王平安 長老",
      time: "每週六 19:00",
      location: "教會教室A",
      image: "/images/fellowship-gathering.png",
      members: "12-15人",
    },
    {
      id: 3,
      name: "婦女小組",
      ageRange: "不限年齡",
      description: "姊妹們的專屬小組,分享生活點滴,彼此代禱扶持,在主裡建立深厚的姊妹情誼。",
      leader: "陳恩惠 姊妹",
      time: "每週三 14:00",
      location: "教會交誼廳",
      image: "/images/yfMmh42zw1yj.jpg",
      members: "20-25人",
    },
    {
      id: 4,
      name: "壯年小組",
      ageRange: "45歲以上",
      description: "為中壯年弟兄姊妹設計的小組,分享人生智慧,彼此鼓勵,在信仰中持續成長。",
      leader: "張恩典 牧師",
      time: "每週日 14:00",
      location: "教會教室B",
      image: "/images/Q914DsicH1ec.jpg",
      members: "18-22人",
    },
    {
      id: 5,
      name: "學生小組",
      ageRange: "國高中生",
      description: "專為學生設計的小組,透過活潑的方式學習聖經,建立信仰根基,面對校園生活的挑戰。",
      leader: "林喜樂 同工",
      time: "每週六 15:00",
      location: "教會青年空間",
      image: "/images/ljyHquIZhgAa.jpg",
      members: "10-15人",
    },
    {
      id: 6,
      name: "夫妻小組",
      ageRange: "已婚夫妻",
      description: "專為夫妻設計的小組,學習聖經中的婚姻之道,建立以基督為中心的家庭。",
      leader: "黃恩愛 夫婦",
      time: "每週五 19:30",
      location: "教會教室C",
      image: "/images/BgIomq89R211.jpeg",
      members: "8-10對",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/fellowship-gathering.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-foreground/70" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-white mb-6 drop-shadow-lg">小組生活</h1>
            <p className="text-xl text-white/95 leading-relaxed drop-shadow-md">
              加入小組,建立深度的團契關係,在信仰中一同成長
            </p>
          </div>
        </div>
      </section>

      {/* Why Small Groups */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-foreground mb-6">為什麼要參加小組?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              小組是教會生活的重要一環。在小組中,我們不只是聽道,更能透過彼此分享、代禱與扶持,建立真實的團契關係。小組提供一個安全的環境,讓我們可以敞開心分享生活的喜怒哀樂,在神的話語中一同成長。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="floating-card bg-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  真實的團契
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  在小組中建立深度的關係,彼此認識、彼此關懷、彼此扶持。
                </p>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  靈命成長
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  透過聖經學習與生活應用,在信仰中持續成長與突破。
                </p>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  生命見證
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  分享生命的見證,看見神在彼此生命中的作為與帶領。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Groups Schedule Table */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">小組聚會時間表</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              查看各小組的聚會時間、地點與小組長資訊
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-primary/20 px-6 py-4 text-left font-semibold text-foreground">聚會時間</th>
                  <th className="border border-primary/20 px-6 py-4 text-left font-semibold text-foreground">小組名稱</th>
                  <th className="border border-primary/20 px-6 py-4 text-left font-semibold text-foreground">小組長</th>
                  <th className="border border-primary/20 px-6 py-4 text-left font-semibold text-foreground">聚會地點</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="border border-primary/20 px-6 py-4 text-foreground">主日 12:30-13:30</td>
                  <td className="border border-primary/20 px-6 py-4 text-foreground">尼希米小組</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">王文鑫弟兄</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">大堂3樓</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="border border-primary/20 px-6 py-4 text-foreground">主日 12:30-13:30</td>
                  <td className="border border-primary/20 px-6 py-4 text-foreground">橄欖樹小組</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">王清煌弟兄</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">三合院C</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="border border-primary/20 px-6 py-4 text-foreground">主日 12:30-13:45</td>
                  <td className="border border-primary/20 px-6 py-4 text-foreground">伉儷小組</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">盧玉玲姊妹</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">牧師館</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="border border-primary/20 px-6 py-4 text-foreground">週一 10:00-11:30</td>
                  <td className="border border-primary/20 px-6 py-4 text-foreground">路得姊妹小組</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">黃玉菁姊妹</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">大堂2樓</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="border border-primary/20 px-6 py-4 text-foreground">週三 19:30-21:00</td>
                  <td className="border border-primary/20 px-6 py-4 text-foreground">大衛社青小組</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">王立智弟兄</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">牧師館</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="border border-primary/20 px-6 py-4 text-foreground">週四 10:00-11:20</td>
                  <td className="border border-primary/20 px-6 py-4 text-foreground">活力小組</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">葉如蓮姊妹</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">牧師館</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="border border-primary/20 px-6 py-4 text-foreground">週四 19:30-20:30</td>
                  <td className="border border-primary/20 px-6 py-4 text-foreground">禱告會</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">林文星弟兄</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">線上聚會</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="border border-primary/20 px-6 py-4 text-foreground">週五 10:30-11:30</td>
                  <td className="border border-primary/20 px-6 py-4 text-foreground">喜樂方舟小組</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">湯秀晴姊妹</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">線上聚會</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="border border-primary/20 px-6 py-4 text-foreground">週五 20:00-21:30</td>
                  <td className="border border-primary/20 px-6 py-4 text-foreground">洗腳小組</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">陳毓琇姊妹</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">線上聚會</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="border border-primary/20 px-6 py-4 text-foreground">週六 10:30-11:30</td>
                  <td className="border border-primary/20 px-6 py-4 text-foreground">同奔天路</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">蔡正文/高新民</td>
                  <td className="border border-primary/20 px-6 py-4 text-muted-foreground">大堂2樓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>



      {/* How to Join */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground mb-12 text-center">如何加入小組?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-2xl font-heading font-bold">
                  1
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  選擇小組
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  瀏覽上方的小組列表,選擇適合您的小組
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-2xl font-heading font-bold">
                  2
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  聯絡小組長
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  透過聯絡表單或教會辦公室聯繫小組長
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-2xl font-heading font-bold">
                  3
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  參加聚會
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  按照約定的時間地點,參加第一次小組聚會
                </p>
              </div>
            </div>

            <Card className="floating-card bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
              <CardContent className="p-12 text-center">
                <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                  還在猶豫嗎?
                </h3>
                <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                  歡迎您先來參加一次小組聚會,親自體驗小組的溫暖與活力。我們相信您會在這裡找到屬靈的家!
                </p>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  立即聯絡我們
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
