import React from "react";
const TabBarIcons = {
	active: {
		Feed: (
			<svg
				width="20"
				height="16"
				viewBox="0 0 20 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0 0V2.28571H19.4286V0H0ZM0 6.85714H19.4286V4.57143H0V6.85714ZM0 16H19.4286V13.7143H0V16ZM0 11.4286H19.4286V9.14286H0V11.4286Z"
					fill="#14C582"
				/>
			</svg>
		),
		DailyExperience: (
			<svg
				width="18"
				height="20"
				viewBox="0 0 18 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M4 9H9V14H4V9ZM16 18H2V7H16V18ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0 2.9 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2Z"
					fill="#14C582"
				/>
			</svg>
		),
		Home: (
			<svg
				width="26"
				height="22"
				viewBox="0 0 26 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M10.2667 22V14.2353H15.4V22H21.8167V11.6471H25.6667L12.8333 0L0 11.6471H3.85V22H10.2667Z"
					fill="#14C582"
				/>
			</svg>
		),
		MyImpact: (
			<svg
				width="18"
				height="20"
				viewBox="0 0 18 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0 20V6H4V20H0ZM7 20V0H11V20H7ZM14 20V12H18V20H14Z"
					fill="#14C582"
				/>
			</svg>
		),
		MySpace: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15.9 15.39C15.64 14.59 14.89 14 14 14H13V11C13 10.7348 12.8946 10.4804 12.7071 10.2929C12.5196 10.1054 12.2652 10 12 10H6V8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V5H11C11.5304 5 12.0391 4.78929 12.4142 4.41421C12.7893 4.03914 13 3.53043 13 3V2.59C15.93 3.77 18 6.64 18 10C18 12.08 17.2 13.97 15.9 15.39ZM9 17.93C5.05 17.44 2 14.08 2 10C2 9.38 2.08 8.78 2.21 8.21L7 13V14C7 14.5304 7.21071 15.0391 7.58579 15.4142C7.96086 15.7893 8.46957 16 9 16V17.93ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0Z"
					fill="#14C582"
				/>
			</svg>
		),
	},
	inactive: {
		Feed: (
			<svg
				width="32"
				height="28"
				viewBox="0 0 32 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d)">
					<path
						d="M6 6V8.28571H25.4286V6H6ZM6 12.8571H25.4286V10.5714H6V12.8571ZM6 22H25.4286V19.7143H6V22ZM6 17.4286H25.4286V15.1429H6V17.4286Z"
						fill="#FBF8FB"
					/>
					<path
						d="M6 5.5H5.5V6V8.28571V8.78571H6H25.4286H25.9286V8.28571V6V5.5H25.4286H6ZM5.5 12.8571V13.3571H6H25.4286H25.9286V12.8571V10.5714V10.0714H25.4286H6H5.5V10.5714V12.8571ZM5.5 22V22.5H6H25.4286H25.9286V22V19.7143V19.2143H25.4286H6H5.5V19.7143V22ZM5.5 17.4286V17.9286H6H25.4286H25.9286V17.4286V15.1429V14.6429H25.4286H6H5.5V15.1429V17.4286Z"
						stroke="#C4C4C4"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d"
						x="0"
						y="0"
						width="31.4286"
						height="28"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="2.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		),
		DailyExperience: (
			<svg
				width="30"
				height="32"
				viewBox="0 0 30 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d)">
					<path
						d="M10 15H15V20H10V15ZM22 24H8V13H22V24ZM22 8H21V6H19V8H11V6H9V8H8C6.89 8 6 8.9 6 10V24C6 24.5304 6.21071 25.0391 6.58579 25.4142C6.96086 25.7893 7.46957 26 8 26H22C22.5304 26 23.0391 25.7893 23.4142 25.4142C23.7893 25.0391 24 24.5304 24 24V10C24 9.46957 23.7893 8.96086 23.4142 8.58579C23.0391 8.21071 22.5304 8 22 8Z"
						fill="#FBF8FB"
					/>
					<path
						d="M10 14.5H9.5V15V20V20.5H10H15H15.5V20V15V14.5H15H10ZM8.5 6V7.5H8C6.61223 7.5 5.5 8.62549 5.5 10V24C5.5 24.663 5.76339 25.2989 6.23223 25.7678C6.70107 26.2366 7.33696 26.5 8 26.5H22C22.663 26.5 23.2989 26.2366 23.7678 25.7678C24.2366 25.2989 24.5 24.663 24.5 24V10C24.5 9.33696 24.2366 8.70107 23.7678 8.23223C23.2989 7.76339 22.663 7.5 22 7.5H21.5V6V5.5H21H19H18.5V6V7.5H11.5V6V5.5H11H9H8.5V6ZM8.5 23.5V13.5H21.5V23.5H8.5Z"
						stroke="#C4C4C4"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d"
						x="0"
						y="0"
						width="30"
						height="32"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="2.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		),
		Home: (
			<svg
				width="42"
				height="35"
				viewBox="0 0 42 35"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d)">
					<path
						d="M18.2667 29V21.2353H23.4V29H29.8167V18.6471H33.6667L20.8333 7L8 18.6471H11.85V29H18.2667Z"
						fill="#FBF8FB"
					/>
					<path
						d="M18.2667 29.5H18.7667V29V21.7353H22.9V29V29.5H23.4H29.8167H30.3167V29V19.1471H33.6667H34.9616L34.0027 18.2768L21.1694 6.62975L20.8333 6.32478L20.4973 6.62975L7.66397 18.2768L6.70509 19.1471H8H11.35V29V29.5H11.85H18.2667Z"
						stroke="#C4C4C4"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d"
						x="0.41017"
						y="0.649567"
						width="40.8463"
						height="34.3504"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="2.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		),
		MyImpact: (
			<svg
				width="30"
				height="32"
				viewBox="0 0 30 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d)">
					<path
						d="M6 26V12H10V26H6ZM13 26V6H17V26H13ZM20 26V18H24V26H20Z"
						fill="#FBF8FB"
					/>
					<path
						d="M5.5 26V26.5H6H10H10.5V26V12V11.5H10H6H5.5V12V26ZM12.5 26V26.5H13H17H17.5V26V6V5.5H17H13H12.5V6V26ZM19.5 26V26.5H20H24H24.5V26V18V17.5H24H20H19.5V18V26Z"
						stroke="#C4C4C4"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d"
						x="0"
						y="0"
						width="30"
						height="32"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="2.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		),
		MySpace: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d)">
					<path
						d="M21.9 21.39C21.64 20.59 20.89 20 20 20H19V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H12V14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13V11H17C17.5304 11 18.0391 10.7893 18.4142 10.4142C18.7893 10.0391 19 9.53043 19 9V8.59C21.93 9.77 24 12.64 24 16C24 18.08 23.2 19.97 21.9 21.39ZM15 23.93C11.05 23.44 8 20.08 8 16C8 15.38 8.08 14.78 8.21 14.21L13 19V20C13 20.5304 13.2107 21.0391 13.5858 21.4142C13.9609 21.7893 14.4696 22 15 22V23.93ZM16 6C14.6868 6 13.3864 6.25866 12.1732 6.7612C10.9599 7.26375 9.85752 8.00035 8.92893 8.92893C7.05357 10.8043 6 13.3478 6 16C6 18.6522 7.05357 21.1957 8.92893 23.0711C9.85752 23.9997 10.9599 24.7362 12.1732 25.2388C13.3864 25.7413 14.6868 26 16 26C18.6522 26 21.1957 24.9464 23.0711 23.0711C24.9464 21.1957 26 18.6522 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7362 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6Z"
						fill="#FBF8FB"
					/>
					<path
						d="M23.5 16C23.5 17.6902 22.9367 19.2465 21.9916 20.499C21.5376 19.8963 20.8178 19.5 20 19.5H19.5V17C19.5 16.6022 19.342 16.2206 19.0607 15.9393C18.7794 15.658 18.3978 15.5 18 15.5H12.5V14.5H14C14.3978 14.5 14.7794 14.342 15.0607 14.0607C15.342 13.7794 15.5 13.3978 15.5 13V11.5H17C17.663 11.5 18.2989 11.2366 18.7678 10.7678C19.1513 10.3842 19.3973 9.88892 19.4742 9.35839C21.8664 10.606 23.5 13.1099 23.5 16ZM13.2322 21.7678C13.5814 22.117 14.0233 22.3522 14.5 22.4495V23.3424C11.0736 22.6503 8.5 19.6287 8.5 16C8.5 15.7463 8.51439 15.4954 8.54098 15.2481L12.5 19.2071V20C12.5 20.663 12.7634 21.2989 13.2322 21.7678ZM16 5.5C14.6211 5.5 13.2557 5.77159 11.9818 6.29926C10.7079 6.82694 9.55039 7.60036 8.57538 8.57538C6.60625 10.5445 5.5 13.2152 5.5 16C5.5 18.7848 6.60625 21.4555 8.57538 23.4246C9.55039 24.3996 10.7079 25.1731 11.9818 25.7007C13.2557 26.2284 14.6211 26.5 16 26.5C18.7848 26.5 21.4555 25.3938 23.4246 23.4246C25.3938 21.4555 26.5 18.7848 26.5 16C26.5 14.6211 26.2284 13.2557 25.7007 11.9818C25.1731 10.7079 24.3996 9.55039 23.4246 8.57538C22.4496 7.60036 21.2921 6.82694 20.0182 6.29926C18.7443 5.77159 17.3789 5.5 16 5.5Z"
						stroke="#C4C4C4"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d"
						x="0"
						y="0"
						width="32"
						height="32"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="2.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		),
	},
};

export default TabBarIcons;
