"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Home, Gamepad2, Trophy, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MiniGameHub() {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState("home");
	const [activeCategory, setActiveCategory] = useState("All");

	const categories = [
		"All",
		"Puzzle",
		"Arcade",
		"Strategy",
		"Action",
		"Casual",
	];

	const games = [
		{
			id: 1,
			link: "https://pinpoint-flame.vercel.app",
			title: "Pinpoint",
			category: "Action",
			cover: "/assets/images/Pinpoint.png?height=300&width=200&text=🍬",
		},
		{
			id: 2,
			link: "https://pinpoint-flame.vercel.app",
			title: "Sudoku",
			category: "Puzzle",
			cover: "/assets/images/Sudoku.png?height=300&width=200&text=🧱",
		},
		{
			id: 3,
			link: "https://oink-oink-oeqc.vercel.app",
			title: "OinkOink",
			category: "Arcade",
			cover: "/assets/images/OinkOink.png?height=300&width=200&text=👾",
		},
		{
			id: 4,
			link: "https://tic-tac-toe-theta-three-19.vercel.app",
			title: "Mini Metro",
			category: "Strategy",
			cover: "/assets/images/Tic_Tac_Toe.png?height=300&width=200&text=🚇",
		},
		{
			id: 5,
			link: "https://cube-rush.vercel.app/",
			title: "Cube rush",
			category: "Action",
			cover: "/assets/images/Cube.png?height=300&width=200&text=🍉",
		},
		{
			id: 6,
			link: "https://tic-tac-toe-theta-three-19.vercel.app",
			title: "2048",
			category: "Puzzle",
			cover: "/assets/images/game_cover2.jpg?height=300&width=200&text=🔢",
		},
		{
			id: 7,
			link: "https://tic-tac-toe-theta-three-19.vercel.app",
			title: "Crossy Road",
			category: "Casual",
			cover: "/assets/images/game2.jpg?height=300&width=200&text=🐔",
		},
		{
			id: 8,
			link: "https://tic-tac-toe-theta-three-19.vercel.app",
			title: "Angry Birds",
			category: "Casual",
			cover: "/assets/images/game1.jpg?height=300&width=200&text=🐦",
		},
	];

	const filteredGames =
		activeCategory === "All"
			? games
			: games.filter((game) => game.category === activeCategory);

	const handlePlayNow = () => {
		router.push("https://pinpoint-flame.vercel.app");
	};
	return (
		<div className="flex flex-col h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white">
			<header className="p-4 flex items-center justify-between bg-opacity-50 bg-black backdrop-blur-md">
				<div className="relative flex-1 max-w-sm">
					<Input
						type="search"
						placeholder="Search games..."
						className="pl-10 bg-white bg-opacity-20 border-transparent text-white placeholder-gray-300 focus:bg-opacity-30 transition-all duration-300"
					/>
					<Search
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
						size={18}
					/>
				</div>
				<Avatar className="ml-4 ring-2 ring-white ring-opacity-50">
					<AvatarImage
						src="/placeholder.svg?height=40&width=40&text=👤"
						alt="User"
					/>
					<AvatarFallback>U</AvatarFallback>
				</Avatar>
			</header>

			<main className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
				<section className="relative h-48 rounded-xl overflow-hidden shadow-lg">
					<img
						src="/assets/images/game_cover4.jpg?height=192&width=384&text=🎮+Featured+Game"
						alt="Featured Game"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
						<h2 className="text-2xl font-bold mb-2 drop-shadow-md">
							Featured: Candy Crush
						</h2>
						<Button
							onClick={handlePlayNow}
							variant="secondary"
							className="w-32 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-md transition-all duration-300">
							Play Now
						</Button>
					</div>
				</section>

				<section>
					<h3 className="text-xl font-semibold mb-3">Categories</h3>
					<ScrollArea className="w-full whitespace-nowrap pb-4">
						<div className="flex space-x-2">
							{categories.map((category) => (
								<Button
									key={category}
									variant={
										activeCategory === category ? "secondary" : "outline"
									}
									className="flex-shrink-0 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-md transition-all duration-300"
									onClick={() => setActiveCategory(category)}>
									{category}
								</Button>
							))}
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</section>

				<section>
					<h3 className="text-xl font-semibold mb-3">Popular Mini-Games</h3>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						{filteredGames.map((game) => (
							<Link
								href={game.link}
								key={game.id}
								className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg group">
								<img
									src={game.cover}
									alt={game.title}
									className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
									<p className="text-sm font-medium">{game.title}</p>
									<p className="text-xs text-gray-300">{game.category}</p>
								</div>
							</Link>
						))}
					</div>
				</section>
			</main>

			<nav className="flex justify-around items-center h-16 bg-black bg-opacity-50 backdrop-blur-md">
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
							activeTab === value ? "text-white" : "text-gray-400"
						} hover:text-white transition-colors duration-300`}
						onClick={() => setActiveTab(value)}>
						<Icon size={24} />
						<span className="text-xs mt-1">{label}</span>
					</Button>
				))}
			</nav>
		</div>
	);
}
