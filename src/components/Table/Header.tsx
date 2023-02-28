import { FC } from 'react';
import { Table } from 'semantic-ui-react';

interface Props {
    columns: string[];
}

export const DasboardHeader: FC<Props> = ({ columns }: Props) => {
    return (<Table.Header>
        <Table.Row>
          {columns.map(column => 
            <Table.HeaderCell textAlign='center' key={column}>{column}</Table.HeaderCell>
          )}
        </Table.Row>
      </Table.Header>)
};