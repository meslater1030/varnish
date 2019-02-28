import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import styled from 'styled-components'

interface Props {};

/**
 * Example of a datatable
 */
class Datatable extends React.Component<Props> {
  id = 0;

  createData = (name: string, calories: number, fat: number, carbs: number, protein: number) => {
    this.id += 1;
    return { id: this.id, name, calories, fat, carbs, protein };
  };

  rows = [
    this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    this.createData('Eclair', 262, 16.0, 24, 6.0),
    this.createData('Cupcake', 305, 3.7, 67, 4.3),
    this.createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  render() {
    return (
      <Root>
        <SimpleTable>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </SimpleTable>
      </Root>
    );
  };
}

const Root = styled(Paper)`
  width: 100%;
  margin-top: ${props => `${props.theme.spacing.unit * 1}px`};
  overflow-x: auto;
`;

const SimpleTable = styled(Table)`
  min-width: 700px;
`;

export default Datatable;
