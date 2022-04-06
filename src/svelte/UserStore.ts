import { SupabaseClient, Subscription } from '@supabase/supabase-js';
import { writable, Writable } from 'svelte/store';

export interface Props {
  supabaseClient: SupabaseClient;
  callbackUrl?: string;
  [propName: string]: any;
}

interface UserStore {
  isLoading: Writable<boolean>;
  error: Writable<Error>;
  checkAuthState: (cb: () => void) => Subscription | null;
}

const createUserStore = (props: Props) => {
  const { supabaseClient, callbackUrl = '/api/auth/callback' } = props;

  const isLoading = writable<boolean>(false);
  const error = writable<Error>();

  const checkAuthState = (cb: () => void) => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      async (event, session) => {
        isLoading.set(true);
        // Forward session from client to server where it is set in a Cookie.
        // NOTE: this will eventually be removed when the Cookie can be set differently.
        await fetch(callbackUrl, {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session })
        }).then((res) => {
          if (!res.ok) {
            const err = new Error(`The request to ${callbackUrl} failed`);
            error.set(err);
          }
        });
        isLoading.set(false);
        if (typeof cb === 'function') {
          cb();
        }
      }
    );

    return authListener;
  };

  return {
    isLoading,
    error,
    checkAuthState
  };
};

let user: UserStore;

export const UserStore = (props: Props) => {
  if (user === undefined) {
    user = createUserStore(props);
  }
  return user;
};
