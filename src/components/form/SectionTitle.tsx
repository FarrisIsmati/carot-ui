import InfoIcon from "@/designSystem/Icons/InfoIcon";
import TooltipPortal from "@/designSystem/Tooltip/TooltipPortal";
import Type from "@/designSystem/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8, spacerHalf } from "@/styles/sizes";
import styled from "styled-components";

const LabelContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${spacer8};
`;

interface SectionTitleProps {
	children: React.ReactNode;
	tooltip?: NonNullable<React.ReactNode>;
}

const SectionTitle = ({ children, tooltip }: SectionTitleProps) => {
	return (
		<LabelContainer>
			<Type semanticfont={semanticFonts.labelMedium} letterSpacing={spacerHalf}>
				{children}
			</Type>
			{tooltip !== undefined && (
				<TooltipPortal tooltip={tooltip}>
					<InfoIcon />
				</TooltipPortal>
			)}
		</LabelContainer>
	);
};

export default SectionTitle;
