import SectionTitle from "@/components/form/SectionTitle";
import DropdownSelect from "@/designSystem/Dropdown/DropdownSelect";
import { LocationType } from "@/types/VisionForm/locationSection";
import { useState } from "react";
import { locationTypeDropdownValues } from "../../values/fields/dropdownValues";
import { FieldsContainer } from "../styles";
import InpersonSection from "./InpersonSection";

const LocationSection = () => {
	const [locationType, setLocationType] = useState<LocationType | null>(null);

	return (
		<FieldsContainer>
			<SectionTitle tooltip="The location your business is operating from (either inperson or online)">
				Where will you run your business?
			</SectionTitle>{" "}
			<DropdownSelect
				id={"locationType"}
				name={"locationType"}
				placeholder={"Add location"}
				dataset={locationTypeDropdownValues}
				onselect={(value) => setLocationType(value.id)}
			/>
			{locationType === LocationType.INPERSON && <InpersonSection />}
			{locationType === LocationType.ONLINE && <p>ONLINE</p>}
		</FieldsContainer>
	);
};

export default LocationSection;
