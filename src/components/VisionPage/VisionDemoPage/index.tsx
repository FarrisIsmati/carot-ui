"use client";
import VisionDemo from "@/components/VisionForm/VisionDemo";
import Type from "@/designSystem/Type";
import { createStore } from "@/redux/store";
import { StyledPageContainer } from "@/styles/common";
import { semanticFonts } from "@/styles/fonts";
import { Provider } from "react-redux";
import { StyledHeaderSection, StyledTextBody } from "./styles";

const VisionDemoPage = () => {
	const store = createStore();

	return (
		<Provider store={store}>
			<StyledPageContainer>
				{/* Header */}
				<StyledHeaderSection>
					<div>
						<Type semanticfont={semanticFonts.headlineLarge}>
							Business projection calculator demo
						</Type>
						<StyledTextBody>
							<Type semanticfont={semanticFonts.headlineSmall}>
								Discover how much you need to start your business with our free
								financial planning tool. Easy to use and completely free.
							</Type>
						</StyledTextBody>
					</div>
				</StyledHeaderSection>

				{/* Vision Demo Form */}
				<VisionDemo />
			</StyledPageContainer>
		</Provider>
	);
};

export default VisionDemoPage;
