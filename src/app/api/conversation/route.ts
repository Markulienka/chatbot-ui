import { NextRequest, NextResponse } from 'next/server';
import { createClientForServer } from '@/lib/supabase/server';
import { getUser } from '@/lib/supabase/user';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    const supabase = await createClientForServer();
    const { error } = await supabase.from('conversations').insert({
      user_id: user.id,
      messages,
      created_at: new Date().toISOString(),
    });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'failed to save conversation' }, { status: 500 });
  }
}
