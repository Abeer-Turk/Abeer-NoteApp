import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/db/mongo';
import { Todo } from '@/models/Todo';
import { bulkToggleSchema } from '@/lib/schemas/todo';

export async function POST(req: NextRequest) {
  await connectMongo(process.env.MONGO_DB_URI as string);
  const body = await req.json();
  const parsed = bulkToggleSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
  const { completed } = parsed.data;
  // Here, the userId should be extracted from auth; for simplicity we affect all todos for now (adjust if you have auth middleware)
  const result = await Todo.updateMany({}, { $set: { completed } });
  return NextResponse.json({ ok: true, modifiedCount: result.modifiedCount });
}
