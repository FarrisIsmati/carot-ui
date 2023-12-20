import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";

const InvestorEquity = () => {
	return (
		<FormTextFieldNumeric
			label={"Equity"}
			fieldName={"investorEquityPercentage"}
			placeholder={"Investor equity"}
			suffix="%"
			disabled
			tooltip="The percentage of the company the investor owns"
		/>
	);
};

export default InvestorEquity;
