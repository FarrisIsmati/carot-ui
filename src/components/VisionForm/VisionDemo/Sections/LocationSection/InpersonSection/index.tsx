import Type from "@/designSystem/Type";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import LeaseForm from "../../../forms/LocationForm/InpersonForm/LeaseForm";
import { FieldsContainer } from "../../styles";
import LeaseSection from "./LeaseSection";

// When expanding this can be either leasing/owning or retail/office, right now only leasing and retail
const InpersonSection = () => {
	return (
		<FieldsContainer noMargin>
			<Type
				semanticfont={semanticFonts.labelSmall}
				color={colorBaseMap[ColorBaseCore.NEUTRAL_2]}
			>
				Retail lease
			</Type>
			<LeaseForm>
				<LeaseSection />
			</LeaseForm>
		</FieldsContainer>
	);
};

export default InpersonSection;
