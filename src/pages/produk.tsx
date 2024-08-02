import * as React from 'react';

import Card from '@/components/Card';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Table from '@/components/Table';

export default function PrivacyPolicy() {
    return (
    <Layout>
        <Seo templateTitle='Home' />
        <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <section id='layanan' className='border border-1 w-full p-10 my-10'>
              <h2 className='mb-10 text-[#23549a]'>Layanan Kami</h2>
              <div className='flex justify-evenly'>
                <Card>
                  <h4 className='text-[#23549a]'>BPKB Mobil</h4>
                  <a
                    className='my-8 block w-full rounded-full bg-[#23549a] p-2 text-center text-white'
                    href="https://wa.me/+6281310911206?text=I'm%20Interested"
                    target='_blank'
                  >
                    Ajukan Sekarang
                  </a>
                </Card>

                <Card>
                  <h4 className='text-[#23549a]'>BPKB Truck / Pickup</h4>
                  <a
                    className='my-8 block w-full rounded-full bg-[#23549a] p-2 text-center text-white'
                    href="https://wa.me/+6281310911206?text=I'm%20Interested"
                    target='_blank'
                  >
                    Ajukan Sekarang
                  </a>
                </Card>

                <Card>
                  <h4 className='text-[#23549a]'>BPKB Motor</h4>
                  <a
                    className='my-8 block w-full rounded-full bg-[#23549a] p-2 text-center text-white'
                    href="https://wa.me/+6281310911206?text=I'm%20Interested"
                    target='_blank'
                  >
                    Ajukan Sekarang
                  </a>
                </Card>
              </div>
            </section>

            {/* kelengkapan dokumen section */}
            <section id='kelengkapan_dokumen' className='border border-1 w-full p-10 my-10'>
              <h2 className='mb-10 text-[#23549a]'>Kelengkapan Dokumen</h2>
              <Table/>
            </section>
          </div>
        </section>
        </main>
    </Layout>
    );
}