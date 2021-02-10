import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    height:100
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Porperty, Prices, Location, Baths, Bedrooms , Area) {
  return { Porperty, Prices, Location, Baths, Bedrooms , Area };
}

const rows = [
  createData('House', 10000000  , "G-10", 2, 2, "4 Marla"),
  createData('House', 21000000, "G-10", 5, 4,"4 Marla"),
  createData('House', 16900000, "G-10", 4, 3,"6 Marla"),
  createData('House', 24900000, "G-10", 3, 2,"4 Marla"),
  createData('House',  19900000, "G-10", 2, 2,"6 Marla"),
  createData('House',  14900000, "G-10", 5, 2,"5 Marla")
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 function CustomizedTables() {
  const classes = useStyles();

  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Porperty types</StyledTableCell>
            <StyledTableCell align='center'>Prices</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Baths</StyledTableCell>
            <StyledTableCell align="center">Bedrooms</StyledTableCell>
            <StyledTableCell align="center">Area Size</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align='center' component="th" scope="row">
                {row.Porperty}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Prices}</StyledTableCell>
              <StyledTableCell align="center">{row.Location}</StyledTableCell>
              <StyledTableCell align="center">{row.Baths}</StyledTableCell>
              <StyledTableCell align="center">{row.Bedrooms}</StyledTableCell>
              <StyledTableCell align="center">{row.Area}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    

    
    </div>
  );
}
export default CustomizedTables;