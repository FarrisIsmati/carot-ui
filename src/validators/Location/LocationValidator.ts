import { VisionFormValues } from "@/types/VisionForm";
import { hasMissingLocation } from "./LocationValidators";

const LocationValidator = (formValues: VisionFormValues) => {
	const locations = hasMissingLocation([formValues.leases.length]);
	return {
		locations,
	};
};

export default LocationValidator;
