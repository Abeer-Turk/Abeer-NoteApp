import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/db/mongo';
import { Todo } from '@/models/Todo';
import { updateTodoSchema } from '@/lib/schemas/todo';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  await connectMongo(process.env.MONGO_DB_URI as string);
  const item = await Todo.findById(params.id);
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connectMongo(process.env.MONGO_DB_URI as string);
  const json = await req.json();
  const parsed = updateTodoSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.format() }, { status: 400 });

  const updated = await Todo.findByIdAndUpdate(params.id, parsed.data, { new: true });
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await connectMongo(process.env.MONGO_DB_URI as string);
  const res = await Todo.findByIdAndDelete(params.id);
  if (!res) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
