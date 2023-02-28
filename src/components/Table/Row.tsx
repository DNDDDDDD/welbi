import { Table } from 'semantic-ui-react';

interface Props {
    data: any[];
}

export const TableRow = ({ data }: Props) => {
    console.log(data);
    
    return (<Table.Row>
        {
            Object.values(data).map(cell => {
                return (<Table.Cell>
                    {cell}
                </Table.Cell>)
            })
        }
      </Table.Row>)
};