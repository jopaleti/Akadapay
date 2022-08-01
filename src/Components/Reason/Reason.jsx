import React from "react";
import "./styles.scss";
import { bg1, bg2, castle, parent } from "../../Assets";

export default function Reason() {
	return (
		<div className="reason pb-4 pt-2" style={{ background: `${bg1}` }}>
			<div className="reason-flex flex items-center justify-between">
				<div className="reason-item">
					<img src={parent} alt="" className="w-full" />
				</div>
				<div className="reason-item">
					<h1 className="text-4xl font-semibold leading-10">
						Are you a parent?
					</h1>
					<p className="mt-14 text-gray-500 text-small">
						Are you having difficulties paying your child(ren)'s school fees’
						obligations?
					</p>
					<p className="text-lg font-semibold mt-2">We offer:</p>
					<ul>
						<li className="text-base font-semibold">- Quick Response</li>
						<p className="ml-3 text-small text-gray-500">
							AkadaPay respond to and approves your application within 24 hours
							of validation.
						</p>
						<li className="text-base font-semibold">- Easy Fulfillment</li>
						<p className="ml-3 text-small text-gray-500">
							AkadaPay remits your full obligations to your child(ren)'s school
							on your behalf.
						</p>
						<li className="text-base font-semibold">- Simple Process</li>
						<p className="ml-3 text-small text-gray-500">
							AkadaPay supports you through the process before, during and after
							application.
						</p>
					</ul>
					<p className="mt-6 sm:mt-14 text-gray-500 text-small">
						Apply for our support; it is Quick, Easy and Simple.
					</p>
					<div className="mt-10">
						<a
							href="/"
							className="px-8 py-3 border-4 hover:duration-700 hover:bg-transparent text-white"
							style={{ background: "#8BC6EC", border: "#8BC6EC" }}
						>
							Apply
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
