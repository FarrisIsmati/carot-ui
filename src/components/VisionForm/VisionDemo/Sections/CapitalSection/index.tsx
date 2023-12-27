import SectionTitle from "@/components/form/SectionTitle";
import DropdownSelect from "@/designSystem/Dropdown/DropdownSelect";
import { CapitalType } from "@/types/VisionForm/capitalSection";
import { useState } from "react";
import InvestorForm from "../../forms/CapitalForm/InvestorForm";
import LoanForm from "../../forms/CapitalForm/LoanForm";
import { capitalTypeDropdownValues } from "../../values/fields/dropdownValues";
import { FieldsContainer } from "../styles";
import InvestorSection from "./InvestorSection";

const CapitalSection = () => {
	const [capitalType, setCapitalType] = useState<CapitalType | null>(null);

	return (
		<FieldsContainer>
			<SectionTitle tooltip="The starting money you will operate your business with">
				How much money will you start your business with?
			</SectionTitle>
			<DropdownSelect
				id={"capitalType"}
				name={"capitalType"}
				placeholder={"Add Capital"}
				dataset={capitalTypeDropdownValues}
				onselect={(value) => setCapitalType(value.id)}
			/>

			{/* Capital form */}
			{capitalType === CapitalType.INVESTOR && (
				<InvestorForm>
					<InvestorSection />
				</InvestorForm>
			)}
			{capitalType === CapitalType.LOAN && (
				<LoanForm>
					<p>loan locked</p>
				</LoanForm>
			)}
		</FieldsContainer>
	);
};

export default CapitalSection;
