import React, { useRef } from "react";
import { foot } from "../../Assets";
import "./styles.scss";

export default function Navbar() {
	// const navbar = useRef();
	// const open = () => {
	// 	navbar.current.style.display = "block";
	// };
	// setTimeout

	return (
		<div className="navbar">
			<div className="navtopContainer">
				<div className="navtop py-4 flex flex-col md:flex-row md:justify-between items-center">
					<div className="flex-item1 inline-flex gap-4 justify-between items-center">
						<small className="text-white text-small icon-cont">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="inline h-6 w-6 mr-3"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							+234 905 306 5636
						</small>
						<small className="text-small icon-cont">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="inline h-6 w-6 mr-3"
								fill="white"
								viewBox="0 0 24 24"
								stroke="grey"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<a
								href="mailto:
                                info@londonmortgagesolutions.co.uk
                            "
								className="text-white"
							>
								support@akadapay.com
							</a>
						</small>
					</div>
					<div className="flex-item text-end">AKadapay is the best</div>
				</div>
			</div>

			<div className="navSecond flex justify-between items-center my-4">
				<div>
					<a href="/" className="logo">
						<img src={foot} alt="" className="h-18" />
						{/* <h1 className="text-2xl">LONDON MORTAGE</h1> */}
					</a>
				</div>
				<div className="flex items-center justify-self-end navSecondCont">
					<a href="/" className="mr-8 text-base text-gray-500 font-bold">
						About Us
					</a>
					<a href="/" className="mr-8 text-base text-gray-500 font-bold">
						Fees Payments
					</a>
					<a href="/" className="mr-8 text-base text-gray-500 font-bold">
						Contact Us
					</a>
				</div>
				{/* Hamburger */}
				<div className="hamburger hidden cursor-pointer p-1 bg-gray-200 rounded">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>
				<div className="navButton">
					<a
						href="/"
						className="text-white font-semibold bg-black rounded py-3 px-8"
					>
						Know more
					</a>
				</div>
			</div>
			<hr className="bg-black mx-auto mt-8" style={{ width: "60%" }} />
			{/* Last Navbar Top */}
			<div className="navLast flex items-center justify-center gap-4 py-3">
				<small className="text-small rank">
					<a href="/">Our students say</a>
				</small>
				<p className="text-base">Excellent</p>
				<div className="flex items-center gap-1">
					<div className="p-1 bg-green-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="white"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="0"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
							/>
						</svg>
					</div>
					<div className="p-1 bg-green-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="white"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="0"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
							/>
						</svg>
					</div>
					<div className="p-1 bg-green-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="white"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="0"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
							/>
						</svg>
					</div>
				</div>
				<small className="text-small rank">
					4.99 out of 5 based on our reviews
				</small>
				<p className="text-base font-semibold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 inline"
						fill="green"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="0"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						/>
					</svg>
					Acadapay
				</p>
			</div>
		</div>
	);
}
