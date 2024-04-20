"use client";
import { MainLogo } from '@/assets';
import { auth } from '@/firebase/firebase';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IntlProvider } from 'react-intl';
const Auth = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();
    const [showPassword] = useState(false);
    const [locale, setLocale] = useState("mn");

    useEffect(() => {
        if (user) {
            router.push('/admin');
        }

        const timeout = setTimeout(() => {
            setError('');
            setSuccess('');
        }, 3000);

        return () => clearTimeout(timeout);
    }, [user, router, error, success]);

    const signInWithEmail = () => {
        setSending(true);
        setError('');
        setSuccess('');
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setSending(false);
                setSuccess('Successfully signed in with email!');
            })
            .catch((error) => {
                console.log(error);
                setSending(false);
                setError('Incorrect email or password');
            });
    }

    const handleKeyDownOnPassword = (event: any) => {
        if (event.key === 'Enter') {
            signInWithEmail();
        }
    }

    return (
        <html lang="mn">
            <body className='flex h-screen relative' style={{ background: 'linear-gradient(270deg, #FFF 25.25%, rgba(255, 255, 255, 0.00) 100%)' }}>
                <div className="w-full max-w-xs m-auto bg-gray-300 rounded p-5">
                    <IntlProvider
                        locale={locale}
                        defaultLocale="en"
                    >
                        <CacheProvider>
                            <ChakraProvider>
                                <header>
                                    <div className="w-20 mx-10 mb-5 pl-8">
                                        <MainLogo />
                                    </div>
                                </header>
                                <form>
                                    <div>
                                        <label className="block mb-2 text-gray-500 text-[#66377B] font-bold" htmlFor="username">
                                            Нэвтрэх нэр
                                        </label>
                                        <input
                                            className="w-full p-2 mb-6 text-gray-800 border-b-2 border-[#23356B] outline-none"
                                            type="text"
                                            name="username"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyDown={handleKeyDownOnPassword}
                                            placeholder='Нэвтрэх нэр оруулна уу'
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-gray-500 text-[#66377B] font-bold" htmlFor="password">
                                            Нууц үг
                                        </label>
                                        <input
                                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#23356B] outline-none"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onKeyDown={handleKeyDownOnPassword}
                                            placeholder='Нууц үг оруулна уу'
                                        />
                                    </div>
                                    <div>
                                        <button
                                            className="w-full bg-[#66377B] hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                                            type="button"
                                            onClick={signInWithEmail}
                                            disabled={sending}
                                        >
                                            {sending ? 'Нэвтэрч байна...' : 'Нэвтрэх'}
                                        </button>
                                    </div>
                                </form>
                                <footer>
                                    {/* <Link className="text-gray-500 hover:text-pink-700 text-sm float-left" href="" onClick={handleResetPassword}>Forgot Password?</Link> */}
                                </footer>
                                <div>
                                </div>
                            </ChakraProvider>
                        </CacheProvider>
                    </IntlProvider>
                </div>
            </body>
        </html>
    );
}

export default Auth;