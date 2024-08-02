import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function PrivacyPolicy() {
    return (
    <Layout>
        <Seo templateTitle='Home' />
        <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1>Tentang Kami</h1>
          </div>
        </section>
        </main>
    </Layout>
    );
}