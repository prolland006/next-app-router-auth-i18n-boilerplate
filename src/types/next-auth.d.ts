import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Session {
    user: {
      id?: string;
      accessToken: string;
    } & DefaultSession['user'];
  }

  export interface User {
    token: string;
  }
}
