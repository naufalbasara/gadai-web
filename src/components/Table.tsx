import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 120 }} >
        <TableHead>
          <TableRow>
            <TableCell align="center" className='text-xl'><b>Dokumen</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell align="center">KTP</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">Kartu Keluarga</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">STNK</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">BPKB</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
