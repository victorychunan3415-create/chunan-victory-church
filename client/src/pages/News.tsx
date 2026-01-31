/**
 * Design Philosophy: Warm Storytelling
 * - News cards with category badges
 * - Magazine-style layout with featured items
 * - Easy-to-scan information hierarchy
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, Heart, Users, X } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function News() {
  const [prayerFormOpen, setPrayerFormOpen] = useState(false);
  const [eventFormOpen, setEventFormOpen] = useState(false);
  const [prayerForm, setPrayerForm] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    content: "",
    category: "general",
    isPublic: "yes",
  });
  const [eventForm, setEventForm] = useState({
    eventName: "洗禮預備課程",
    eventDate: "2026-02-20",
    name: "",
    email: "",
    phone: "",
    numberOfPeople: 1,
    notes: "",
  });
  const [prayerErrors, setPrayerErrors] = useState<Record<string, string>>({});
  const [eventErrors, setEventErrors] = useState<Record<string, string>>({});

  const prayerSubmit = trpc.prayer.submit.useMutation();
  const eventRegister = trpc.event.register.useMutation();
  const prayerList = trpc.prayer.list.useQuery();

  const newsItems = [
    {
      id: 1,
      category: "特別聚會",
      categoryColor: "accent",
      title: "2026 春季復興特會",
      date: "2026-03-15",
      time: "19:30",
      image: "/images/BgIomq89R211.jpeg",
      excerpt: "邀請您參加為期三天的復興特會,一同經歷聖靈的更新與充滿,領受從神而來的異象與能力。特會將邀請資深牧者分享信息,並有敬拜讚美與禱告服事。",
      featured: true,
    },
    {
      id: 2,
      category: "洗禮報名",
      categoryColor: "primary",
      title: "洗禮預備課程開始報名",
      date: "2026-02-20",
      time: "14:00",
      image: "/images/ljyHquIZhgAa.jpg",
      excerpt: "歡迎已決志信主的弟兄姊妹報名參加洗禮預備課程。課程將幫助您更深入了解洗禮的意義,並預備心領受這份恩典。",
      featured: false,
    },
    {
      id: 3,
      category: "代禱事項",
      categoryColor: "accent",
      title: "為宣教士守望禱告",
      date: "2026-02-01",
      time: "",
      image: "/images/prayer-hands.png",
      excerpt: "請為在各地宣教的同工們禱告,求神保守他們的身心靈健康,賜給他們智慧與能力,在當地建立神的國度。",
      featured: false,
    },
    {
      id: 4,
      category: "營會活動",
      categoryColor: "primary",
      title: "青年夏令營報名開始",
      date: "2026-07-10",
      time: "全天",
      image: "/images/tKOWemIVMKmB.jpg",
      excerpt: "為期三天兩夜的青年夏令營,將帶領青年人在大自然中親近神,透過信息分享、小組討論與團康活動,建立深厚的團契關係。",
      featured: false,
    },
    {
      id: 5,
      category: "教會公告",
      categoryColor: "accent",
      title: "教會年度感恩見證會",
      date: "2026-12-25",
      time: "10:00",
      image: "/images/fellowship-gathering.png",
      excerpt: "歡迎弟兄姊妹參加年度感恩見證會,一同數算神在過去一年的恩典與帶領,並分享生命的見證。",
      featured: false,
    },
    {
      id: 6,
      category: "事工招募",
      categoryColor: "primary",
      title: "敬拜團招募新成員",
      date: "2026-02-15",
      time: "",
      image: "/images/hero-worship.png",
      excerpt: "教會敬拜團誠摯邀請有音樂恩賜的弟兄姊妹加入,一同透過音樂敬拜神,服事會眾。歡迎會樂器或有歌唱恩賜者報名。",
      featured: false,
    },
  ];

  const featuredNews = newsItems.find((item) => item.featured);
  const regularNews = newsItems.filter((item) => !item.featured);

  const validatePrayerForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!prayerForm.name.trim()) {
      errors.name = "請輸入您的名字";
    }
    if (!prayerForm.title.trim()) {
      errors.title = "請輸入代禱事項標題";
    }
    if (!prayerForm.content.trim()) {
      errors.content = "請輸入詳細說明";
    }
    if (prayerForm.email && !isValidEmail(prayerForm.email)) {
      errors.email = "請輸入有效的電子郵件";
    }

    setPrayerErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateEventForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!eventForm.name.trim()) {
      errors.name = "請輸入您的名字";
    }
    if (!eventForm.email.trim()) {
      errors.email = "請輸入電子郵件";
    } else if (!isValidEmail(eventForm.email)) {
      errors.email = "請輸入有效的電子郵件";
    }
    if (eventForm.numberOfPeople < 1) {
      errors.numberOfPeople = "參加人數至少為 1";
    }

    setEventErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handlePrayerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePrayerForm()) {
      toast.error("請填寫所有必填欄位");
      return;
    }

    try {
      await prayerSubmit.mutateAsync({
        name: prayerForm.name,
        email: prayerForm.email || undefined,
        phone: prayerForm.phone || undefined,
        title: prayerForm.title,
        content: prayerForm.content,
        category: prayerForm.category,
        isPublic: prayerForm.isPublic,
      });
      toast.success("感謝您的代禱需求!願神保守您。");
      setPrayerForm({
        name: "",
        email: "",
        phone: "",
        title: "",
        content: "",
        category: "general",
        isPublic: "yes",
      });
      setPrayerErrors({});
      setPrayerFormOpen(false);
      prayerList.refetch();
    } catch (error) {
      toast.error("提交失敗,請稍後重試");
    }
  };

  const handleEventRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEventForm()) {
      toast.error("請填寫所有必填欄位");
      return;
    }

    try {
      await eventRegister.mutateAsync({
        eventName: eventForm.eventName,
        eventDate: eventForm.eventDate,
        name: eventForm.name,
        email: eventForm.email,
        phone: eventForm.phone || undefined,
        numberOfPeople: eventForm.numberOfPeople,
        notes: eventForm.notes || undefined,
      });
      toast.success("報名成功!感謝您的參與。");
      setEventForm({
        eventName: "洗禮預備課程",
        eventDate: "2026-02-20",
        name: "",
        email: "",
        phone: "",
        numberOfPeople: 1,
        notes: "",
      });
      setEventErrors({});
      setEventFormOpen(false);
    } catch (error) {
      toast.error("報名失敗,請稍後重試");
    }
  };

  const closeModal = (type: "prayer" | "event") => {
    if (type === "prayer") {
      setPrayerFormOpen(false);
      setPrayerErrors({});
    } else {
      setEventFormOpen(false);
      setEventErrors({});
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-gradient-to-br from-primary to-primary/80">
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-white mb-6 drop-shadow-lg">最新消息</h1>
            <p className="text-xl text-white/95 leading-relaxed drop-shadow-md">
              掌握教會最新動態、活動資訊與代禱事項
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-16 bg-background">
          <div className="container">
            <Card className="floating-card bg-card border-0 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div
                  className="h-96 lg:h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${featuredNews.image}')` }}
                />
                <CardContent className="p-12 flex flex-col justify-center">
                  <div className={`inline-block px-4 py-2 bg-${featuredNews.categoryColor}/10 text-${featuredNews.categoryColor} text-sm font-medium rounded-full mb-6 w-fit`}>
                    <Tag className="w-4 h-4 inline mr-2" />
                    {featuredNews.category}
                  </div>
                  <h2 className="text-foreground mb-6">{featuredNews.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-muted-foreground mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{featuredNews.date}</span>
                    </div>
                    {featuredNews.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <span>{featuredNews.time}</span>
                      </div>
                    )}
                  </div>
                  <Button 
                    onClick={() => setEventFormOpen(true)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit"
                  >
                    立即報名
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <Card key={item.id} className="floating-card bg-card border-0 overflow-hidden group cursor-pointer">
                <div
                  className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <CardContent className="p-6">
                  <div className={`inline-block px-3 py-1 bg-${item.categoryColor}/10 text-${item.categoryColor} text-xs font-medium rounded-full mb-4 w-fit`}>
                    {item.category}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    {item.time && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Requests Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-accent" />
              <h2 className="text-foreground">代禱事項</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-12">
              與弟兄姊妹一同為教會、家庭、社會代禱,經歷神的大能與恩典
            </p>

            {prayerList.data && prayerList.data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {prayerList.data.slice(0, 4).map((prayer) => (
                  <Card key={prayer.id} className="floating-card bg-card border-0">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{prayer.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{prayer.content}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{prayer.name}</span>
                        <span>{new Date(prayer.createdAt).toLocaleDateString('zh-TW')}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center mb-12">暫無代禱事項</p>
            )}

            <Button 
              onClick={() => setPrayerFormOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              提交代禱需求
            </Button>
          </div>
        </div>
      </section>

      {/* Prayer Form Modal */}
      {prayerFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-card border-0 shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-2xl font-heading font-semibold text-foreground">提交代禱需求</h3>
              <button
                onClick={() => closeModal("prayer")}
                className="p-1 hover:bg-secondary rounded-lg transition-colors"
                aria-label="關閉"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>
            <CardContent className="p-6">
              <form onSubmit={handlePrayerSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    您的名字 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="請輸入您的名字"
                    value={prayerForm.name}
                    onChange={(e) => {
                      setPrayerForm({ ...prayerForm, name: e.target.value });
                      if (prayerErrors.name) setPrayerErrors({ ...prayerErrors, name: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      prayerErrors.name ? "border-red-500" : "border-border"
                    }`}
                  />
                  {prayerErrors.name && <p className="text-red-500 text-sm mt-1">{prayerErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    電子郵件 (可選)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={prayerForm.email}
                    onChange={(e) => {
                      setPrayerForm({ ...prayerForm, email: e.target.value });
                      if (prayerErrors.email) setPrayerErrors({ ...prayerErrors, email: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      prayerErrors.email ? "border-red-500" : "border-border"
                    }`}
                  />
                  {prayerErrors.email && <p className="text-red-500 text-sm mt-1">{prayerErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    電話 (可選)
                  </label>
                  <input
                    type="tel"
                    placeholder="0912345678"
                    value={prayerForm.phone}
                    onChange={(e) => setPrayerForm({ ...prayerForm, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    代禱事項標題 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="請輸入代禱事項標題"
                    value={prayerForm.title}
                    onChange={(e) => {
                      setPrayerForm({ ...prayerForm, title: e.target.value });
                      if (prayerErrors.title) setPrayerErrors({ ...prayerErrors, title: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      prayerErrors.title ? "border-red-500" : "border-border"
                    }`}
                  />
                  {prayerErrors.title && <p className="text-red-500 text-sm mt-1">{prayerErrors.title}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    詳細說明 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="請詳細說明您的代禱需求"
                    value={prayerForm.content}
                    onChange={(e) => {
                      setPrayerForm({ ...prayerForm, content: e.target.value });
                      if (prayerErrors.content) setPrayerErrors({ ...prayerErrors, content: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none ${
                      prayerErrors.content ? "border-red-500" : "border-border"
                    }`}
                  />
                  {prayerErrors.content && <p className="text-red-500 text-sm mt-1">{prayerErrors.content}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    分享方式
                  </label>
                  <select
                    value={prayerForm.isPublic}
                    onChange={(e) => setPrayerForm({ ...prayerForm, isPublic: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="yes">公開分享</option>
                    <option value="no">僅供教會內部</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-6">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={prayerSubmit.isPending}
                  >
                    {prayerSubmit.isPending ? "提交中..." : "提交"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => closeModal("prayer")}
                  >
                    取消
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Event Registration Modal */}
      {eventFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-card border-0 shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-2xl font-heading font-semibold text-foreground">活動報名</h3>
              <button
                onClick={() => closeModal("event")}
                className="p-1 hover:bg-secondary rounded-lg transition-colors"
                aria-label="關閉"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>
            <CardContent className="p-6">
              <form onSubmit={handleEventRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    選擇活動
                  </label>
                  <select
                    value={eventForm.eventName}
                    onChange={(e) => setEventForm({ ...eventForm, eventName: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="洗禮預備課程">洗禮預備課程</option>
                    <option value="春季復興特會">春季復興特會</option>
                    <option value="青年夏令營">青年夏令營</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    您的名字 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="請輸入您的名字"
                    value={eventForm.name}
                    onChange={(e) => {
                      setEventForm({ ...eventForm, name: e.target.value });
                      if (eventErrors.name) setEventErrors({ ...eventErrors, name: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      eventErrors.name ? "border-red-500" : "border-border"
                    }`}
                  />
                  {eventErrors.name && <p className="text-red-500 text-sm mt-1">{eventErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    電子郵件 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={eventForm.email}
                    onChange={(e) => {
                      setEventForm({ ...eventForm, email: e.target.value });
                      if (eventErrors.email) setEventErrors({ ...eventErrors, email: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      eventErrors.email ? "border-red-500" : "border-border"
                    }`}
                  />
                  {eventErrors.email && <p className="text-red-500 text-sm mt-1">{eventErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    電話 (可選)
                  </label>
                  <input
                    type="tel"
                    placeholder="0912345678"
                    value={eventForm.phone}
                    onChange={(e) => setEventForm({ ...eventForm, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    參加人數 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="1"
                    value={eventForm.numberOfPeople}
                    onChange={(e) => {
                      setEventForm({ ...eventForm, numberOfPeople: parseInt(e.target.value) || 1 });
                      if (eventErrors.numberOfPeople) setEventErrors({ ...eventErrors, numberOfPeople: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      eventErrors.numberOfPeople ? "border-red-500" : "border-border"
                    }`}
                    min="1"
                  />
                  {eventErrors.numberOfPeople && <p className="text-red-500 text-sm mt-1">{eventErrors.numberOfPeople}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    備註 (可選)
                  </label>
                  <textarea
                    placeholder="有任何特殊需求或備註嗎?"
                    value={eventForm.notes}
                    onChange={(e) => setEventForm({ ...eventForm, notes: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-20 resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-6">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={eventRegister.isPending}
                  >
                    {eventRegister.isPending ? "報名中..." : "立即報名"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => closeModal("event")}
                  >
                    取消
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Newsletter Signup */}
      <section className="py-24 bg-background">
        <div className="container">
          <Card className="floating-card bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-16 text-center">
              <h2 className="text-white mb-6">訂閱教會電子報</h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                訂閱我們的電子報,第一時間收到最新消息、活動資訊與靈修文章
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="請輸入您的電子郵件"
                  className="flex-1 px-6 py-4 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  訂閱
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-6">
                我們重視您的隱私,不會將您的資料分享給第三方
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
