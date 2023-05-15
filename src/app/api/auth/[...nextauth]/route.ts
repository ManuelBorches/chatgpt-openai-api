import NextAuth from 'next-auth';
import { authOptions } from '@root/src/app/options';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
