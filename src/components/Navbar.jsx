import React, {useState} from 'react';
import { Link } from 'react-scroll';
import SlideUp from '../components/scroll/SlideUp';


import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const Navbar = () => {

	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)
	const handleClose = () => setNav(!nav)

	return(
		<div className="w-screen h-[80px] z-10 bg-gradient-to-r from-zinc-200 via-zinc-200 to-cyan-500 fixed drop-shadow-lg">
			<div className="px-2 flex justify-between items-center w-full h-full">
				<div className="flex items-center">
					<h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
					<ul className="hidden md:flex">
						<li>
							<Link to="home" smooth={true} duration={500}>
								Halaman
							</Link>
						</li>
						<li>
							<Link to="about" smooth={true} offset={-200} duration={500}>
								Tentang
							</Link>
						</li>
						<li>
							<Link to="support" smooth={true} offset={-50} duration={500}>
								Dukungan
							</Link>
						</li>
						<li>
							<Link to="platforms" smooth={true} offset={-200} duration={500}>
								Platform
							</Link>
						</li>
						<li>
							<Link to="pricing" smooth={true} offset={-50} duration={500}>
								Harga
							</Link>
						</li>
					</ul>
				</div>
				<div className="hidden md:flex pr-4">
					<button className="border-none bg-transparent text-black mr-4">Masuk</button>
					<button className="px-8 py-3">Daftar</button>
				</div>
				<div className="md:hidden mr-4" onClick={handleClick}>
					{!nav ? 
						<Bars3Icon className="h-6 w-6"/>
						: 
						<XMarkIcon className="w-6 h-6" />
					}
				</div>
			</div>
			<ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 navMin' }>
				<SlideUp>
					<li className="border-b-2 border-zinc-300 w-full">
						<Link onClick={handleClose} to="home" smooth={true} duration={500}>
							Halaman
						</Link>
					</li>
					<li className="border-b-2 border-zinc-300 w-full">
						<Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>
							Tentang
						</Link>
					</li>
					<li className="border-b-2 border-zinc-300 w-full">
						<Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>
							Dukungan
						</Link>
					</li>
					<li className="border-b-2 border-zinc-300 w-full">
						<Link onClick={handleClose} to="platforms" smooth={true} offset={-200} duration={500}>
							Platform
						</Link>
					</li>
					<li className="border-b-2 border-zinc-300 w-full">
						<Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>
							Harga
						</Link>
					</li>
				</SlideUp>

				<div className="flex flex-col my-4">
					<button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Masuk</button>
					<button className="px-8 py-3">Daftar</button>
				</div>
			</ul>

		</div>
	)
}

export default Navbar