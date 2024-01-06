import { useLeaseField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumericInputMode, {
	getFieldNameInputMode,
} from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { VisionFormValues } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { InpersonLeaseLocationSection } from "@/types/VisionForm/locationSection";

interface FootTrafficTurnoverTimeProps {
	leasePath: FieldPath<VisionFormValues>;
}

const FootTrafficTurnoverTime = ({
	leasePath,
}: FootTrafficTurnoverTimeProps) => {
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "trafficTurnoverTime",
		inputMode,
	}) as keyof InpersonLeaseLocationSection;
	const field = useLeaseField<"trafficTurnoverTimeAverage">(
		leasePath,
		fieldName
	);

	return (
		<FormTextFieldNumericInputMode
			label={`Foot traffic turnover time (m)`}
			fieldNameBase={"trafficTurnoverTime"}
			field={field}
			placeholder={"Length in minutes"}
			allowNegativeValue={false}
			width={"50%"}
			tooltip="The average amount of time any one person customer will be in your store"
		/>
	);
};

export default FootTrafficTurnoverTime;
