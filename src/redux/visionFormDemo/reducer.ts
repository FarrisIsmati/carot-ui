import { VisionFormValues } from "@/types/VisionForm";
import { SUBMIT_VISION_FORM_DEMO } from "./constants";
import { initialVisionFormDemoReduxState } from "./initialState";

const visionFormDemoReducer = (
	state: VisionFormValues = initialVisionFormDemoReduxState,
	action: any
) => {
	switch (action.type) {
		case SUBMIT_VISION_FORM_DEMO: {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};

export default visionFormDemoReducer;
