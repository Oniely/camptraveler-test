import Image from "next/image";
import { ReactNode } from "react";

type Props = {
	type?: "button" | "submit";
	title: string;
	icon?: string;
	variant?: string;
	full?: boolean
};

const Button = ({
	type = "button",
	title,
	icon,
	variant = "btn_dark_green",
	full
}: Props) => {
	return (
		<button
			type={type}
			className={`flexCenter rounded-full gap-3 py-2 px-4 border ${variant} ${full && 'w-full'}`}
		>
			{icon && <Image src={icon} alt={type} width={24} height={24} />}
			<label className="font-bold whitespace-nowrap cursor-pointer">{title}</label>
		</button>
	);
};

export default Button;
