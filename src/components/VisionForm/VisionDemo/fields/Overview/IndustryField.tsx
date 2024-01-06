import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { industryDropdownValues } from "../../values/fields/dropdownValues";

const IndustryField = () => {
	const industryField = useVisionFormField("overviewIndustry");

	return (
		<FormDropdown
			label="Industry"
			placeholder="Select"
			field={industryField}
			tooltip="The type of industry your business is in"
			dataset={industryDropdownValues}
		/>
	);
};

export default IndustryField;
