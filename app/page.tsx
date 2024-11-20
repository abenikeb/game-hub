"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Home, Gamepad2, Trophy, User } from "lucide-react";

export default function GameHub() {
	const [activeTab, setActiveTab] = useState("home");

	const categories = [
		"Action",
		"Adventure",
		"RPG",
		"Strategy",
		"Sports",
		"Puzzle",
		"Shooter",
		"Racing",
	];

	const games = [
		{
			id: 1,
			title: "Neon Nexus",
			cover: "/assets/images/game_cover4.jpg?height=300&width=200",
		},
		{
			id: 2,
			title: "Stellar Siege",
			cover: "/assets/images/game2.jpg?height=300&width=200",
		},
		{
			id: 3,
			title: "Chrono Quest",
			cover: "/assets/images/game_cover2.jpg?height=300&width=200",
		},
		{
			id: 4,
			title: "Mystic Realms",
			cover: "/assets/images/game_cover3.jpg?height=300&width=200",
		},
		{
			id: 5,
			title: "Cyber Legends",
			cover: "/assets/images/game_cover4.jpg?height=300&width=200",
		},
		{
			id: 6,
			title: "Astro Armada",
			cover: "/assets/images/game1.jpg?height=300&width=200",
		},
	];

	return (
		<div className="flex flex-col h-screen bg-gray-900 text-white">
			<header className="p-4 flex items-center justify-between bg-gray-800">
				<div className="relative flex-1 max-w-sm">
					<Input
						type="search"
						placeholder="Search games..."
						className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
					/>
					<Search
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
						size={18}
					/>
				</div>
				<Avatar className="ml-4">
					<AvatarImage
						src="/assets/images/game_cover2.jpg?height=40&width=40"
						alt="User"
					/>
					<AvatarFallback>U</AvatarFallback>
				</Avatar>
			</header>

			<main className="flex-1 overflow-y-auto">
				<section className="relative h-64 mb-6">
					<img
						src="/assets/images/game1.jpg?height=256&width=512"
						alt="Featured Game"
						className="w-full h-full object-cover"
					/>
					<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
						<h2 className="text-2xl font-bold mb-2">Featured: Neon Nexus</h2>
						<Button variant="secondary">Play Now</Button>
					</div>
				</section>

				<section className="mb-6 px-4">
					<h3 className="text-xl font-semibold mb-3">Categories</h3>
					<ScrollArea className="w-full whitespace-nowrap">
						<div className="flex space-x-2 pb-2">
							{categories.map((category) => (
								<Button
									key={category}
									variant="outline"
									className="flex-shrink-0 text-black">
									{category}
								</Button>
							))}
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</section>

				<section className="px-4">
					<h3 className="text-xl font-semibold mb-3">Popular Games</h3>
					<div className="grid grid-cols-2 gap-4">
						{games.map((game) => (
							<div
								key={game.id}
								className="relative aspect-[2/3] rounded-lg overflow-hidden">
								<img
									src={game.cover}
									alt={game.title}
									className="w-full h-full object-cover"
								/>
								<div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
									<p className="text-sm font-medium">{game.title}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			<nav className="flex justify-around items-center h-16 bg-gray-800">
				{[
					{ icon: Home, label: "Home", value: "home" },
					{ icon: Gamepad2, label: "Games", value: "games" },
					{ icon: Trophy, label: "Achievements", value: "achievements" },
					{ icon: User, label: "Profile", value: "profile" },
				].map(({ icon: Icon, label, value }) => (
					<Button
						key={value}
						variant="ghost"
						className={`flex flex-col items-center p-1 h-full ${
							activeTab === value ? "text-primary" : "text-gray-400"
						}`}
						onClick={() => setActiveTab(value)}>
						<Icon size={24} />
						<span className="text-xs mt-1">{label}</span>
					</Button>
				))}
			</nav>
		</div>
	);
}
