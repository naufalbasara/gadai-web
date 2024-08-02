import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Pengajuan from '@/components/Pengajuan';

export default function PrivacyPolicy() {
    return (
    <Layout>
        <Seo templateTitle='Home' />
        <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <h1>Privacy Policy</h1>
          </div>
        </section>
        </main>
    </Layout>
    );
}