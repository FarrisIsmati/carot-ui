import {
	hasVisibleErrors,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import Dropdown from "@/designSystem/Dropdown";
import { DropdownData } from "@/designSystem/Dropdown/types";
import { Sizes } from "@/styles/sizes";
import { AllFormValues } from "@/types/VisionForm";

export interface FormDropdownSelectorProps {
	label: string;
	placeholder: string;
	fieldName: keyof AllFormValues;
	dataset: DropdownData<any>[];
	dropdownSize?: Sizes;
	defaultValue?: DropdownData<any>;
	width?: string;
	onChange?: (selectedItemDataset: DropdownData<any>) => void;
	tooltip?: string;
}

const FormDropdown = ({
	label,
	placeholder,
	fieldName,
	dataset,
	onChange,
	dropdownSize = Sizes.LARGE,
	width,
	defaultValue,
	tooltip,
}: FormDropdownSelectorProps) => {
	const field = useVisionFormField(fieldName);
	const input = field.input;

	return (
		<Dropdown
			id={input.name}
			name={input.name}
			label={label}
			placeholder={placeholder}
			dataset={dataset}
			error={hasVisibleErrors(field.meta)}
			errorText={hasVisibleErrors(field.meta) && field.meta.error}
			dropdownSize={dropdownSize}
			defaultValue={defaultValue}
			width={width}
			onChange={onChange}
			tooltip={tooltip}
			{...field}
		/>
	);
};

export default FormDropdown;
