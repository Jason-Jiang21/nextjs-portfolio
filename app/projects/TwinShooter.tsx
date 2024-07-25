import React from 'react';
import Link from 'next/link';

const TwinShooterDetails = () => {
  return (
    <div>
      <p>Detailed information about Twin Shooter project...</p>
      <img src="/TwinShooter-details.png" alt="Twin Shooter" />
      <Link href="/projects/TwinShooter" className="text-blue-500 hover:underline">View Project</Link>
    </div>
  );
};

export default TwinShooterDetails;