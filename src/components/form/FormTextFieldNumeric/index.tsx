import {
	hasVisibleErrors,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import TextFieldNumeric, {
	TextFieldNumericProps,
} from "@/designSystem/TextField/TextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { AllFormValues } from "@/types/VisionForm";
import { getFieldName } from "./FormTextFieldInputMode";

type FormTextFieldSelectorProps = TextFieldNumericProps & {
	/**
	 * Name of field
	 */
	fieldName?: keyof AllFormValues;
};

const FormTextFieldNumeric = ({
	label,
	placeholder,
	fieldName,
	disabled,
	prefix,
	suffix,
	defaultValue,
	size = Sizes.LARGE,
	allowNegativeValue,
	onChange,
}: FormTextFieldSelectorProps) => {
	const fieldNameFull = getFieldName({ fieldName });

	// If a field has an input mode (other than DEFAULT) then they have a low, average, and high value as well
	const field = useVisionFormField(fieldNameFull);
	const input = field.input;

	return (
		<TextFieldNumeric
			id={input.name}
			name={input.name}
			label={label}
			placeholder={placeholder}
			defaultValue={defaultValue}
			prefix={prefix}
			suffix={suffix}
			error={hasVisibleErrors(field.meta)}
			errorText={hasVisibleErrors(field.meta) && field.meta.error}
			disabled={disabled}
			onChange={onChange}
			size={size}
			allowNegativeValue={allowNegativeValue}
			{...field}
		/>
	);
};

export default FormTextFieldNumeric;
