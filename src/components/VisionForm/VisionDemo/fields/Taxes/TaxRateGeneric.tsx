import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { InputModeEnum } from "@/types/VisionForm/common/values";

const TaxRateGeneric = () => {
	const inputMode = InputModeEnum.Average;
	const field = useVisionFormField(`taxRateGeneric${inputMode}`);

	return (
		<FormTextFieldNumericInputMode
			label={"Tax Rate"}
			fieldNameBase={"taxRateGeneric"}
			placeholder={"Tax rate"}
			field={field}
			allowNegativeValue={false}
			suffix={"%"}
			tooltip="The percentage of taxes you will pay on all profits"
			onChange={(value) => {
				// Value cannot be greater than 100
				if (value && value > 100) {
					field.input.onChange(100);
				}
			}}
		/>
	);
};

export default TaxRateGeneric;
