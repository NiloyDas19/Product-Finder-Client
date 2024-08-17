import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import search from './../../assets/search.png';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut, loading } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (loading) {
        return (
            <div className="text-center">
                <span className="loading loading-spinner loading-lg mx-auto"></span>
            </div>
        );
    }

    const handleLogOut = () => {
        console.log(user);
        logOut()
            .then(() => {
                console.log("Log Out Successful");
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const navLinks = <>
        <li>
            <Link to="/" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-3 py-2">All Products</Link>
        </li>
        {
            user ?
                <>
                    <li className='ml-5'>
                        <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            </div>
                        </div>
                    </li>
                    <li onClick={handleLogOut} className='ml-3'>
                        <Link type="button" to="/" className="text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded-xl px-4 py-2">Log out</Link>
                    </li>
                </>
                :
                <li>
                    <Link type="button" to="/login" className="text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded-xl px-4 py-2">Log in</Link>
                </li>
        }
    </>

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-full flex items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3">
                    <Link to="/" className='flex gap-1 items-center'>
                        <img src={search} className="h-8" alt="Logo" />
                        <span className="text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text dark:text-white">
                            PRODUCT FINDER
                        </span>
                    </Link>
                </div>
                <ul className="hidden md:flex md:items-center md:space-x-8">
                    {
                        navLinks
                    }
                </ul>
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className={`fixed top-0 right-0 w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 md:hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out h-screen`}>
                    <div className="p-4">
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            onClick={toggleMenu}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <ul className="mt-4 space-y-4">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
