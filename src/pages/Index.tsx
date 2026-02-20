import { useState, useEffect, useCallback } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:3001";

interface Item {
  id: number;
  title: string;
  created_at: string;
}

const Index = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await fetch(`${API}/items`);
      if (!res.ok) throw new Error();
      setItems(await res.json());
      setError("");
    } catch {
      setError("Could not reach API. Run docker-compose up to start the backend.");
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const add = async () => {
    if (!title.trim()) return;
    await fetch(`${API}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    load();
  };

  const remove = async (id: number) => {
    await fetch(`${API}/items/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 tracking-tight">Items</h1>

      {error && (
        <p className="text-sm text-destructive bg-destructive/10 rounded-md px-4 py-2 mb-6 max-w-md text-center">
          {error}
        </p>
      )}

      <div className="flex gap-2 mb-8 w-full max-w-md">
        <input
          className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          placeholder="New item…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <button
          onClick={add}
          className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between rounded-md border border-border px-4 py-3"
          >
            <span className="text-sm">{item.title}</span>
            <button
              onClick={() => remove(item.id)}
              className="text-xs text-muted-foreground hover:text-destructive transition-colors"
            >
              delete
            </button>
          </li>
        ))}
        {!error && items.length === 0 && (
          <li className="text-center text-sm text-muted-foreground py-4">No items yet.</li>
        )}
      </ul>
    </div>
  );
};

export default Index;
