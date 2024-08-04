import { redirect, type Load } from '@sveltejs/kit';

export const load: Load = ()  => {
  // console.log(`Running Load Function for /blog`)
  redirect(301, 'blog/1')
}
