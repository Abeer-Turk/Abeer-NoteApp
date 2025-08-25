'use client';
import React from 'react';

type Props = {
  id: string;
  initialText: string;
  initialCategory: string;
  onSaved?: () => void;
};

export default function TodoEditInline({ id, initialText, initialCategory, onSaved }: Props) {
  const [text, setText] = React.useState(initialText);
  const [category, setCategory] = React.useState(initialCategory);
  const [loading, setLoading] = React.useState(false);

  async function save() {
    setLoading(true);
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, category }),
      });
      if (!res.ok) throw new Error('Failed to update');
      onSaved?.();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center">
      <input className="border rounded-md px-2 py-1" value={text} onChange={(e) => setText(e.target.value)} />
      <select className="border rounded-md px-2 py-1" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Study">Study</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </select>
      <button className="border rounded-md px-3 py-1" onClick={save} disabled={loading}>{loading?'Saving...':'Save'}</button>
    </div>
  );
}
