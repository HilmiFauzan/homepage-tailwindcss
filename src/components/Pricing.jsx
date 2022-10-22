import React from 'react'

import {CheckIcon} from '@heroicons/react/24/solid'

const Pricing = () => {
	return(
		<div name="pricing" className="w-full text-white my-24">
			<div className="w-full h-[800px] bg-gradient-to-b from-slate-800 to-slate-900 absolute mix-blend-overlay"></div>

			<div className="max-w-[1240px] mx-auto py-12">
				<div className="text-center py-8 text-slate-300">
					<h2 className="text-3xl uppercase">HARGA</h2>
					<h3 className="text-5xl font-bold text-white py-8">Harga yang tepat untuk riset Anda</h3>
					<p className="text-3xl">Ea occaecat eiusmod anim in culpa sit duis qui in occaecat culpa reprehenderit enim sed qui dolor occaecat id ullamco laborum ut culpa velit.</p>
				</div>
				<div className="grid md:grid-cols-2">
					<div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
						<span className="uppercase px-3 py-1 bg-sky-200 text-sky-900 rounded-2xl text-sm">Standar</span>
						<div>
							<p className="text-5xl font-bold py-4 flex">Rp. 1.500.000 <span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
						</div>
						<p className="text-2xl py-8 text-slate-500">Lorem ipsum pariatur adipisicing in tempor sed eu non sunt eiusmod pariatur officia eiusmod culpa est nisi sunt proident nisi veniam id aute magna aliquip sed veniam ullamco voluptate sint.</p>
						<div className="text-2xl">
							<p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Amet veniam excepteur anim.</p>
							<p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Amet veniam excepteur anim.</p>
							<p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Amet veniam excepteur anim.</p>
							<p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Amet veniam excepteur anim.</p>
							<p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Amet veniam excepteur anim.</p>
							<button className="w-full py-4 my-4">Memulai</button>
						</div>
					</div>
					<div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
						<span className="uppercase px-3 py-1 bg-sky-200 text-sky-900 rounded-2xl text-sm">Menengah</span>
						<div>
							<p className="text-5xl font-bold py-4 flex">Rp. 2.000.000 <span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
						</div>
						<p className="text-2xl py-8 text-slate-500">Lorem ipsum pariatur adipisicing in tempor sed eu non sunt eiusmod pariatur officia eiusmod culpa est nisi sunt proident nisi veniam id aute magna aliquip sed veniam ullamco voluptate sint.</p>
						<div className="text-2xl">
							<p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Amet veniam excepteur anim.</p>
							<p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Amet veniam excepteur anim.</p>
							<p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Amet veniam excepteur anim.</p>
							<p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Amet veniam excepteur anim.</p>
							<p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Amet veniam excepteur anim.</p>
							<button className="w-full py-4 my-4">Memulai</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Pricing