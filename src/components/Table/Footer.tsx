import {useState} from 'react';
import {Button, Table, Icon, Modal} from 'semantic-ui-react';

export const Footer = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpenModal = () => {
		setOpen(true);
		console.log(open);
	};

	const handleCloseModal = () => {
		setOpen(false);
		console.log(open);
	};

	return (<Table.Footer fullWidth>
		<Table.Row>
			<Table.HeaderCell singleLine textAlign='center' colSpan='5'>
			</Table.HeaderCell>
		</Table.Row>
	</Table.Footer>);
};
