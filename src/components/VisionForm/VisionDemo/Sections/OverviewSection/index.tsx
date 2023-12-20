import SectionTitle from "@/components/form/SectionTitle";
import CompanyNameField from "../../fields/Overview/CompanyNameField";
import CountryOriginField from "../../fields/Overview/CountryOriginField";
import CurrencyField from "../../fields/Overview/CurrencyField";
import EndDate from "../../fields/Overview/EndDate";
import IndustryField from "../../fields/Overview/IndustryField";
import StartDate from "../../fields/Overview/StartDate";
import { FieldsContainer, StyledDoubleDropdownContainer } from "../styles";

const OverviewSection = () => {
	return (
		<FieldsContainer noMargin>
			<SectionTitle tooltip="General information about your company">
				Business Type
			</SectionTitle>
			<CompanyNameField />
			<IndustryField />
			<StyledDoubleDropdownContainer>
				<CountryOriginField />
				<CurrencyField />
			</StyledDoubleDropdownContainer>
			<StyledDoubleDropdownContainer>
				<StartDate />
				<EndDate />
			</StyledDoubleDropdownContainer>
		</FieldsContainer>
	);
};

export default OverviewSection;
