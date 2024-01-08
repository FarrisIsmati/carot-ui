import { withCustomMessage } from "../commonValidators";

// Missing location
export const hasMissingLocation = withCustomMessage<any>(
	(locationLengths: number[]) => locationLengths.every((num) => num > 0),
	"You must add at least one location"
);
