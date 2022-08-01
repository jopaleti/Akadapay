import React from "react";
import { foot } from "../../Assets";
import "./styles.scss";

export default function Footer() {
	return (
		<div className="footer py-14">
			<div className="footer-container flex items-start justify-between">
				<div className="footer-item">
					<div className="mb-0">
						<a href="/">
							<img src={foot} alt="img.jpg" className="h-20" />
						</a>
					</div>
					<div className="mt-2">
						<div className="flex items-center gap-4 my-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<a href="mailto:support@akadapay.com" className="text-white">
								support@akadapay.com
							</a>
						</div>
						<div className="flex items-center gap-4 my-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
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
							<a href="mailto:support@akadapay.com" className="text-white">
								+234 905 306 5636
							</a>
						</div>
						<div className="flex items-center gap-4 my-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<a href="mailto:support@akadapay.com" className="text-white">
								5 Alhaji Tokan Street, Surulere, Lagos, Nigeria
							</a>
						</div>
					</div>
				</div>
				<div className="footer-item">
					<div>
						<h1 className="text-base font-bold text-white">Quick links</h1>
					</div>
					<div className="mt-6">
						<div className="flex items-center gap-4 my-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 5l7 7-7 7M5 5l7 7-7 7"
								/>
							</svg>
							<a href="mailto:support@akadapay.com" className="text-white">
								Parents Login
							</a>
						</div>
						<div className="flex items-center gap-4 my-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 5l7 7-7 7M5 5l7 7-7 7"
								/>
							</svg>
							<a href="mailto:support@akadapay.com" className="text-white">
								Institutes Login
							</a>
						</div>
						<div className="flex items-center gap-4 my-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 5l7 7-7 7M5 5l7 7-7 7"
								/>
							</svg>
							<a href="mailto:support@akadapay.com" className="text-white">
								Fees Payment
							</a>
						</div>
					</div>
				</div>
				<div className="footer-item">
					<div>
						<h1 className="text-base font-bold text-white">Company</h1>
					</div>
					<div className="mt-6">
						<div className="flex items-center gap-4 my-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 5l7 7-7 7M5 5l7 7-7 7"
								/>
							</svg>
							<a href="mailto:support@akadapay.com" className="text-white">
								About Us
							</a>
						</div>
						<div className="flex items-center gap-4 my-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 5l7 7-7 7M5 5l7 7-7 7"
								/>
							</svg>
							<a href="mailto:support@akadapay.com" className="text-white">
								Contact
							</a>
						</div>
					</div>
				</div>
				<div className="footer-item">
					<div>
						<h1 className="text-base font-bold text-white">Resources</h1>
					</div>
					<div className="mt-6">
						<div className="flex items-center gap-4 my-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 5l7 7-7 7M5 5l7 7-7 7"
								/>
							</svg>
							<a href="mailto:support@akadapay.com" className="text-white">
								Privacy Policy
							</a>
						</div>
						<div className="flex items-center gap-4 my-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 5l7 7-7 7M5 5l7 7-7 7"
								/>
							</svg>
							<a href="mailto:support@akadapay.com" className="text-white">
								Terms & Conditions
							</a>
						</div>
					</div>
				</div>
			</div>
			<p className="text-small text-white text-center mt-8">
				@2022 All rights reserved. Design by Akadapay
			</p>
		</div>
	);
}
