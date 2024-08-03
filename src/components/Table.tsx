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
      <Table sx={{ minWidth: 480 }} >
        <TableHead>
          <TableRow>
            <TableCell align='center'>Mobil</TableCell>
            <TableCell align="center">Motor</TableCell>
            <TableCell align="left">Dokumen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell align="center">V</TableCell>
                <TableCell align="center">V</TableCell>
                <TableCell align="left">KTP</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">V</TableCell>
                <TableCell align="center">V</TableCell>
                <TableCell align="left">Kartu Keluarga</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">V</TableCell>
                <TableCell align="center">V</TableCell>
                <TableCell align="left">STNK</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">V</TableCell>
                <TableCell align="center">V</TableCell>
                <TableCell align="left">BPKB</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
