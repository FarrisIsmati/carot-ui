import { hasVisibleErrors } from "@/components/VisionForm/utils/form";
import TextField, { FormInputProps } from "@/designSystem/TextField";
import { Sizes } from "@/styles/sizes";
import { FieldRenderProps } from "react-final-form";

type FormTextFieldSelectorProps = FormInputProps & {
	/**
	 * Field
	 */
	field: FieldRenderProps<string, HTMLElement, string>;
};

const FormTextField = ({
	label,
	placeholder,
	disabled,
	tooltip,
	field,
	size = Sizes.LARGE,
}: FormTextFieldSelectorProps) => {
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
