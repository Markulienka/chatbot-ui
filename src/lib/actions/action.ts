// 'use server';

// import { redirect } from 'next/navigation';
// import { createClientForServer } from '../supabase/server';

// export async function signInWithGoogle() {
//   const supabase = await createClientForServer();
//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: 'google',
//     options: {
//       redirectTo: `${process.env.NEXT_PUBLIC_URL}/api/auth?next=/home`,
//     },
//   });

//   if (error) {
//     console.error('OAuth sign-in error:', error);
//     throw error;
//   }

//   redirect(data.url);
// }

// export async function signOut() {
//   const supabase = await createClientForServer();
//   const { error } = await supabase.auth.signOut();

//   if (error) {
//     console.error('Sign out error:', error);
//     throw error;
//   }

//   redirect(`${process.env.NEXT_PUBLIC_URL}/login`);
// }