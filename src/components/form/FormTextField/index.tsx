import {
	hasVisibleErrors,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import TextField, { FormInputProps } from "@/designSystem/TextField";
import { Sizes } from "@/styles/sizes";
import { AllFormValues } from "@/types/VisionForm";

type FormTextFieldSelectorProps = FormInputProps & {
	/**
	 * Name of field
	 */
	fieldName: keyof AllFormValues;
};

const FormTextField = ({
	label,
	placeholder,
	fieldName,
	disabled,
	tooltip,
	size = Sizes.LARGE,
}: FormTextFieldSelectorProps) => {
	const field = useVisionFormField(fieldName);
	const input = field.input;

	return (
		<TextField
			id={input.name}
			name={input.name}
			label={label}
			placeholder={placeholder}
			error={hasVisibleErrors(field.meta)}
			errorText={hasVisibleErrors(field.meta) && field.meta.error}
			disabled={disabled}
			size={size}
			tooltip={tooltip}
			{...field}
		/>
	);
};

export default FormTextField;
