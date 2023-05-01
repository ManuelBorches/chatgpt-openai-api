'use client';

import { type FC, type ReactNode } from 'react';
import { type Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';

interface SessionProviderProps {
  children: ReactNode;
  session: Session | null;
}

export const SessionProvider: FC<SessionProviderProps> = ({
  children,
  session,
}) => {
  return <Provider>{children}</Provider>;
};
