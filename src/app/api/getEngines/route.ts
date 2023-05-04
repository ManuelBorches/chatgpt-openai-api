import openai from '@root/lib/chatgpt';
import { NextResponse } from 'next/server';

async function handler() {
  const models = await openai.listModels().then((res) => res.data.data);

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  return NextResponse.json({ modelOptions });
}

export { handler as GET };
