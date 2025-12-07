"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Project } from "./models";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import robot from "./../public/robot.png";

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

export default function Home() {
	const [index, setIndex] = useState(0);

	const images = [
		"/assets/robot-v1.png",
		"/assets/robot-ok-v1.png",
		"/assets/robot-up-v1.png",
	];

	const projects: Project[] = [
		{
			title: 'Darth Vader Chat Bot',
			description: 'Darth Vader try to find information about the music that you likes',
			image: '/assets/lord-vader-music.png',
			link: '/vader'
		},
		{
			title: 'Darth Vader Chat Bot',
			description: 'Darth Vader try to find information about the music that you likes',
			image: '/assets/vader-complete.png',
			link: '/vader'
		},
		{
			title: 'Darth Vader Chat Bot',
			description: 'Darth Vader try to find information about the music that you likes',
			image: '/assets/lord-vader-music.png',
			link: '/vader'
		},
		{
			title: 'Darth Vader Chat Bot',
			description: 'Darth Vader try to find information about the music that you likes',
			image: '/assets/vader-complete.png',
			link: '/vader'
		},
		{
			title: 'Darth Vader Chat Bot',
			description: 'Darth Vader try to find information about the music that you likes',
			image: '/assets/lord-vader-music.png',
			link: '/vader'
		},
		{
			title: 'Darth Vader Chat Bot',
			description: 'Darth Vader try to find information about the music that you likes',
			image: '/assets/vader-complete.png',
			link: '/vader'
		}
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length);
		}, 3000); // 3 seconds per image

		return () => clearInterval(interval);
	}, []);

	return (
		<>
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
			<div  className="container-slider mb-10">
				<h2 className="place-self-center text-3xl font-bold my-7">List of Projects</h2>
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					//loop={true}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2.5
					}}
					className="swiper"
				>
				{
					projects.map((project, idx) => {
						
						return (
							<SwiperSlide key={idx}>
								<Link href={ project.link } >
									<img src={project.image} alt={project.title} />
								</Link>
							</SwiperSlide>

						)
					})
				}
				{/* <div className="slider-controler">
					<div className="swipper-button-prev slider-arrow">
						<ChevronLeftIcon size={12}  />
					</div>
					<div className="swipper-button-next slider-arrow">
						<ChevronRightIcon size={12} />
					</div>
				</div> */}
				</Swiper>
			</div>
		</>
	);
}
