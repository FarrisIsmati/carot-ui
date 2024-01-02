import { useGetDropdownDefaultValue } from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { trafficCurveDropdownValues } from "../../../values/fields/dropdownValues";

const FootTrafficCurve = () => {
	return (
		<FormDropdown
			label="Foot traffic curve"
			placeholder="Select"
			fieldName="trafficCurve"
			dataset={trafficCurveDropdownValues}
			defaultValue={useGetDropdownDefaultValue(
				trafficCurveDropdownValues,
				"trafficCurve"
			)}
			tooltip="The rate of growth of foot traffic (customers) over the entire projection duration"
		/>
	);
};

export default FootTrafficCurve;
