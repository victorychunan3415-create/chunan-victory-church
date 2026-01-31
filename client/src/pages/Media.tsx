/**
 * Design Philosophy: Warm Storytelling
 * - Video grid with sermon information
 * - Filter by series or date
 * - Downloadable sermon notes
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Play } from "lucide-react";

export default function Media() {
  const sermons = [
    {
      id: 1,
      title: "信心的旅程",
      series: "希伯來書系列",
      date: "2026-01-26",
      speaker: "張恩典 牧師",
      thumbnail: "/images/bible-study.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hasNotes: true,
    },
    {
      id: 2,
      title: "愛的真諦",
      series: "哥林多前書系列",
      date: "2026-01-19",
      speaker: "李喜樂 傳道",
      thumbnail: "/images/hero-worship.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hasNotes: true,
    },
    {
      id: 3,
      title: "神的呼召",
      series: "以賽亞書系列",
      date: "2026-01-12",
      speaker: "張恩典 牧師",
      thumbnail: "/images/fellowship-gathering.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hasNotes: true,
    },
    {
      id: 4,
      title: "得勝的生命",
      series: "羅馬書系列",
      date: "2026-01-05",
      speaker: "張恩典 牧師",
      thumbnail: "/images/prayer-hands.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hasNotes: false,
    },
    {
      id: 5,
      title: "聖靈的果子",
      series: "加拉太書系列",
      date: "2025-12-29",
      speaker: "李喜樂 傳道",
      thumbnail: "/images/BgIomq89R211.jpeg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hasNotes: true,
    },
    {
      id: 6,
      title: "神的恩典夠用",
      series: "哥林多後書系列",
      date: "2025-12-22",
      speaker: "張恩典 牧師",
      thumbnail: "/images/church-exterior.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hasNotes: true,
    },
  ];

  const series = ["全部", "希伯來書系列", "哥林多前書系列", "以賽亞書系列", "羅馬書系列", "加拉太書系列", "哥林多後書系列"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-gradient-to-br from-primary to-primary/80">
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-white mb-6 drop-shadow-lg">主日講道</h1>
            <p className="text-xl text-white/95 leading-relaxed drop-shadow-md">
              收聽主日信息,下載講道大綱,讓神的話語充滿您的生活
            </p>
          </div>
        </div>
      </section>

      {/* Latest Sermon - Featured */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-foreground mb-2">本週講道</h2>
            <p className="text-muted-foreground">最新的主日信息</p>
          </div>

          <Card className="floating-card bg-card border-0 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 relative group">
                <div
                  className="h-96 lg:h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${sermons[0].thumbnail}')` }}
                >
                  <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl">
                      <Play className="w-10 h-10 text-accent-foreground ml-1" />
                    </button>
                  </div>
                </div>
              </div>
              <CardContent className="lg:col-span-2 p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 w-fit">
                  {sermons[0].series}
                </div>
                <h2 className="text-foreground mb-4">{sermons[0].title}</h2>
                <p className="text-muted-foreground mb-2">講員: {sermons[0].speaker}</p>
                <div className="flex items-center gap-2 text-muted-foreground mb-8">
                  <Calendar className="w-5 h-5" />
                  <span>{sermons[0].date}</span>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Play className="w-4 h-4 mr-2" />
                    觀看影片
                  </Button>
                  {sermons[0].hasNotes && (
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      下載大綱
                    </Button>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-secondary/30 sticky top-20 z-40 border-b border-border">
        <div className="container">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {series.map((s, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-primary text-primary-foreground" : ""}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Sermon Archive */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-foreground mb-2">講道回顧</h2>
            <p className="text-muted-foreground">瀏覽過往的主日信息</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.slice(1).map((sermon) => (
              <Card key={sermon.id} className="floating-card bg-card border-0 overflow-hidden group">
                <div className="relative">
                  <div
                    className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${sermon.thumbnail}')` }}
                  >
                    <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-all duration-300 shadow-2xl">
                        <Play className="w-8 h-8 text-accent-foreground ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3 w-fit">
                    {sermon.series}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">講員: {sermon.speaker}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                    <Calendar className="w-4 h-4" />
                    <span>{sermon.date}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Play className="w-4 h-4 mr-1" />
                      觀看
                    </Button>
                    {sermon.hasNotes && (
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              載入更多
            </Button>
          </div>
        </div>
      </section>

      {/* Sermon Series Info */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground mb-12 text-center">講道系列</h2>
            
            <div className="space-y-6">
              <Card className="floating-card bg-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-heading font-bold text-primary">新</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        希伯來書系列
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        透過希伯來書,我們將一同探討信心的真諦,認識耶穌基督作為我們的大祭司,以及如何在信心中堅持到底。
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>講員: 張恩典 牧師</span>
                        <span>•</span>
                        <span>進行中</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="floating-card bg-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-heading font-bold text-accent">愛</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        哥林多前書系列
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        深入探討愛的真諦,學習如何在教會生活中實踐彼此相愛,建立合一的團契關係。
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>講員: 李喜樂 傳道</span>
                        <span>•</span>
                        <span>已完結</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
