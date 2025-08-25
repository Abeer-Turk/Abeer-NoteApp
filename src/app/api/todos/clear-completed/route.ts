import { NextResponse } from 'next/server';
import { connectMongo } from '@/lib/db/mongo';
import { Todo } from '@/models/Todo';

export async function POST() {
  await connectMongo(process.env.MONGO_DB_URI as string);
  const result = await Todo.deleteMany({ completed: true });
  return NextResponse.json({ ok: true, deletedCount: result.deletedCount });
}
