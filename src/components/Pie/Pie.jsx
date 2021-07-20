/* eslint-disable react/prop-types */
import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{
      top: 30, right: 80, bottom: 30, left: 80,
    }}
    startAngle={310}
    endAngle={-10}
    innerRadius={0.45}
    activeOuterRadiusOffset={8}
    colors={{ scheme: 'blues' }}
    borderWidth={0}
    borderColor="none"
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 20]] }}
    defs={[
      {
        id: 'lines',
        type: 'patternLines',
        background: '#2270B5',
        color: 'rgba(255, 255, 255, 0.05)',
        padding: 1,
        stagger: false,
      },
      {
        id: 'dots',
        type: 'patternLines',
        background: '#C6DBEF',
        color: 'rgba(255, 255, 255, 0)',
      },
    ]}
    fill={[
      {
        match: {
          id: 'Done',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'To-do',
        },
        id: 'lines',
      },
    ]}
  />
);

export default MyResponsivePie;
