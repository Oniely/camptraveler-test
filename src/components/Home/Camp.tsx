import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampsiteProps {
	backgroundImage: string;
	title: string;
	subtitle: string;
	peopleJoined: string;
}

const CampSite = ({
	backgroundImage,
	title,
	subtitle,
	peopleJoined,
}: CampsiteProps) => {
	return (
		<div
			className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-3xl xl:rounded-3xl`}
		>
			<div className="h-full flex items-start justify-between flex-col p-6 lg:px-20 lg:py-10">
				<div className="flexCenter gap-4">
					<div className="bg-green-500 p-4 rounded-full">
						<Image
							src={"/folded-map.svg"}
							alt="map"
							width={28}
							height={28}
						/>
					</div>
					<div className="flex flex-col gap-1">
						<h4 className="bold-18 text-white">{title}</h4>
						<p className="regular-14 text-white">{subtitle}</p>
					</div>
				</div>

				<div className="flexCenter gap-6">
					<div className="flex -space-x-4 overflow-hidden">
						{PEOPLE_URL.map((url) => (
							<Image
								src={url}
								key={url}
								alt="person"
								width={50}
								height={50}
								className="inline-block h-10 w-10 rounded-full"
							/>
						))}
					</div>
					<p className="bold-16 md:bold-20 text-white">
						{peopleJoined}
					</p>
				</div>
			</div>
		</div>
	);
};

const Camp = () => {
	return (
		<div
			className={`2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20`}
		>
			<div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
				<CampSite
					backgroundImage="camp-site-1"
					title="Putuk Truno Camp"
					subtitle="Prigen, Pasuran"
					peopleJoined="50+ Joined"
				/>
				<CampSite
					backgroundImage="camp-site-2"
					title="Mountain View Camp"
					subtitle="Somewhere in the Wilderness"
					peopleJoined="100+ Joined"
				/>
			</div>

			<div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
				<div className="bg-green-600 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-[3rem] xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-[2rem]">
					<h2 className="text-white regular-24 md:regular-32 2xl:regular-64">
						<strong>Feeling Lost</strong> And Not Knowing The Way?
					</h2>
					<p className="regular-14 xl:regular-16 mt-5 text-white">
						Starting from the anxiety of the climbers when visiting
						a new climbing location, the possibility of getting lost
						is very large. That&apos;s why we are here for those of
						you who want to start an adventure
					</p>
					<Image
						src={"/quote.svg"}
						alt="camp-2"
						width={186}
						height={219}
						className="camp-quote"
					/>
				</div>
			</div>
		</div>
	);
};

export default Camp;
