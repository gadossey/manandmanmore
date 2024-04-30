import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TerritoryQuotas = ({ territories, agents, retailers, fieldAgents, onAssignQuota, countryQuotas }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Territory</TableCell>
            <TableCell>Quota</TableCell>
            <TableCell>Agents</TableCell>
            <TableCell>Retailers</TableCell>
            <TableCell>Field Agents</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {territories.map((territory) => (
            <TableRow key={territory.id}>
              <TableCell>{territory.name}</TableCell>
              <TableCell>{countryQuotas[territory.id] || 0}</TableCell>
              <TableCell>{territory.agents.length}</TableCell>
              <TableCell>{territory.retailers.length}</TableCell>
              <TableCell>{territory.fieldAgents.length}</TableCell>
              <TableCell>
                <Button onClick={() => onAssignQuota(territory.id, agents[0]?.id, retailers[0]?.id, fieldAgents[0]?.id)}>
                  Assign Quota
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TerritoryQuotas;
