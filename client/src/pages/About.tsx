/**
 * Design Philosophy: Warm Storytelling
 * - Rich content with image-text combinations
 * - Team member cards with warm styling
 * - Vision and values presented in engaging format
 */

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "愛神愛人",
      description: "以神的愛為根基,彼此相愛,服事社區,傳揚福音。",
    },
    {
      icon: BookOpen,
      title: "真理教導",
      description: "忠於聖經真理,透過系統化的教導,幫助信徒靈命成長。",
    },
    {
      icon: Users,
      title: "團契生活",
      description: "建立真實的團契關係,在小組中彼此扶持,一同成長。",
    },
    {
      icon: Globe,
      title: "宣教使命",
      description: "回應大使命,關心本地與海外宣教,傳揚福音到地極。",
    },
  ];

  const team = [
    {
      name: "張恩典 牧師",
      role: "主任牧師",
      image: "/images/yfMmh42zw1yj.jpg",
      description: "帶領教會超過10年,致力於培育門徒,建立健康的教會。",
    },
    {
      name: "李喜樂 傳道",
      role: "青年牧區傳道",
      image: "/images/tKOWemIVMKmB.jpg",
      description: "專注於青年事工,陪伴年輕人在信仰中成長與突破。",
    },
    {
      name: "王平安 長老",
      role: "行政長老",
      image: "/images/Q914DsicH1ec.jpg",
      description: "負責教會行政與財務管理,確保教會健康運作。",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/church-exterior.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-foreground/70" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-white mb-6 drop-shadow-lg">關於我們</h1>
            <p className="text-xl text-white/95 leading-relaxed drop-shadow-md">
              認識竹南勝利堂的異象、使命與核心價值
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-foreground mb-6">我們的異象</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                竹南勝利堂的異象是成為一個讓人遇見神、經歷神、服事神的屬靈家園。我們渴望看見每一個來到教會的人,都能在這裡找到屬靈的家,經歷神的愛與恩典,生命得著更新與轉化。
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                我們相信教會不只是一個建築物,更是一群被神呼召、彼此相愛的信徒群體。透過敬拜、禱告、團契與服事,我們一同建造神的國度,成為這個世代的光與鹽。
              </p>
              
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-lg font-heading italic text-foreground">
                  「所以,你們要去,使萬民作我的門徒,奉父、子、聖靈的名給他們施洗。凡我所吩咐你們的,都教訓他們遵守,我就常與你們同在,直到世界的末了。」
                </p>
                <p className="text-sm text-muted-foreground mt-3">— 馬太福音 28:19-20</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/prayer-hands.png"
                  alt="禱告的手"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">核心價值</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              這些價值是我們教會的根基,引導我們的事工方向與決策
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="floating-card bg-card border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground mb-12 text-center">教會歷史</h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-3xl font-heading font-bold text-primary">2010</div>
                </div>
                <div className="flex-1 pb-12 border-l-2 border-primary/20 pl-8 relative">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary" />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">教會成立</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    竹南勝利堂在張恩典牧師的帶領下成立,起初只有20多位弟兄姊妹,在一個小型的聚會場所開始聚會。
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-3xl font-heading font-bold text-primary">2015</div>
                </div>
                <div className="flex-1 pb-12 border-l-2 border-primary/20 pl-8 relative">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary" />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">會堂擴建</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    隨著會眾人數增長至100多人,教會搬遷至現址,並進行會堂擴建,增設副堂與多間教室。
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-3xl font-heading font-bold text-primary">2020</div>
                </div>
                <div className="flex-1 pb-12 border-l-2 border-primary/20 pl-8 relative">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary" />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">小組倍增</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    推動小組事工,從原本的3個小組成長至12個小組,涵蓋不同年齡層與需求的弟兄姊妹。
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-3xl font-heading font-bold text-accent">2026</div>
                </div>
                <div className="flex-1 pl-8 relative">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent" />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">持續成長</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    目前教會有200多位會眾,持續透過主日崇拜、小組聚會、禱告會等多元形式,帶領更多人認識主耶穌。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">牧者團隊</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              認識帶領教會的牧者與同工
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="floating-card bg-card border-0 overflow-hidden">
                <div
                  className="h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">教會環境</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              我們擁有完善的聚會場地與設施
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="floating-card bg-card border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">主堂</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  可容納250人的主堂,配備完善的音響與投影設備,適合主日崇拜與大型聚會。
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 舒適的座椅與空調系統</li>
                  <li>• 專業音響與燈光設備</li>
                  <li>• 無障礙設施</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">副堂與教室</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  多間副堂與教室,提供小組聚會、兒童主日學、青少年聚會等使用。
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 6間小組教室</li>
                  <li>• 兒童主日學教室</li>
                  <li>• 青年活動空間</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">育嬰室</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  專為帶嬰幼兒的家長設計,可透過玻璃窗觀看主堂聚會,並有音響同步轉播。
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 舒適的沙發與尿布台</li>
                  <li>• 即時影音轉播</li>
                  <li>• 溫奶器等設備</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="floating-card bg-card border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">交誼廳</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  寬敞的交誼空間,提供聚會前後的團契交流,並有簡易的茶水與點心。
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 開放式交誼空間</li>
                  <li>• 茶水與咖啡供應</li>
                  <li>• 書報閱覽區</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
