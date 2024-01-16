import { hasVisibleErrors } from "@/components/VisionForm/utils/form";
import TextFieldNumeric, {
	TextFieldNumericProps,
} from "@/designSystem/TextField/TextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { AllFormValues, AllFormValuesInputModeLess } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useHasInputModeError } from "@/validators/utils";
import { FieldRenderProps } from "react-final-form";

export const getFieldName = ({
	fieldName,
	fieldNameBase,
	inputMode,
}: {
	fieldName?: keyof AllFormValues;
	fieldNameBase?: keyof AllFormValuesInputModeLess;
	inputMode?: InputModeEnum;
}): keyof AllFormValues => {
	if (fieldNameBase && inputMode) {
		return `${fieldNameBase}${inputMode}`;
	}

	if (fieldName) {
		return fieldName;
	}

	throw new Error(
		"Need to provide either a fieldName, or a fieldNameBase and inputMode"
	);
};

export const getFieldNameInputMode = ({
	fieldNameBase,
	inputMode,
}: {
	fieldNameBase: keyof AllFormValuesInputModeLess;
	inputMode: InputModeEnum;
}) => {
	return `${fieldNameBase}${inputMode}`;
};

type FormTextFieldSelectorProps = TextFieldNumericProps & {
	/**
	 * Base name of fieldname without input mode or a fieldname
	 */
	fieldNameBase: keyof AllFormValuesInputModeLess;
	/**
	 * Field
	 */
	field: FieldRenderProps<number | undefined, HTMLElement, number | undefined>;
};

const FormTextFieldNumericInputMode = ({
	label,
	placeholder,
	fieldNameBase,
	disabled,
	prefix,
	suffix,
	defaultValue,
	size = Sizes.LARGE,
	allowNegativeValue,
	tooltip,
	width,
	field,
	onChange,
}: FormTextFieldSelectorProps) => {
	const input = field.input;
	const inputModeError = useHasInputModeError(fieldNameBase);

	return (
		<TextFieldNumeric
			id={input.name}
			name={input.name}
			label={label}
			placeholder={placeholder}
			defaultValue={defaultValue}
			prefix={prefix}
			suffix={suffix}
			error={hasVisibleErrors(field.meta) || !!inputModeError}
			errorText={
				(hasVisibleErrors(field.meta) && field.meta.error) || inputModeError
			}
			disabled={disabled}
			onChange={onChange}
			size={size}
			allowNegativeValue={allowNegativeValue}
			tooltip={tooltip}
			width={width}
			{...field}
		/>
	);
};

export default FormTextFieldNumericInputMode;
