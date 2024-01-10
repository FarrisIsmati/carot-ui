"use client";
import { Poppins } from "next/font/google";
import { css } from "styled-components";

export const poppins = Poppins({
	style: "normal",
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-poppins",
	subsets: ["latin"],
});

import {
	spacer10,
	spacer12,
	spacer120,
	spacer140,
	spacer16,
	spacer20,
	spacer24,
	spacer40,
	spacer48,
	spacer64,
	spacer80,
} from "./sizes";

const fontFamilyA = css`
	font-family: "basic-sans", sans-serif !important;
	font-style: normal !important;
`;

const fontFamilyB = css`
	font-family: "neue-haas-grotesk-display", sans-serif !important;
	font-style: normal !important;
`;

const fontFamilyC = css`
	font-family: "neue-haas-grotesk-text", sans-serif !important;
	font-style: normal !important;
`;

const fontFamilyD = css`
	font-family: "filson-pro", sans-serif !important;
	font-style: normal !important;
`;

export const semanticFonts = {
	logo: css`
		${fontFamilyD}
		font-weight: 900 !important;
		font-size: ${spacer40} !important;
		line-height: ${spacer48} !important;
		letter-spacing: 0.5px;
	`,
	displayLarge: css`
		${fontFamilyB}
		font-weight: 600 !important;
		font-size: ${spacer140} !important;
		line-height: ${spacer120} !important;
	`,
	displayMedium: css`
		${fontFamilyB}
		font-weight: 600 !important;
		font-size: ${spacer80} !important;
	`,
	displaySmall: css`
		${fontFamilyA}
		font-weight: 600 !important;
		font-size: ${spacer64} !important;
	`,
	headlineLarge: css`
		${fontFamilyB}
		font-weight: 600 !important;
		font-size: ${spacer40} !important;
	`,
	headlineMedium: css`
		${fontFamilyC}
		font-weight: 400 !important;
		font-size: ${spacer40} !important;
	`,
	headlineSmall: css`
		${fontFamilyC}
		font-weight: 400 !important;
		font-size: ${spacer24} !important;
	`,
	labelExtraLarge: css`
		${fontFamilyC}
		font-weight: 700 !important;
		font-size: ${spacer20} !important;
	`,
	labelLarge: css`
		${fontFamilyC}
		font-weight: 700 !important;
		font-size: ${spacer20} !important;
	`,
	labelMedium: css`
		${fontFamilyC}
		font-weight: 500 !important;
		font-size: ${spacer16} !important;
		line-height: 125% !important;
	`,
	labelSmall: css`
		${fontFamilyC}
		font-weight: 400 !important;
		font-size: ${spacer12} !important;
		line-height: 125% !important;
	`,
	labelExtraSmall: css`
		${fontFamilyC}
		font-weight: 500 !important;
		font-size: ${spacer10} !important;
	`,
	bodyLarge: css`
		${fontFamilyC}
		font-weight: 400 !important;
		font-size: ${spacer20} !important;
		line-height: 135% !important;
	`,
	bodyMedium: css`
		${fontFamilyC}
		font-weight: 400 !important;
		font-size: ${spacer16} !important;
		line-height: 125% !important;
	`,
	bodySmall: css`
		${fontFamilyA}
		font-weight: 400 !important;
		font-size: ${spacer12} !important;
		line-height: 135% !important;
	`,
	bodyExtraSmall: css`
		${fontFamilyA}
		font-weight: 400 !important;
		font-size: ${spacer12} !important;
	`,
};
