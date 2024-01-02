import SectionTitle from "@/components/form/SectionTitle";
import InvestorForm from "../../forms/CapitalForm/InvestorForm";
import { FieldsContainer } from "../styles";
import InvestorSection from "./InvestorSection";

const CapitalSection = () => {
	return (
		<FieldsContainer>
			<SectionTitle tooltip="The starting money you will operate your business with">
				How much money will you start your business with?
			</SectionTitle>

			<InvestorForm>
				<InvestorSection />
			</InvestorForm>
		</FieldsContainer>
	);
};

export default CapitalSection;
