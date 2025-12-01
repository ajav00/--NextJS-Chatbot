"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import robot from "./../public/robot.png";

export default function Home() {
	const [index, setIndex] = useState(0);

	const images = [
		"/assets/robot-v1.png",
		"/assets/robot-ok-v1.png",
		"/assets/robot-up-v1.png",
		//"/assets/robot-hello-v1.png",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length);
		}, 3000); // 3 seconds per image

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="container-header flex justify-center">
			<div className="grid grid-cols-2">
				<div>
					<div className="bubbles justify-center">
						<span style={{ "--i": "11" } as React.CSSProperties}></span>
						<span style={{ "--i": "12" } as React.CSSProperties}></span>
						<span style={{ "--i": "24" } as React.CSSProperties}></span>
						<span style={{ "--i": "10" } as React.CSSProperties}></span>
						<span style={{ "--i": "24" } as React.CSSProperties}></span>
						<span style={{ "--i": "10" } as React.CSSProperties}></span>
						<span style={{ "--i": "14" } as React.CSSProperties}></span>
						<span style={{ "--i": "23" } as React.CSSProperties}></span>
						<span style={{ "--i": "18" } as React.CSSProperties}></span>
						<span style={{ "--i": "16" } as React.CSSProperties}></span>
						<span style={{ "--i": "19" } as React.CSSProperties}></span>
						<span style={{ "--i": "20" } as React.CSSProperties}></span>
						<span style={{ "--i": "22" } as React.CSSProperties}></span>
						<span style={{ "--i": "25" } as React.CSSProperties}></span>
						<span style={{ "--i": "18" } as React.CSSProperties}></span>
						<span style={{ "--i": "21" } as React.CSSProperties}></span>
						<span style={{ "--i": "15" } as React.CSSProperties}></span>
						<span style={{ "--i": "13" } as React.CSSProperties}></span>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center heading">
						<h1 className="font-bold typing">AI Projects</h1>
						<h2 className="animate-slide-up">Powered by Frenzhy</h2>
					</div>
				</div>
				<div className="w-full h-full flex justify-center items-center relative overflow-hidden">
					{images.map((src, i) => {
						const isActive = i === index;
						const isPrevious =
							i === (index - 1 + images.length) % images.length;

						return (
							<div
								key={src}
								className={`
                    absolute top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    transition-all duration-700 ease-out

                    ${isActive ? "opacity-100 scale-100" : ""}
                    ${isPrevious ? "animate-dispel" : ""}
                    ${!isActive && !isPrevious ? "opacity-0" : ""}
                  `}
							>
								<Image
									src={src}
									alt="Robot icons"
									width={340}
									height={450}
									priority
									className="object-contain drop-shadow-2xl img-shadow"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
