import type { RequestEvent, ResolveOptions } from '@sveltejs/kit';
import { MaybePromise } from '@sveltejs/kit/types/helper';

export interface HandleOptions {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}
