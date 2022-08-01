import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Reason from "../../Components/Reason/Reason";
import "./styles.scss";
import { offer } from "../../Assets";
import Footer from "../../Components/Footer/Footer";
import { Payment } from "../../Components";

export default function Landing() {
	return (
		<div className="landing">
			<Navbar />
			{/* Welcome to London section */}
			<div className="welc py-4">
				<div className="welcome">
					<div className="welcome-flex my-8 flex items-center justify-between">
						<div className="flex-right">
							<h1 className="text-4xl md:text-4xl lg:text-5xl mb-4 font-semibold text-white">
								Welcome to Acadapay Mortgage Solutions
							</h1>
							<p className="text-xl leading-10 mb-2 text-white">
								No Child Left Behind
							</p>
							<small className="text-lg font-bold block text-white">
								Our convenient school fees payment program Allevates parent's
								burden & Guarantee Funding to school
							</small>
							<div className="flex gap-6 mt-14 flex-right-btn">
								<div>
									<a
										href="/"
										className="hover:bg-transparent hover:duration-700 bg-black px-8 py-3 text-white border-4 border-black"
									>
										Get in Touch
									</a>
								</div>
								<div>
									<a
										href="/"
										className="hover:bg-black hover:duration-700 bg-transparent px-10 py-3 text-white border-2 border-black"
									>
										About Us
									</a>
								</div>
							</div>
						</div>
						<div className="flex-left">
							<div className="w-full py-8 px-4 bg-white">
								<form action="/">
									<input
										type="text"
										placeholder="Full Name"
										name="name"
										className="bg-gray-100 rounded px-3 py-2 w-full mb-4 outline-none"
									/>
									<input
										type="text"
										placeholder="Telephone"
										name="tel"
										className="bg-gray-100 rounded px-3 py-2 w-full mb-4 outline-none"
									/>
									<input
										type="email"
										placeholder="Email"
										name="name"
										className="bg-gray-100 rounded px-3 py-2 w-full mb-4 outline-none"
									/>
									<textarea
										name="msg"
										id=""
										rows="5"
										placeholder="Message"
										className="w-full bg-gray-100 outline-none p-3"
									></textarea>
									<div className="submit mt-4 text-center">
										<button
											type="submit"
											className="px-10 py-3 border-2 border-black"
										>
											SUBMIT
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Reasons */}
			<Reason />
			{/* work */}
			{/* <div className="work pt-14 pb-8 text-center">
				<div className="work-container">
					<h1 className="text-5xl text-white font-semibold">The Way We Work</h1>
					<p className="text-small text-white text-center mt-8">
						Our eligibility criteria make validation easy for you to obtain
						financial support.
						<br />
						Our validation requirements make approval easy for you to obtain
						financial support.
						<br />
						Our approval process is fast and easy for you to obtain financial
						support.
						<br />
						Our funds disbursement is instant for you to obtain financial
						support.
					</p>
					<div className="text-center mt-14">
						<a href="/" className="px-8 py-4 border-4 text-white">
							Read More
						</a>
					</div>
					<div className="work-last h-auto mt-14"></div>
				</div>
			</div> */}
			{/* Payment Section */}
			<Payment />
			{/* Why Choose uS */}
			<div className="choose mt-14">
				<div className="choose-container">
					<h1 className="text-center text-5xl font-semibold">Why Choose Us</h1>
					<div className="mt-20 flex flex-col gap-3 w-full justify-center items-center">
						<div className="choose-text flex items-center">
							<p className="text-2xl font-semibold mr-2">Excellent</p>
							<small
								className="p-1 text-center ml-2"
								style={{ background: "#0d369f" }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="white"
									viewBox="0 0 24 24"
									stroke=""
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
									/>
								</svg>
							</small>
							<small
								className="p-1 text-center ml-2"
								style={{ background: "#0d369f" }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="white"
									viewBox="0 0 24 24"
									stroke=""
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
									/>
								</svg>
							</small>
							<small
								className="p-1 text-center ml-2"
								style={{ background: "#0d369f" }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="white"
									viewBox="0 0 24 24"
									stroke=""
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
									/>
								</svg>
							</small>
							<small
								className="p-1 text-center ml-2"
								style={{ background: "#0d369f" }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="white"
									viewBox="0 0 24 24"
									stroke=""
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
									/>
								</svg>
							</small>
						</div>
						<div className="text-rated text-center">
							<small className="text-small flex">
								Rated 4.9 / 5 based on
								<span className="underline inline mx-1"> 189 reviews</span> on
								<small className="inline mx-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4"
										fill="green"
										viewBox="0 0 24 24"
										stroke=""
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
										/>
									</svg>
								</small>
								our services
							</small>
						</div>
					</div>
					{/* Showing */}
					<div className="show mt-8">
						<p className="text-small mb-8">Showing our unique features</p>
						<div className="show-items flex items-start justify-between">
							<div className="item1">
								<div className="choose-text flex items-center">
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
								</div>
								<div className="mt-8">
									<div>
										<h2 className="text-small font-semibold">
											Child(ren)s’ Benefit
										</h2>
										<small className="text-small mt-4">
											NO CHILD IS LEFT BEHIND, THEY ALL GET TO ATTEND SCHOOL
										</small>
									</div>
								</div>
							</div>
							<div className="item1">
								<div className="choose-text flex items-center">
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
								</div>
								<div className="mt-8">
									<div>
										<h2 className="text-small font-semibold">
											Parents’ Benefit
										</h2>
										<small className="text-small mt-4">
											LESS PRESSURE ON PARENTS, FEES ARE PAID IN INSTALMENTS
										</small>
									</div>
								</div>
							</div>
							<div className="item1">
								<div className="choose-text flex items-center">
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
								</div>
								<div className="mt-8">
									<div>
										<h2 className="text-small font-semibold">
											Institutes Benefit
										</h2>
										<small className="text-small mt-4">
											INSTITUTES DEPEND LESS ON EXTERNAL, EXTRA FUNDING
										</small>
									</div>
								</div>
							</div>
							<div className="item1">
								<div className="choose-text flex items-center">
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
									<small
										className="p-1 text-center ml-1"
										style={{ background: "#0d369f" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="white"
											viewBox="0 0 24 24"
											stroke=""
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									</small>
								</div>
								<div className="mt-8">
									<div>
										<h2 className="text-small font-semibold">
											Community Benefit
										</h2>
										<small className="text-small mt-4">
											ALL STAKEHOLDERS GET AKADAPAY’S FINANCIAL SUPPORT
										</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Map Section */}
			<div className="map mt-4">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31713.99072966596!2d3.326290451703935!3d6.490142340174282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c0f7bc8de87%3A0x62650fcb3d2c8fb1!2sSurulere%2C%20101241%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1659291352683!5m2!1sen!2sng"
					width="100%"
					height="250"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<div className="footer-section">
				<Footer />
			</div>
		</div>
	);
}
