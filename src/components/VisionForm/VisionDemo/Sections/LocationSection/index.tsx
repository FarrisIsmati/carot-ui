import SectionTitle from "@/components/form/SectionTitle";
import DropdownSelect from "@/designSystem/Dropdown/DropdownSelect";
import Type from "@/designSystem/Type";
import { semanticFonts } from "@/styles/fonts";
import { VisionFormValues } from "@/types/VisionForm";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { LocationType } from "@/types/VisionForm/locationSection";
import { FormApi } from "final-form";
import { useState } from "react";
import { useForm, useFormState } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { locationTypeDropdownValues } from "../../values/fields/dropdownValues";
import getInitialLeaseFormValues from "../../values/forms/Location/getInitialLeaseFormValues";
import { FieldsContainer } from "../styles";
import LeaseSection from "./LeaseSection";

/**
 * Add a blank lease to the location section passing in an unique id
 * @param form
 * @param formValues
 */
const addLeaseToForm = (
	form: FormApi<VisionFormValues, Partial<VisionFormValues>>,
	formValues: VisionFormValues
) => {
	form.change("leases", [
		...formValues.leases,
		{ ...getInitialLeaseFormValues("lease1") }, // Only adding a fixed id here so revenue section can reference it
	]);
};

const LocationSection = () => {
	const form = useForm<VisionFormValues>();
	const formState = useFormState<VisionFormValues>();
	const formValues = formState.values;

	// Disable dropdrown select if leases length > 0 (Demo only)
	const isDropdownDisabled = formValues.leases.length > 0;

	// Has touched dropdown (for displaying error)
	const [touchedDropdown, setTouchedDropdown] = useState<boolean>(false);

	return (
		<FieldsContainer>
			<SectionTitle tooltip="The location your business is operating from (either inperson or online)">
				Where will you run your business?
			</SectionTitle>{" "}
			<DropdownSelect
				id={"locationType"}
				name={"locationType"}
				placeholder={
					isDropdownDisabled ? "Remove to change option" : "Add location"
				}
				onClick={() => {
					if (!touchedDropdown) {
						setTouchedDropdown(true);
					}
				}}
				dataset={locationTypeDropdownValues}
				onselect={(value) => {
					// Only handling leases now
					if (value.id === LocationType.INPERSON) {
						addLeaseToForm(form, formValues);
					}
				}}
				disabled={isDropdownDisabled}
			/>
			{/* If no locations show error */}
			{(touchedDropdown || formState.submitFailed) &&
				formState?.errors?.locations && (
					<Type error semanticfont={semanticFonts.bodySmall}>
						{formState.errors.locations}
					</Type>
				)}
			{/* In-person lease locations */}
			<FieldArray name="leases">
				{({ fields }) => (
					<div>
						{fields.map((leasePath) => {
							return (
								<LeaseSection
									leasePath={leasePath as FieldPath<VisionFormValues>}
									key={leasePath}
								/>
							);
						})}
					</div>
				)}
			</FieldArray>
		</FieldsContainer>
	);
};

export default LocationSection;
