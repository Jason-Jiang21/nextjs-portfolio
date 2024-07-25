import React from 'react';
import Link from 'next/link';

const IdolShowdownDetails = () => {
  return (
    <div>
      <p>Detailed information about Idol Showdown project...</p>
      <img src="/IdolShowdown-details.jpg" alt="Idol Showdown" />
      <Link href="/projects/IdolShowdown" className="text-blue-500 hover:underline">View Project</Link>
    </div>
  );
};

export default IdolShowdownDetails;