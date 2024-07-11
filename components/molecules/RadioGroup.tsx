import {TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react';
import type {FAQPanel} from '@app/data/faq-data';
import {Disclosure, Radio} from '../atoms';

type RadioGroupProps = {
	panels: FAQPanel[];
};
// eslint-disable-next-line react/function-component-definition
export default function RadioGroup(props: RadioGroupProps): React.ReactNode {
	const {panels} = props;
	const options = panels.map(panel => panel.label);

	return (
		<TabGroup>
			<TabList className="flex justify-center space-x-4 mb-4">
				{options.map(option => <Radio key={option} label={option}/>)}
			</TabList>
			<TabPanels>
				{panels.map(panel => {
					return (
						<TabPanel key={panel.label}>
							<div className="flex flex-wrap">
								{panel.blocks.map((block, n) => {
									return (
										// eslint-disable-next-line react/no-array-index-key
										<div key={n} className="w-full px-2 lg:w-1/2">
											<Disclosure block={block}/>
										</div>
									);
							   })}
							</div>
						</TabPanel>
					);
			   })}
			</TabPanels>
		</TabGroup>
	);
}