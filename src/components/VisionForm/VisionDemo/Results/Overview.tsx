import AnimateNumber from "@/components/common/AnimateNumber";
import Type from "@/designSystem/Type";
import {
	ColorBaseCore,
	SemanticSetCores,
	colorBaseMap,
	getColorSet,
} from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import {
	spacer1,
	spacer16,
	spacer24,
	spacer32,
	spacer4,
	spacer64,
} from "@/styles/sizes";
import { Calendar } from "@/types/VisionForm/calendar";
import { useRef } from "react";
import { styled } from "styled-components";
import useUpdateOverviewHeaderSizing from "./hooks/useUpdateOverviewHeaderSizing";
import { getFontSizeByNumberWidth } from "./utils/fontSize";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer16};
	padding: ${spacer16} ${spacer24};
	border-radius: ${spacer4};
	background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
`;

const ResultsContainer = styled.div`
	display: flex;
	gap: ${spacer32};
	align-items: center;
`;

const Divider = styled.div`
	width: 1px;
	height: 44px;
	background-color: ${colorBaseMap[ColorBaseCore.NEUTRAL_8]};
`;

const ResultContainer = styled.div<{ width: number }>`
	display: flex;
	flex-direction: column;
	gap: ${spacer4};
	justify-content: flex-start;
	overflow: hidden;
	width: ${(props) => `${props.width}px`};
	height: ${spacer64};
`;

const AmountContainer = styled.div`
	display: flex;
`;

export interface ResultsOverviewProps {
	currencySymbol: string;
	calendar: Calendar | undefined;
}

export const ResultsOverview = ({
	currencySymbol,
	calendar,
}: ResultsOverviewProps) => {
	// Get projected ref
	const projectedRef = useRef<HTMLDivElement>(null);

	const years = calendar?.years.length;

	const displayWidth = useUpdateOverviewHeaderSizing(4, projectedRef);

	// TODO: On filtered set of data (use data instead of calendar for data points)

	const fontSizeNum = getFontSizeByNumberWidth(40, [
		calendar?.lifetimeInvested ?? 0,
		calendar?.lifetimeRevenue ?? 0,
		calendar?.lifetimeExpenses ?? 0,
		calendar?.lifetimeProfit ?? 0,
	]);

	const fontSize = `${fontSizeNum}px`;

	return (
		<Container ref={projectedRef}>
			<Type semanticfont={semanticFonts.headlineSmall} letterSpacing={spacer1}>
				Projected {years} year growth
			</Type>
			<ResultsContainer>
				{/* Invested */}
				<ResultContainer width={displayWidth}>
					<Type
						semanticfont={semanticFonts.bodySmall}
						colorSet={getColorSet(SemanticSetCores.BASE_SOFT)}
					>
						Invested
					</Type>
					<AmountContainer>
						<Type semanticfont={semanticFonts.labelMedium}>
							{currencySymbol}
						</Type>
						<Type
							semanticfont={semanticFonts.headlineMedium}
							fontSize={fontSize}
						>
							<AnimateNumber
								value={calendar?.lifetimeInvested ?? 0}
								decimals={2}
							/>
						</Type>
					</AmountContainer>
				</ResultContainer>

				<Divider />

				{/* Revenue */}
				<ResultContainer width={displayWidth}>
					<Type
						semanticfont={semanticFonts.bodySmall}
						colorSet={getColorSet(SemanticSetCores.BASE_SOFT)}
						letterSpacing={spacer1}
					>
						Revenue
					</Type>
					<AmountContainer>
						<Type semanticfont={semanticFonts.labelMedium}>
							{currencySymbol}
						</Type>
						<Type
							semanticfont={semanticFonts.headlineMedium}
							fontSize={fontSize}
						>
							<AnimateNumber
								value={calendar?.lifetimeRevenue ?? 0}
								decimals={2}
							/>
						</Type>
					</AmountContainer>
				</ResultContainer>

				<Divider />

				{/* Expenses */}
				<ResultContainer width={displayWidth}>
					<Type
						semanticfont={semanticFonts.bodySmall}
						colorSet={getColorSet(SemanticSetCores.BASE_SOFT)}
						letterSpacing={spacer1}
					>
						Expenses
					</Type>
					<AmountContainer>
						<Type semanticfont={semanticFonts.labelMedium}>
							{currencySymbol}
						</Type>
						<Type
							semanticfont={semanticFonts.headlineMedium}
							fontSize={fontSize}
						>
							<AnimateNumber
								value={calendar?.lifetimeExpenses ?? 0}
								decimals={2}
							/>
						</Type>
					</AmountContainer>
				</ResultContainer>

				<Divider />

				{/* Profit */}
				<ResultContainer width={displayWidth}>
					<Type
						semanticfont={semanticFonts.bodySmall}
						colorSet={getColorSet(SemanticSetCores.BASE_SOFT)}
						letterSpacing={spacer1}
					>
						Profit
					</Type>
					<AmountContainer>
						<Type semanticfont={semanticFonts.labelMedium}>
							{currencySymbol}
						</Type>
						<Type
							semanticfont={semanticFonts.headlineMedium}
							fontSize={fontSize}
						>
							<AnimateNumber
								value={calendar?.lifetimeProfit ?? 0}
								decimals={2}
							/>
						</Type>
					</AmountContainer>
				</ResultContainer>
			</ResultsContainer>
		</Container>
	);
};
