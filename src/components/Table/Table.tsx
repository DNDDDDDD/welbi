import { FC } from "react";
import { Table, Label, SemanticCOLORS, Dropdown } from 'semantic-ui-react';
import { LEVEL_OF_CARE_COLORS } from "../../constants";
import { getDuration, getRandomItem } from "../../helpers";
import { HEADERS, Resident, TableProgram } from "../../types";
import { DasboardHeader } from "./Header";

interface Props {
    rows: TableProgram[];
}

export const ProgramTable: FC<Props> = ({ rows }) => {
    const renderAttendance = (attendance: Resident[]) => {
            return (<Dropdown text="See attendees">
                <Dropdown.Menu>
                    {
                        attendance.map(({ name: attendanceName }) => (<Dropdown.Item>
                            <Label color='teal'>{attendanceName}</Label>
                        </Dropdown.Item>))
                    }
                </Dropdown.Menu>
            </Dropdown>)
    };

    return (<Table singleLine>
        <DasboardHeader columns={Object.values(HEADERS)}/>
        <Table.Body>
            {
                rows.map(({ name, location, end, start, levelOfCare, attendance }, index) => (<Table.Row key={index} textAlign='center'>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>{location}</Table.Cell>
                    <Table.Cell>
                        <span>{new Date(start).toLocaleDateString()}</span>
                        <div>{getDuration(start, end)} hours</div>
                    </Table.Cell>
                    <Table.Cell width='5'>
                        {levelOfCare.map((level) => (<Label color={getRandomItem(LEVEL_OF_CARE_COLORS) as SemanticCOLORS}>{level}</Label>))} 
                    </Table.Cell>
                    <Table.Cell>{renderAttendance(attendance)}</Table.Cell>
                </Table.Row>))
            }
        </Table.Body>
    </Table>
    )
};
