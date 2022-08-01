import React from "react";
import { transaction } from "../../Assets";
import "./styles.scss";
import "animate.css";

export default function Payment() {
	return (
		<div className="payment-section my-8">
			<div className="payment-container overflow-hidden">
				<h1 className="text-5xl text-white font-semibold text-center">
					Payment <span className="text-red-400">Steps</span>
				</h1>
				<div className="payment-flex flex justify-between items-center mt-8">
					<div className="item1 flex justify-center">
						<img
							src={transaction}
							alt="img.jpg"
							className="w-2/3 object-center object-fill animate__animated animate__pulse animate__infinite"
						/>
					</div>
					<div className="item1 flex flex-col gap-8">
						<div className="flex w-full shadow-lg">
							<div className="bg-indigo-500 flex items-center justify-center sub-item w-1/4">
								<h1 className="text-white bold text-xl text-center header">
									Step 1
								</h1>
							</div>
							<div className="sub-item px-4 w-3/4 bg-white">
								<h1 className="text-2xl font-medium text-red-300 header">
									SIMPLE Documentation
								</h1>
								<p className="mt-2 text-gray-400 leading-7 para">
									Our eligibility criteria make validation easy for you to
									obtain financial support.
								</p>
							</div>
						</div>
						<div className="flex w-full shadow-lg">
							<div className="bg-yellow-300 flex items-center justify-center sub-item w-1/4">
								<h1 className="text-white bold text-xl text-center header">
									Step 2
								</h1>
							</div>
							<div className="sub-item px-4 w-3/4 bg-white">
								<h1 className="text-2xl font-medium text-red-300 header">
									SIMPLE Validation
								</h1>
								<p className="mt-2 text-gray-400 leading-7 para">
									Our validation requirements make approval easy for you to
									obtain financial support.
								</p>
							</div>
						</div>
						<div className="flex w-full shadow-lg">
							<div className="bg-green-500 flex items-center justify-center sub-item w-1/4">
								<h1 className="text-white bold text-xl text-center header">
									Step 3
								</h1>
							</div>
							<div className="sub-item px-4 w-3/4 bg-white">
								<h1 className="text-2xl font-medium text-red-300 header">
									SIMPLE Approval
								</h1>
								<p className="mt-2 text-gray-400 leading-7 para">
									Our approval process is fast and easy for you to obtain
									financial support.
								</p>
							</div>
						</div>
						<div className="flex w-full shadow-lg">
							<div className="bg-blue-500 flex items-center justify-center sub-item w-1/4">
								<h1 className="text-white bold text-xl text-center header">
									Step 4
								</h1>
							</div>
							<div className="sub-item px-4 w-3/4 bg-white">
								<h1 className="text-2xl font-medium text-red-300 header">
									SIMPLE Disbursement
								</h1>
								<p className="mt-2 text-gray-400 leading-7 para">
									Our funds disbursement is instant for you to obtain financial
									support.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
