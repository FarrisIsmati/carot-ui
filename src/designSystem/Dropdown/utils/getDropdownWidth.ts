import { Sizes, spacer156, spacer322, spacer486 } from "@/styles/sizes";

const getDropdownWidth = (size: Sizes) => {
	switch (size) {
		case Sizes.LARGE:
			return spacer486;
		case Sizes.MEDIUM:
			return spacer322;
		case Sizes.SMALL:
			return spacer156;
		default:
			return spacer486;
	}
};

export default getDropdownWidth;
