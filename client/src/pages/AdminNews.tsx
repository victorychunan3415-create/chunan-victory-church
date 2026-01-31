import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Link } from "wouter";
import RichTextEditor from "@/components/RichTextEditor";

export default function AdminNews() {
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "announcement",
    imageUrl: "",
    status: "draft" as "draft" | "published" | "archived",
  });

  // Queries and mutations
  const { data: newsList, refetch: refetchNews } = trpc.news.listAll.useQuery(
    { status: undefined },
    { enabled: !!user && user.role === "admin" }
  );

  const createMutation = trpc.news.create.useMutation({
    onSuccess: () => {
      refetchNews();
      resetForm();
      setIsOpen(false);
    },
  });

  const updateMutation = trpc.news.update.useMutation({
    onSuccess: () => {
      refetchNews();
      resetForm();
      setIsOpen(false);
    },
  });

  const deleteMutation = trpc.news.delete.useMutation({
    onSuccess: () => {
      refetchNews();
    },
  });

  // Redirect if not admin
  if (loading) {
    return <div className="p-8 text-center">載入中...</div>;
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="p-8 text-center">
        <p>您沒有權限訪問此頁面</p>
        <Link href="/">
          <Button className="mt-4">返回首頁</Button>
        </Link>
      </div>
    );
  }

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "announcement",
      imageUrl: "",
      status: "draft",
    });
    setEditingId(null);
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.content) {
      alert("請填寫標題和內容");
      return;
    }

    if (editingId) {
      await updateMutation.mutateAsync({
        id: editingId,
        ...formData,
      });
    } else {
      await createMutation.mutateAsync(formData);
    }
  };

  const handleEdit = (item: any) => {
    setFormData({
      title: item.title,
      excerpt: item.excerpt || "",
      content: item.content,
      category: item.category,
      imageUrl: item.imageUrl || "",
      status: item.status,
    });
    setEditingId(item.id);
    setIsOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("確定要刪除這則新聞嗎？")) {
      deleteMutation.mutate({ id });
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">新聞管理</h1>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => resetForm()}
                className="bg-primary text-primary-foreground"
              >
                <Plus className="w-4 h-4 mr-2" />
                新增新聞
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingId ? "編輯新聞" : "新增新聞"}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    標題 *
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="輸入新聞標題"
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    摘要
                  </label>
                  <Textarea
                    value={formData.excerpt}
                    onChange={(e) =>
                      setFormData({ ...formData, excerpt: e.target.value })
                    }
                    placeholder="輸入新聞摘要（可選）"
                    rows={2}
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    內容 *
                  </label>
                  <RichTextEditor
                    value={formData.content}
                    onChange={(value) =>
                      setFormData({ ...formData, content: value })
                    }
                    placeholder="輸入新聞內容"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    分類
                  </label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="announcement">公告</SelectItem>
                      <SelectItem value="event">活動</SelectItem>
                      <SelectItem value="testimony">見證</SelectItem>
                      <SelectItem value="news">新聞</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    圖片 URL
                  </label>
                  <Input
                    value={formData.imageUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, imageUrl: e.target.value })
                    }
                    placeholder="輸入圖片 URL（可選）"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    狀態
                  </label>
                  <Select
                    value={formData.status}
                    onValueChange={(value: any) =>
                      setFormData({ ...formData, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">草稿</SelectItem>
                      <SelectItem value="published">已發佈</SelectItem>
                      <SelectItem value="archived">已歸檔</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Actions */}
                <div className="flex gap-2 justify-end pt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsOpen(false);
                      resetForm();
                    }}
                  >
                    取消
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={
                      createMutation.isPending || updateMutation.isPending
                    }
                  >
                    {editingId ? "更新" : "建立"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* News List */}
        <div className="space-y-4">
          {newsList && newsList.length > 0 ? (
            newsList.map((item) => (
              <Card key={item.id} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            item.status === "published"
                              ? "bg-green-100 text-green-800"
                              : item.status === "draft"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {item.status === "published"
                            ? "已發佈"
                            : item.status === "draft"
                              ? "草稿"
                              : "已歸檔"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.excerpt || item.content.substring(0, 100)}
                      </p>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>分類: {item.category}</span>
                        <span>
                          建立: {new Date(item.createdAt).toLocaleDateString("zh-TW")}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(item)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center text-muted-foreground">
                還沒有新聞，點擊「新增新聞」建立第一則新聞
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
