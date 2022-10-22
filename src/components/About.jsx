import React from 'react'

const About = () => {
	return(
		<div name="about" className="w-full my-32">
			<div className="max-w-[1240px] mx-auto">
				<div className="text-center">
					<h2 className="text-5xl font-bold">Dipercaya oleh pengembang di seluruh dunia</h2>
					<p className="text-3xl py-6 text-gray-500">Id magna et consequat pariatur in excepteur dolore non tempor ut sed dolore dolore consectetur ullamco.</p>
				</div>

				<div className="grid md:grid-cols-3 gap-1 px-2 text-center">
					<div className="border py-8 rounded-xl shadow-xl">
						<p className="text-6xl font-bold text-sky-700">100%</p>
						<p className="text-gray-400 mt-2">Penyelesaian</p>
					</div>
					<div className="border py-8 rounded-xl shadow-xl">
						<p className="text-6xl font-bold text-sky-700">24/7</p>
						<p className="text-gray-400 mt-2">Pengiriman</p>
					</div>
					<div className="border py-8 rounded-xl shadow-xl">
						<p className="text-6xl font-bold text-sky-700">100K</p>
						<p className="text-gray-400 mt-2">Transaksi</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About