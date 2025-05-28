'use client';

import HymnalPage from '@/app/components/Hymnals';
import RecentHymns from '@/app/components/RecentHymns';
import React from 'react';

function Hymnals() {
  return (
    <div className='mx-auto'>
        <HymnalPage />
        <RecentHymns />
    </div>
  );
}

export default Hymnals;

