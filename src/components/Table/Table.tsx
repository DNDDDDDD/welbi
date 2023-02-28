import {type FC} from 'react';
import {Table, Label, type SemanticCOLORS, Dropdown} from 'semantic-ui-react';
import {levelOfCareColors} from '../../constants';
import {getDuration, getRandomItem} from '../../helpers';
import {Headers, type Resident, type TableProgram} from '../../types';
import {DasboardHeader} from './Header';

type Props = {
	rows: TableProgram[];
};

export const ProgramTable: FC<Props> = ({rows}) => {
	const renderAttendance = (attendance: Resident[]) => (<Dropdown text='See attendees'>
		<Dropdown.Menu>
			{
				attendance.map(({name: attendanceName, id}) => (<Dropdown.Item key={id}>
					<Label color='teal'>{attendanceName}</Label>
				</Dropdown.Item>))
			}
		</Dropdown.Menu>
	</Dropdown>);

	return (<Table singleLine>
		<DasboardHeader columns={Object.values(Headers)}/>
		<Table.Body>
			{
				rows.map(({name = '', location = '', end, start, levelOfCare = [], attendance = []}, index) => (<Table.Row key={index} textAlign='center'>
					<Table.Cell>{name}</Table.Cell>
					<Table.Cell>{location}</Table.Cell>
					<Table.Cell>
						<span>{new Date(start).toLocaleDateString()}</span>
						<div>{getDuration(start, end)} hours</div>
					</Table.Cell>
					<Table.Cell width='5'>
						{levelOfCare.map((level, index) => (<Label key={index} color={getRandomItem(levelOfCareColors) as SemanticCOLORS}>{level}</Label>))}
					</Table.Cell>
					<Table.Cell>{renderAttendance(attendance)}</Table.Cell>
				</Table.Row>))
			}
		</Table.Body>
	</Table>
	);
};
