"use client";
import{ useRouter } from 'next/navigation';
import{ useState } from 'react';
import{ saveToken } from '@/lib/auth';
import{ Button } from '@/components/ui/button';
import{ Input } from '@/components/ui/input';
import{ Card, CardContent } from '@/components/ui/card';

import{ API_BASE } from '@/lib/config';
import { FormEvent } from 'react';

export default function LoginPage() {

    const router = useRouter();
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
    setError('');


  
    const res = await fetch('https://blanconestjs.onrender.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password}),
    });
  
    const data = await res.json();
       if (!res.ok) {
           setError(data.message || ' Login faild');
        return;
       }

       saveToken(data.accessToken);
        router.push('/dashboard')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-300 to-blue-500 relative overflow-hidden">
        <Card className="w=full max-w-sm p-6">
        
        <CardContent>
        <h1 className="text-xl font-bold mb-4"></h1>

        <form onSubmit={handleLogin} className="space-y-4">
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button className="w-full bg-black text-white py-2 rounded-full font-semibold mb-4 hover:bg-gray-900">Login</Button>
        </form>

        <Button variant="link" className="mt-2 w-full" onClick={() => router.push('/register')}>create an account</Button>
        </CardContent>
        </Card>
        </div>
        

    );
}