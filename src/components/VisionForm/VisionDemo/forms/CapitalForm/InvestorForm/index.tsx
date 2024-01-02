import { useCurrencySymbol } from "@/components/VisionForm/utils/currency";
import ButtonPrimary from "@/designSystem/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import { InvestorSection } from "@/types/VisionForm/capitalSection/InvestorSection";
import investorFormValidator from "@/validators/Capital/Investor/InvestorFormValidator";
import { FormApi } from "final-form";
import _ from "lodash";
import { Form, FormSpy, useForm, useFormState } from "react-final-form";
import styled from "styled-components";
import { CapitalFormContextProvider } from "../CapitalFormContext";

export const StyledAddButton = styled(ButtonPrimary)`
	margin-top: ${spacer8};
`;

const handleEditInvestor = ({
	values,
	visionForm,
}: {
	values: InvestorSection;
	visionForm: FormApi<VisionFormValues, Partial<VisionFormValues>>;
}) => {
	// Get form values
	const formValues = visionForm.getState().values;
	// Get first vision form investor
	const investorsValue = formValues.investors;
	// Clone object
	const investorsCloned = _.cloneDeep(investorsValue);
	// Update
	investorsCloned[0] = values;
	// Update vision form state
	visionForm.change("investors", investorsCloned);
};

const InvestorForm = ({
	children,
}: {
	/**
	 * Children components
	 */
	children?: React.ReactNode;
}) => {
	const visionForm = useForm<VisionFormValues>();
	const currencySymbol = useCurrencySymbol();

	// Get initial values from main form page
	const formState = useFormState<VisionFormValues>();
	const initialFormValues = formState.values.investors[0];

	return (
		<CapitalFormContextProvider value={{ currencySymbol }}>
			<Form<InvestorSection>
				initialValues={initialFormValues}
				validate={(values) => investorFormValidator(values)}
				onSubmit={() => {}}
				render={() => (
					<div>
						<FormSpy
							onChange={({ values }: { values: InvestorSection }) => {
								handleEditInvestor({ values, visionForm });
							}}
						/>
						{children}
					</div>
				)}
			/>
		</CapitalFormContextProvider>
	);
};

export default InvestorForm;
