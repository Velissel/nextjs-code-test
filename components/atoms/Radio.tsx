import {Tab} from '@headlessui/react';

type RadioProps = {
	label: string;
};
// eslint-disable-next-line react/function-component-definition
export default function Radio(props: RadioProps): React.ReactNode {
	const {label} = props;

	return <Tab as="button" className="p-4 px-8 rounded-full bg-slate-200 data-[hover]:bg-slate-300 data-[selected]:bg-black data-[selected]:text-white">{label}</Tab>;
}