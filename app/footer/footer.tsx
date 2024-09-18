import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Header from '../header/header';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='bg-[#c4c4c4]'>
            <div className="text-center mt-32 p-6 text-[15px] md:text-[20px] lg:text-[20px]">
                <h1 className="font-extrabold text-2xl mb-6">Follow Me</h1>
                <div className="flex justify-center mb-6">
                    <Image
                        src="/img.png"
                        height={50}
                        width={50}
                        alt="Profile Picture"
                        className="rounded-full shadow-lg shadow-black"
                    />
                </div>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0 lg:flex justify-center">
                    <Link
                        href="https://www.linkedin.com/in/hammad-abbasi-95388628b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-800 hover:text-white"
                    >
                        <FaLinkedin size={30} className="mr-2" />
                        LinkedIn
                    </Link>
                    <Link
                        href="https://www.facebook.com/profile.php?id=100068906216007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-800 hover:text-white"
                    >
                        <FaFacebook size={30} className="mr-2" />
                        Facebook
                    </Link>
                    <Link
                        href="https://www.instagram.com/mr_hammad.abbasi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-800  hover:text-white"
                    >
                        <FaInstagram size={30} className="mr-2" />
                        Instagram
                    </Link>
                </div>
            </div>
            <Header />
        </div>
    );
}
