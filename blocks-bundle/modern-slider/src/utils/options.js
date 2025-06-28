import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') }
];

export const purposeTypeOptions = [
	{ label: 'Test', value: 'test' },
	{ label: 'Final', value: 'final' }
]

export const tagOptions = [
    { label: "Paragraph (P)", value: "p" },
    { label: "Heading 1 (H1)", value: "h1" },
    { label: "Heading 2 (H2)", value: "h2" },
    { label: "Heading 3 (H3)", value: "h3" },
    { label: "Heading 4 (H4)", value: "h4" },
    { label: "Heading 5 (H5)", value: "h5" },
    { label: "Heading 6 (H6)", value: "h6" },
  ];
  
  export const resetValues = { top: 0, right: 0, bottom: 0, left: 0 };