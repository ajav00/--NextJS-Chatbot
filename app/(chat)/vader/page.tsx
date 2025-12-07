"use client";
import React, { useState } from "react";

export default function page() {
	const [value, setValue] = useState("");

	const conversation = [
		{
			text: "Vader! Frenzhy has arrived! I bring news… and also a sock.",
			role: "user", // Frenzhy
		},
		{
			text: "I sense your presence, Frenzhy. Why do you disturb the Force with… a sock?",
			role: "vader",
		},
		{
			text: "Because the sock is powerful! It squeaks when I bite it!",
			role: "user", // Frenzhy
		},
		{
			text: "A curious artifact. Show me this squeak. Its power may be… useful.",
			role: "vader",
		},
		{
			text: "SQUEAK! SQUEAK! See? Frenzhy is strong!",
			role: "user",
		},
		{
			text: "Impressive. Most impressive. You might yet become a true apprentice of the Dark Side.",
			role: "vader",
		},
		{
			text: "Does the Dark Side have treats? Frenzhy wants treats.",
			role: "user",
		},
		{
			text: "Treats are a path to obedience. And obedience leads to power. You shall have them.",
			role: "vader",
		},
	];

	return (
		<div className="chat-container flex flex-col w-full h-full">
			<div className="mb-3 w-full h-full">
				{conversation.map((item, index) => {
					return item.role === "user" ? (
						<div className="flex p-2 m-1 items-center gap-2 w-full justify-end" key={index}>
							<div className="p-2 m-1 bg-blue-100 rounded-lg">
								<p className="text-gray-800 text-lg">{item.text}</p>
							</div>
							<img
								src="/assets/dog-chat.png"
								alt="frenzhy profile"
								height={50}
								width={60}
							/>
						</div>
					) : (
						<div className="flex p-2 m-1 items-center gap-2" key={index}>
							<img
								src="/assets/vader-chat.png"
								alt="vader profile"
								height={50}
								width={60}
							/>
							<div className="p-2 m-1 bg-gray-200 rounded-lg">
								<p className="text-gray-800 text-lg">{item.text}</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className="mt-5 w-full">
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className="border p-2 rounded w-full"
				/>
			</div>
		</div>
	);
}
