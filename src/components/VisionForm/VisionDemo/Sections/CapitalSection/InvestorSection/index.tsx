// This section is a subform
// The values do not impact the main form's validations only the sub form
import { spacer8 } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { styled } from "styled-components";
import InvestorStartingCash from "../../../fields/Capital/Investor/InvestorStartingCash";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

interface InvestorSectionProps {
	investorPath: FieldPath<VisionFormValues>;
}

const InvestorSection = ({ investorPath }: InvestorSectionProps) => {
	return (
		<StyledContainer>
			<InvestorStartingCash investorPath={investorPath} />
		</StyledContainer>
	);
};

export default InvestorSection;
