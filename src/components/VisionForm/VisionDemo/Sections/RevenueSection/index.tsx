import SectionTitle from "@/components/form/SectionTitle";
import { VisionFormValues } from "@/types/VisionForm";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { FieldArray } from "react-final-form-arrays";
import CostToProduceField from "../../fields/Revenue/CostToProduceField";

import ProfitAmountField from "../../fields/Revenue/ProfitAmountField";
import ProfitMarginField from "../../fields/Revenue/ProfitMarginField";
import RetailPriceField from "../../fields/Revenue/RetailPriceField";
import { FieldsContainer, StyledDoubleFieldContainer } from "../styles";

const RevenueSection = () => {
	return (
		<FieldsContainer>
			<SectionTitle tooltip="Source of all your companies revenue from products">
				Goods & Services
			</SectionTitle>{" "}
			{/* In-person lease locations */}
			<FieldArray name="products">
				{({ fields }) => (
					<div>
						{fields.map((revenuePath) => {
							return (
								<FieldsContainer key={revenuePath} noMargin>
									<StyledDoubleFieldContainer>
										<CostToProduceField
											revenuePath={revenuePath as FieldPath<VisionFormValues>}
										/>
										<ProfitMarginField
											revenuePath={revenuePath as FieldPath<VisionFormValues>}
										/>
									</StyledDoubleFieldContainer>
									<StyledDoubleFieldContainer>
										<RetailPriceField
											revenuePath={revenuePath as FieldPath<VisionFormValues>}
										/>
										<ProfitAmountField
											revenuePath={revenuePath as FieldPath<VisionFormValues>}
										/>
									</StyledDoubleFieldContainer>
								</FieldsContainer>
							);
						})}
					</div>
				)}
			</FieldArray>
		</FieldsContainer>
	);
};

export default RevenueSection;
