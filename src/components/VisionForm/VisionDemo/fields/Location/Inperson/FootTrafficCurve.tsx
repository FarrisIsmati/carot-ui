import {
	useGetDropdownDefaultValue,
	useLeaseField,
} from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { VisionFormValues } from "@/types/VisionForm";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { trafficCurveDropdownValues } from "../../../values/fields/dropdownValues";

interface FootTrafficCurveProps {
	leasePath: FieldPath<VisionFormValues>;
}

const FootTrafficCurve = ({ leasePath }: FootTrafficCurveProps) => {
	const field = useLeaseField<"trafficTurnoverTimeAverage">(
		leasePath,
		"trafficCurve"
	);

	return (
		<FormDropdown
			label="Foot traffic curve"
			placeholder="Select"
			field={field}
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
