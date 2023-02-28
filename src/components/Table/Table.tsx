import { FC } from "react";
import { Table } from 'semantic-ui-react';
import { HEADERS, Program } from "../../types";
import { DasboardHeader } from "./Header";
import { TableRow } from './Row';

interface Props {
    rows: Program[];
}

export const ProgramTable: FC<Props> = (props) => {
    const { rows } = props;

    const programs = rows.map(({ name, location, end, start, levelOfCare, allDay, attendance, }) => ({
        name,
        location, 
        end,
        start, 
        levelOfCare,
        allDay,
        attendance,
    }));
    

    console.log(programs);
    
    return (<Table singleLine>
        <DasboardHeader columns={Object.values(HEADERS)}/>
        <Table.Body>
        </Table.Body>
    </Table>
    )
};