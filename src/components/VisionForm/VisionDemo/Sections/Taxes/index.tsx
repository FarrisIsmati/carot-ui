import SectionTitle from "@/components/form/SectionTitle";
import TaxRateGeneric from "../../fields/Taxes/TaxRateGeneric";
import { FieldsContainer } from "../styles";

const Taxes = () => {
	return (
		<FieldsContainer>
			<SectionTitle tooltip="Taxes to be paid on profits">Taxes</SectionTitle>{" "}
			<TaxRateGeneric />
		</FieldsContainer>
	);
};

export default Taxes;
