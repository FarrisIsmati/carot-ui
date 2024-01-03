import SectionTitle from "@/components/form/SectionTitle";
import CountryOriginField from "../../fields/Overview/CountryOriginField";
import CurrencyField from "../../fields/Overview/CurrencyField";
import IndustryField from "../../fields/Overview/IndustryField";
import { FieldsContainer, StyledDoubleFieldContainer } from "../styles";

const OverviewSection = () => {
	return (
		<FieldsContainer noMargin>
			<SectionTitle tooltip="General information about your company">
				What's your business type?
			</SectionTitle>
			<IndustryField />
			<StyledDoubleFieldContainer>
				<CountryOriginField />
				<CurrencyField />
			</StyledDoubleFieldContainer>
		</FieldsContainer>
	);
};

export default OverviewSection;
