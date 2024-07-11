import type {FAQData} from '@app/data/faq-data';
import RadioGroup from '../molecules/RadioGroup';
import {Fragment} from 'react';

type FAQPanelProps = {
	data: FAQData;
};
// prefer to function declaration for hoisting, readability, stack tracking
// eslint-disable-next-line react/function-component-definition
export default function FAQPanel(props: FAQPanelProps): React.ReactNode {
	const {data} = props;

	return (
		<Fragment>
			<h3 className="font-bold text-center text-xl mb-4">{data.heading}</h3>
			<RadioGroup panels={data.panels}/>
		</Fragment>
	);
}