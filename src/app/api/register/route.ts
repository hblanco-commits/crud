import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstname, lastname, username, password } = body;

    if (!firstname || !lastname || !username || !password) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    // TODO: Add your DB logic here (save user, hash password, etc.)
    // Example placeholder response:
    const createdUser = { id: Date.now(), firstname, lastname, username };

    return NextResponse.json({ message: 'User created', user: createdUser }, { status: 201 });
  } catch (err) {
    console.error('register route error', err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}