import * as React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <>
    <div className='w-72 p-10 rounded-md border border-1 drop-shadow-lg shadow-lg'>
      {children}
    </div>
  </>;
}
