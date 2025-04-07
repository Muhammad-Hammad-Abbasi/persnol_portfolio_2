
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

import Link from 'next/link';

export default function Footer() {
    return (
        <div className=''>
            <div className="text-center p-6 text-[15px] md:text-[20px] lg:text-[20px]">
                <h1 className="font-extrabold text-4xl mb-6 text-[#D6BE8D] text-3d">Follow Me</h1>
                {/* <div className="flex justify-center mb-6">
                    <h2>H.</h2>
                </div> */}
                <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0 lg:flex justify-center  text-[#695b4e]">
                    <Link
                        href="https://www.linkedin.com/in/hammad-abbasi-95388628b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-[#dfcdbc]"
                    >
                        <FaLinkedin size={30} className="mr-2" />
                        LinkedIn
                    </Link>
                    <Link
                        href="https://www.facebook.com/profile.php?id=100068906216007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-[#dfcdbc]"
                    >
                        <FaFacebook size={30} className="mr-2" />
                        Facebook
                    </Link>
                    <Link
                        href="https://www.instagram.com/mr_hammad.abbasi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-[#dfcdbc]"
                    >
                        <FaInstagram size={30} className="mr-2" />
                        Instagram
                    </Link>
                </div>
            </div>

            <div className="relative">

                <div className="w-full max-w-[700px] border-b border-[#695b4e] mx-auto"></div>
            </div>

            <div className="text-center container pt-1 text-[#695b4e]">
                <p className="text-sm">&copy; 2024 Hammad Abbasi. All rights reserved.</p>
            </div>
        </div>
    );
}
