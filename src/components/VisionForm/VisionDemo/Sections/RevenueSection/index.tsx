import SectionTitle from "@/components/form/SectionTitle";
import CostToProduceField from "../../fields/Revenue/CostToProduceField";
import CustomerConversionRateField from "../../fields/Revenue/CustomerConversionRateField";
import LocationIdField from "../../fields/Revenue/LocationIdField";
import ProductNameField from "../../fields/Revenue/ProductNameField";
import ProfitAmountField from "../../fields/Revenue/ProfitAmountField";
import ProfitMarginField from "../../fields/Revenue/ProfitMarginField";
import RetailPriceField from "../../fields/Revenue/RetailPriceField";
import RevenueForm from "../../forms/RevenueForm";
import { FieldsContainer, StyledDoubleFieldContainer } from "../styles";

const RevenueSection = () => {
	return (
		<FieldsContainer>
			<SectionTitle tooltip="Source of all your companies revenue from products">
				Goods & Services
			</SectionTitle>{" "}
			<RevenueForm>
				<FieldsContainer noMargin>
					<LocationIdField />
					<ProductNameField />
					<CustomerConversionRateField />
					<StyledDoubleFieldContainer>
						<CostToProduceField />
						<ProfitMarginField />
					</StyledDoubleFieldContainer>
					<StyledDoubleFieldContainer>
						<RetailPriceField />
						<ProfitAmountField />
					</StyledDoubleFieldContainer>
				</FieldsContainer>
			</RevenueForm>
		</FieldsContainer>
	);
};

export default RevenueSection;
