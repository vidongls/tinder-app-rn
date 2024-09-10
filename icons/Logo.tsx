import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export function Logo() {
	return (
		<Svg width="33" height="40" viewBox="0 0 33 40" fill="none">
			<Path
				d="M32.6231 22.7522C32.6231 31.7495 25.3293 39.0432 16.332 39.0432C7.33476 39.0432 0.0410156 31.7495 0.0410156 22.7522C0.0410156 16.8972 3.12974 12.5238 7.76666 9.6522C7.76666 9.6522 7.59871 15.5304 9.94999 15.6984C12.3013 15.8663 18.8513 10.156 17.3397 0.24707C30.1038 6.79707 32.6231 17.4875 32.6231 22.7522Z"
				fill="url(#paint0_linear)"
			/>
			<Defs>
				<LinearGradient
					id="paint0_linear"
					x1="29.0961"
					y1="8.30861"
					x2="0.0410155"
					y2="30.9817"
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#EE805F" />
					<Stop offset="1" stopColor="#EA4080" />
				</LinearGradient>
			</Defs>
		</Svg>
	);
}
