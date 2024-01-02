// This section is a subform
// The values do not impact the main form's validations only the sub form
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";
import InvestorStartingCash from "../../../fields/Capital/Investor/InvestorStartingCash";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

const InvestorSection = () => {
	return (
		<StyledContainer>
			<InvestorStartingCash />
		</StyledContainer>
	);
};

export default InvestorSection;
