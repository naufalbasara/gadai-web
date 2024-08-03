import * as React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <>
    <div className='my-6 sm:mx-2 w-80 px-4 rounded-md border border-1 drop-shadow-lg shadow-lg'>
      {children}
    </div>
  </>;
}
