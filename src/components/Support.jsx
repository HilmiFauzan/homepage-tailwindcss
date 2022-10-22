import React from 'react'

import { PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { CpuChipIcon, Cog6ToothIcon} from '@heroicons/react/24/solid'

import supporting from '../assets/Cyber.webp'

const Support = () => {
	return(
		<div name="support" className="w-full mt-24">
			<div className="w-full h-[700px] bg-gray-900/90 absolute">
				<img className="w-full h-full object-cover mix-blend-overlay" src={supporting} alt="" />
			</div>
			<div className="max-w-[1240px] mx-auto text-white relative">
				<div className="px-4 py-12">
					<h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Dukungan</h2>
					<h3 className="text-5xl font-bold tpy-6 text-center">Menemukan tim yang tepat</h3>
					<p className="py-4 text-3xl text-slate-300">Culpa commodo excepteur voluptate dolore officia consectetur pariatur occaecat. Lorem ipsum laboris laboris id duis esse dolor fugiat excepteur reprehenderit proident cillum duis consequat ad culpa nisi ea minim commodo.</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
					<div className="bg-white rounded-xl shadow-2xl">
						<div className="p-8">
							<PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
							<h3 className="font-bold text-2xl my-6">Penjualan</h3>
							<p className="text-gray-600 text-xl">Quis cupidatat ut nisi aliqua nisi duis laborum fugiat eu consectetur esse cillum.</p>
						</div>
						<div className="bg-gradient-to-r from-zinc-200 to-slate-200 pl-8 py-4">
								<p className="items-center text-indigo-600">
									<button className="flex rounded-full bg-sky-500/100 p-2 border-inherit">
										Hubungi Kami <ArrowRightIcon className="w-5 ml-2" />
									</button>
								</p>
						</div>
					</div>

					<div className="bg-white rounded-xl shadow-2xl">
						<div className="p-8">
							<Cog6ToothIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
							<h3 className="font-bold text-2xl my-6">Dukungan Teknis</h3>
							<p className="text-gray-600 text-xl">Quis cupidatat ut nisi aliqua nisi duis laborum fugiat eu consectetur esse cillum.</p>
						</div>
						<div className="bg-gradient-to-r from-zinc-200 to-slate-200 pl-8 py-4">
								<p className="items-center text-indigo-600">
									<button className="flex rounded-full bg-sky-500/100 p-2 border-inherit">
										Hubungi Kami <ArrowRightIcon className="w-5 ml-2" />
									</button>
								</p>
						</div>
					</div>

					<div className="bg-white rounded-xl shadow-2xl">
						<div className="p-8">
							<CpuChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
							<h3 className="font-bold text-2xl my-6">Pertanyaan Media</h3>
							<p className="text-gray-600 text-xl">Quis cupidatat ut nisi aliqua nisi duis laborum fugiat eu consectetur esse cillum.</p>
						</div>
						<div className="bg-gradient-to-r from-zinc-200 to-slate-200 pl-8 py-4">
							<p className="items-center text-indigo-600">
								<button className="flex rounded-full bg-sky-500/100 p-2 border-inherit">
									Hubungi Kami 
									<ArrowRightIcon className="w-5 ml-2" />
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Support