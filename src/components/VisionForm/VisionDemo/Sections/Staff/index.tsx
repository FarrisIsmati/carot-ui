import SectionTitle from "@/components/form/SectionTitle";
import DropdownSelect from "@/designSystem/Dropdown/DropdownSelect";
import { staffTypeDropdownValues } from "../../values/fields/dropdownValues";
import { FieldsContainer } from "../styles";

const Staff = () => {
	return (
		<FieldsContainer>
			<SectionTitle tooltip="All employees working for you company">
				Staff
			</SectionTitle>{" "}
			<DropdownSelect
				id={"staffType"}
				name={"staffType"}
				placeholder={"Add staff"}
				dataset={staffTypeDropdownValues}
				islocked
			/>
		</FieldsContainer>
	);
};

export default Staff;
