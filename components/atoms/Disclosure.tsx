import type {FAQBlock} from '@app/data/faq-data';
import {Disclosure as HUIDisclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';

type DisclosureProps = {
	block: FAQBlock;
};
// eslint-disable-next-line react/function-component-definition
export default function Disclosure(props: DisclosureProps): React.ReactNode {
	const {block} = props;

	return (
		<div className="border-b-2">
			<HUIDisclosure>
				<DisclosureButton className="group flex w-full items-center justify-between py-4">
					<span className="text-left font-bold">{block.question}</span>
					<ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180"/>
				</DisclosureButton>
				<DisclosurePanel className="pb-4">{block.answer}</DisclosurePanel>
			</HUIDisclosure>
		</div>
	);
}