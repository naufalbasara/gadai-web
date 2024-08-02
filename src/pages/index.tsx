import * as React from 'react';

import Card from '@/components/Card';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Table from '@/components/Table';

import PengajuanForm from '@/components/Pengajuan';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            {/* jumbotron section */}
            <section id='jumbotron' className='bg-black min-h-screen w-screen p-10 mb-10'>
            <p className='text-white text-center'>Gambar di sini...</p>
            </section>
            
            {/* layanan section */}
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

            {/* cara pengajuan section */}
            <section id='pengajuan' className='border border-1 w-full p-10 my-10'>
              <h2 className='mb-10 text-[#23549a]'>Cara Pengajuan</h2>
              <div className='flex justify-evenly'>
                <div className='w-80 m-2 border border-1'>
                  <div className='bg-black p-4 text-white text-center'>Image</div>
                  <div className='my-6'>
                    <h4>1. Isi Formulir</h4>
                    <p>Isi form dan lengkapi data diri untuk Pengajuan dapat diverifikasi</p>
                  </div>
                </div>

                <div className='w-80 m-2 border border-1'>
                  <div className='bg-black p-4 text-white text-center'>Image</div>
                  <div className='my-6'>
                    <h4>2. Verifikasi</h4>
                    <p>Setelah data terisi lengkap, Anda akan dihubungi Call Center kami</p>
                  </div>
                </div>

                <div className='w-80 m-2 border border-1'>
                  <div className='bg-black p-4 text-white text-center'>Image</div>
                  <div className='my-6'>
                  <h4>3. Peninjauan</h4>
                  <p>Tim BPKB Auto akan melakukan Survey peninjauan untuk proses selanjutnya</p>
                  </div>
                </div>

                <div className='w-80 m-2 border border-1'>
                  <div className='bg-black p-4 text-white text-center'>Image</div>
                  <div className='my-6'>
                    <h4>4. Acc Pengajuan</h4>
                    <p>Pengajuan akan dicairkan ke rekening nasabah terdaftar</p>
                  </div>
                </div>
              </div>
            </section>

            {/* kelengkapan dokumen section */}
            <section id='kelengkapan_dokumen' className='border border-1 w-full p-10 my-10'>
              <h2 className='mb-10 text-[#23549a]'>Kelengkapan Dokumen</h2>
              <Table/>
            </section>

            {/* keuntungan section */}
            <section id='keuntungan' className='border border-1 w-full p-10 my-10'>
              <h2 className='mb-10 text-[#23549a]'>Keuntungan Mengajukan Solusi BPKB Usaha</h2>
            </section>

            <PengajuanForm/>
          </div>
        </section>
      </main>
    </Layout>
  );
}
