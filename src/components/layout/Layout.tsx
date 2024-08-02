import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <main className='m-0 '>
    <Header/>
    <div>
      {children}
    </div>
    <Footer/>
  </main>;
}
