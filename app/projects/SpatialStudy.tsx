import React from 'react';
import Link from 'next/link';

const SpatialStudyDetails = () => {
  return (
    <div>
      <p>Detailed information about Spatial Study project...</p>
      <img src="/TwinShooter-details.png" alt="Twin Shooter" />
      <Link href="/projects/TwinShooter" className="text-blue-500 hover:underline">View Project</Link>
    </div>
  );
};

export default SpatialStudyDetails;