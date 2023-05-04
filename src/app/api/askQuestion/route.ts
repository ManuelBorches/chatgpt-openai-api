import { NextResponse } from 'next/server';
import admin from 'firebase-admin';
import { adminDb } from '@root/firebaseAdmin';
import queryChatGptApi from '@root/lib/queryChatGptApi';
import { type Message } from '@root/typings';
import avatar from 'public/images/chat-green-bg.jpg';

async function handler(request: Request) {
  const { prompt, chatId, model, session } = await request.json();

  if (!prompt) {
    return new Response('Please provide a prompt', {
      status: 400,
    });
  }

  if (!chatId) {
    return new Response('Please provide a prompt', {
      status: 400,
    });
  }

  const response = await queryChatGptApi(prompt, chatId, model);

  const message: Message = {
    text: response ?? 'ChatGPT was unable to find an answer for that!',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar,
    },
  };

  await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

  return NextResponse.json({ answer: message.text });
}

export { handler as POST };
