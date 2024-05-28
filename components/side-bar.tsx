'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ThemeToggler from '@/components/themetoggle';
const links = [

    { path: '/now', text: 'now' },
    // { path: '/logs', text: 'logs' },
    { path: '/projects', text: 'projects' },
    // { path: '/library', text: 'library' },
    { path: '/about', text: 'about' },
    { path: '/vault', text: 'vault' },
];

export function Sidebar() {
    const pathname = usePathname();
    return (
        <div className='md:sticky md:top-10 flex flex-col items-center mb-10'>
            <div>
                <div className='font-bold text-center md:text-left mt-5 md:mt-0'>
                    <Link href='/'>
                        <h1>黄正伟 <br />Wei </h1>
                    </Link>
                </div>
                <br></br>
                {/* Adjust the flex container to wrap items on smaller screens */}
                <div className='flex align-center justify-center flex-wrap space-x-4 justify-center md:flex-col md:mt-2 space-x-4 md:space-y-1.5 md:space-x-0 md:justify-start'>
                    {links.map(({ path, text }) => (
                        <Link
                            key={path}
                            href={path}
                            className={`block ${pathname === path ? 'text-yellow-600' : 'hover:underline'
                                }`}
                        >
                            {text}
                        </Link>
                    ))}
                    <ThemeToggler />
                </div>
            </div>
        </div>
    );
}