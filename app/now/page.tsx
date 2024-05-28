'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
const TIMEZONE = 'America/Los_Angeles';

const NowList = () => {
    const nowList =
        <div className='prose'>
            <li className='font-semibold mb-3.5'>new graduate from Fresno State!</li>
            <li className='font-semibold mb-3.5'>
                building {' '} <a href='https://github.com/splitit-app/splitit' rel="noopener noreferrer" target="_blank"> SplitIt</a> {' '} with friends
            </li>
            <li className='font-semibold mb-3.5'>
                learning {' '} <a href='https://github.com/de-only-wei/web' rel="noopener noreferrer" target="_blank"> Web Development</a> {' '} with <a href='https://nextjs.org/learn?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=home'> NextJS</a>
            </li>
            <li className='font-semibold mb-3.5'>building my inner-garden</li>
            <li className='font-semibold mb-3.5'>traveling around United States</li>
            {/* <li className='font-semibold mb-3.5'>reading "How to Win Friends and Influence People"</li> */}
        </div>

    return <div>{nowList}</div>
};

const NowPage = () => {
    //Time stuff
    const [time, setTime] = useState<string | null>(null);
    useEffect(() => {
        // Set initial time
        setTime(getTimeInTimezone(TIMEZONE));

        // Update time every second
        const intervalId = setInterval(() => {
            setTime(getTimeInTimezone(TIMEZONE));
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    function getTimeInTimezone(timezone: string): string {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: timezone,
            hour12: true, // Use 24-hour format
            hourCycle: "h24"
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    return (
        <div>
            <article className='prose '>
                <h1>Now</h1>
                <h3>Currently in Fresno, California, where it's currently {time}</h3>
                <NowList />
                <p className='font-semibold mt-10'>This is a now page inspired by <a href='https://sive.rs/nowff'>Derek Sivers</a></p>
                <p className='font-semibold'>Last updated - May 28, 2024</p>
            </article>
        </div>
    );
};

export default NowPage;