'use client';
import React from 'react';

type Props = {
  status: string;
  category: string;
  onChange: (next: { status?: string; category?: string; q?: string }) => void;
};

export default function FilterBar({ status, category, onChange }: Props) {
  const [q, setQ] = React.useState('');

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center justify-between my-3">
      <div className="flex items-center gap-2">
        <select
          value={status}
          onChange={(e) => onChange({ status: e.target.value })}
          className="border rounded-md px-2 py-1"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={category}
          onChange={(e) => onChange({ category: e.target.value })}
          className="border rounded-md px-2 py-1"
        >
          <option value="">All Categories</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <input
          placeholder="Search..."
          className="border rounded-md px-2 py-1"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') onChange({ q }); }}
        />
        <button className="border rounded-md px-3 py-1" onClick={() => onChange({ q })}>
          Search
        </button>
      </div>
    </div>
  );
}
