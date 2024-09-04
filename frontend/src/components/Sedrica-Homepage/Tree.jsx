import React, { useState } from 'react';
import logo from "../../assets/th.jpeg";
import { OrganizationChart } from 'primereact/organizationchart';

export default function Tree() {
  const [data] = useState([
    {
      label: 'Argentina',
      expanded: true,
      data: 'ar',
      children: [
        {
          label: 'Argentina',
          expanded: true,
          data: 'ar',
          children: [
            {
              label: 'Argentina',
              data: 'ar',
            },
            {
              label: 'Croatia',
              data: 'hr',
            },
          ],
        },
        {
          label: 'France',
          expanded: true,
          data: 'fr',
          children: [
            {
              label: 'France',
              data: 'fr',
            },
            {
              label: 'Morocco',
              data: 'ma',
            },
          ],
        },
      ],
    },
  ]);

  const nodeTemplate = (node) => {
    return (
      <div className="flex flex-col items-center">
        <img style={{width: '200px', height: '200px'}}
          alt={node.label}
          src={logo}
          className={`w-8 shadow-md flag flag-${node.data}`}
        />
        <div className="mt-3 font-medium text-lg">{node.label}</div>
      </div>
    );
  };

  return (
    <div className="card overflow-x-auto">
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
    </div>
  );
}