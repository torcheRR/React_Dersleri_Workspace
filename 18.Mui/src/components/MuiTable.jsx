import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'

function MuiTable() {
    const rows =[
        {id:1,firstName:"Berkay",lastName:"Öcer",age:21},
        {id:2,firstName:"Yaren",lastName:"Çolak",age:22},
        {id:3,firstName:"Gökay",lastName:"Öcer",age:12},
        {id:4,firstName:"Nilay",lastName:"Öcer",age:1},

    ]
  return (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>İSİM</TableCell>
                <TableCell>SOYİSİM</TableCell>
                <TableCell>YAŞ</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>   
            {

                rows.map((row,index)=>(
                    <TableRow key={index}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    </TableRow>
                ))


            }
        </TableBody>
    </Table>
  )
}

export default MuiTable