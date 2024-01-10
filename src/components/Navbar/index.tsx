"use client";
import ButtonPrimary from "@/designSystem/Button/ButtonPrimary";
import ButtonText from "@/designSystem/Button/ButtonText";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { useRouter } from "next/navigation";

import { Sizes } from "@/styles/sizes";
import { StyledNavbar, StyledNavbuttonsContainer } from "./styles";

const Navbar = () => {
	const router = useRouter();

	return (
		<StyledNavbar>
			{/* Logo */}
			<ButtonText
				navigate="/"
				semanticfont={semanticFonts.logo}
				color={colorBaseMap[ColorBaseCore.GREEN_3]}
			>
				CAROT
			</ButtonText>

			{/* Navigation */}
			<StyledNavbuttonsContainer>
				{/* TOOL */}
				<ButtonText
					semanticfont={semanticFonts.labelMedium}
					navigate="/vision-free"
				>
					Tool
				</ButtonText>
				{/* ABOUT */}
				<ButtonText semanticfont={semanticFonts.labelMedium} navigate="/about">
					About
				</ButtonText>
				{/* BLOG */}
				<ButtonText semanticfont={semanticFonts.labelMedium} navigate="/blog">
					Blog
				</ButtonText>
			</StyledNavbuttonsContainer>

			{/* Login */}
			<StyledNavbuttonsContainer>
				<ButtonText semanticfont={semanticFonts.labelMedium} navigate="/login">
					Login
				</ButtonText>
				<ButtonPrimary
					size={Sizes.SMALL}
					routeTo={() => {
						router.push(`/get-started`);
					}}
				>
					Get started
				</ButtonPrimary>
			</StyledNavbuttonsContainer>
		</StyledNavbar>
	);
};

export default Navbar;
