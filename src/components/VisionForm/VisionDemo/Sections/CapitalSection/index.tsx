import SectionTitle from "@/components/form/SectionTitle";
import { VisionFormValues } from "@/types/VisionForm";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { FieldArray } from "react-final-form-arrays";
import { FieldsContainer } from "../styles";
import InvestorSection from "./InvestorSection";

const CapitalSection = () => {
	return (
		<FieldsContainer>
			<SectionTitle tooltip="The starting money you will operate your business with">
				How much money will you start your business with?
			</SectionTitle>

			{/* In-person lease locations */}
			<FieldArray name="investors">
				{({ fields }) => (
					<div>
						{fields.map((investorPath) => {
							return (
								<InvestorSection
									investorPath={investorPath as FieldPath<VisionFormValues>}
									key={investorPath}
								/>
							);
						})}
					</div>
				)}
			</FieldArray>
		</FieldsContainer>
	);
};

export default CapitalSection;
