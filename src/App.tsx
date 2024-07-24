import React, { useEffect } from 'react';
import { Container, Title, Table, Paper, Space, Tabs, Box } from '@mantine/core';
import { processData, AggregatedData, CropStats } from './utils/dataProcessor';

const App: React.FC = () => {
  const { maxMinProduction, cropStats } = processData();

  useEffect(() => {
    console.log('MaxMin Production Data:', maxMinProduction);
    console.log('Crop Stats Data:', cropStats);
  }, [maxMinProduction, cropStats]);

  const renderMaxMinProductionTable = () => (
    <Box p="md" mb="lg">
      <Paper shadow="xs">
        <Title order={3} style={{ marginBottom: '10px' }}>Max & Min Crop Production</Title>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Year</Table.Th>
              <Table.Th>Crop with Maximum Production</Table.Th>
              <Table.Th>Crop with Minimum Production</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {maxMinProduction.map((item: AggregatedData) => (
              <Table.Tr key={item.year}>
                <Table.Td>{item.year}</Table.Td>
                <Table.Td>{item.maxCrop}</Table.Td>
                <Table.Td>{item.minCrop}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </Box>
  );

  const renderCropStatsTable = () => (
    <Box p="md" mb="lg">
      <Paper shadow="xs">
        <Title order={3} style={{ marginBottom: '10px' }}>Crop Statistics (1950-2020)</Title>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Crop</Table.Th>
              <Table.Th>Average Yield of the Crop between 1950-2020</Table.Th>
              <Table.Th>Average Cultivation Area of the Crop between 1950-2020</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {cropStats.map((item: CropStats) => (
              <Table.Tr key={item.crop}>
                <Table.Td>{item.crop}</Table.Td>
                <Table.Td>{item.avgYield}</Table.Td>
                <Table.Td>{item.avgArea}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </Box>
  );

  return (
    <Container>
      <Title order={1} style={{ marginBottom: '20px' }}>Indian Agriculture Data Analysis</Title>
      <Space h="md" />
      <Tabs defaultValue="table-1">
        <Tabs.List>
          <Tabs.Tab value="table-1">Table 1</Tabs.Tab>
          <Tabs.Tab value="table-2">Table 2</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="table-1">
          {renderMaxMinProductionTable()}
        </Tabs.Panel>
        <Tabs.Panel value="table-2">
          {renderCropStatsTable()}
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default App;
