import { redirect, type Load } from '@sveltejs/kit';

export const load: Load = ()  => {
  redirect(301, 'blog/1')
}
