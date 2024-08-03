import * as React from 'react';

import Card from '@/components/Card';
import NextImage from '@/components/NextImage';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import BasicTable from '@/components/Table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PengajuanForm from '@/components/Pengajuan';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            {/* jumbotron section */}
            <section id='jumbotron' className='bg-center bg-cover bg-scroll bg-no-repeat bg-jumbotron md:h-screen w-screen p-10 mb-10 bg-gray-300 bg-blend-multiply'>
              <h1 className='md:mt-8 text-white text-4xl sm:text-6xl md:text-8xl my-10'>Jaminkan BPKB<br/>Kendaraan Anda</h1>
              <a target='_blank' href='https://wa.me/+6281310911206?text=Halo%20Gadai%20BPKB%20Nasional,%20saya%20ingin%20mengajukan%20dana' className='p-4 sm:w-32 text-lg sm:text-2xl md:text-4xl bg-white justify-center rounded rounded-xl border border-1 shadow-sm hover:bg-gray-300 active:bg-gray-400 text-[#23549A] font-bold'>Ajukan Sekarang</a>
            </section>
            
            {/* layanan section */}
            <section id='layanan' className='border border-1 w-full my-10'>
              <h2 className='mb-10 text-[#23549a]'>Layanan Kami</h2>
              <div className='flex flex-col justify-evenly items-center md:flex md:flex-row md:justify-evenly'>
                <Card>
                  <h4 className='text-[#23549a]'>BPKB Mobil</h4>
                  <div className='my-10'>
                  <NextImage 
                  useSkeleton
                  className='w-full md:w-full h-40'
                  src='/images/mobil.png'
                  width='320'
                  height='320'
                  alt='Icon'
                  />
                  </div>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableBody>
                          <TableRow>
                              <TableCell align="left">Bunga per bulan</TableCell>
                              <TableCell align="left"><b>0,73%</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Minimum pengajuan</TableCell>
                              <TableCell align="left"><b>20 Juta</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Jangka waktu</TableCell>
                              <TableCell align="left"><b>6-48 bulan</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Minimal tahun kendaraan</TableCell>
                              <TableCell align="left"><b>2008</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Proses</TableCell>
                              <TableCell align="left"><b>1 hari cair</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Atas nama BPKB</TableCell>
                              <TableCell align="left"><b>Sendiri / pasangan / orang lain</b></TableCell>
                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <a
                    className='my-8 block w-full rounded-full bg-[#23549a] p-2 text-center text-white'
                    href="https://wa.me/+6281310911206?text=Halo%20Gadai%20BPKB%20Nasional,%20saya%20ingin%20mengajukan%20dana"
                    target='_blank'
                  >
                    Ajukan Sekarang
                  </a>
                </Card>

                <Card>
                  <h4 className='text-[#23549a]'>BPKB Truck / Pickup</h4>
                  <div className='my-10'>
                  <NextImage 
                  useSkeleton
                  className='w-full md:w-full h-40'
                  src='/images/truck.png'
                  width='320'
                  height='320'
                  alt='Icon'
                  />
                  </div>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableBody>
                          <TableRow>
                              <TableCell align="left">Bunga per bulan</TableCell>
                              <TableCell align="left"><b>0,98%</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Minimum pengajuan</TableCell>
                              <TableCell align="left"><b>20 Juta</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Jangka waktu</TableCell>
                              <TableCell align="left"><b>6-48 bulan</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Minimal tahun kendaraan</TableCell>
                              <TableCell align="left"><b>2013</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Proses</TableCell>
                              <TableCell align="left"><b>1 hari cair</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Atas nama BPKB</TableCell>
                              <TableCell align="left"><b>Sendiri / pasangan / orang lain</b></TableCell>
                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <a
                    className='my-8 block w-full rounded-full bg-[#23549a] p-2 text-center text-white'
                    href="https://wa.me/+6281310911206?text=Halo%20Gadai%20BPKB%20Nasional,%20saya%20ingin%20mengajukan%20dana"
                    target='_blank'
                  >
                    Ajukan Sekarang
                  </a>
                </Card>

                <Card>
                  <h4 className='text-[#23549a]'>BPKB Motor</h4>
                  <div className='my-10'>
                  <NextImage 
                  useSkeleton
                  className='w-full md:w-full h-40'
                  src='/images/motor.png'
                  width='320'
                  height='320'
                  alt='Icon'
                  />
                  </div>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableBody>
                          <TableRow>
                              <TableCell align="left">Bunga per bulan</TableCell>
                              <TableCell align="left"><b>1,79%</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Minimum pengajuan</TableCell>
                              <TableCell align="left"><b>2 Juta</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Jangka waktu</TableCell>
                              <TableCell align="left"><b>6-24 bulan</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Minimal tahun kendaraan</TableCell>
                              <TableCell align="left"><b>2011</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Proses</TableCell>
                              <TableCell align="left"><b>1 hari cair</b></TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell align="left">Atas nama BPKB</TableCell>
                              <TableCell align="left"><b>Sendiri / pasangan / orang lain</b></TableCell>
                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <a
                    className='my-8 block w-full rounded-full bg-[#23549a] p-2 text-center text-white'
                    href="https://wa.me/+6281310911206?text=Halo%20Gadai%20BPKB%20Nasional,%20saya%20ingin%20mengajukan%20dana"
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
              <div className='flex flex-col items-center sm:flex sm:flex-row sm:justify-evenly'>
                <div className='w-64 m-2 border border-1'>
                  <div className='bg-black p-4 text-white text-center'>Image</div>
                  <div className='my-6 p-4 h-32 sm:h-48'>
                    <h4>1. Isi Formulir</h4>
                    <p>Isi form dan lengkapi data diri untuk Pengajuan dapat diverifikasi</p>
                  </div>
                </div>

                <div className='w-64 m-2 border border-1'>
                  <div className='bg-black p-4 text-white text-center'>Image</div>
                  <div className='my-6 p-4 h-32 sm:h-48'>
                    <h4>2. Verifikasi</h4>
                    <p>Setelah data terisi lengkap, Anda akan dihubungi Call Center kami</p>
                  </div>
                </div>

                <div className='w-64 m-2 border border-1'>
                  <div className='bg-black p-4 text-white text-center'>Image</div>
                  <div className='my-6 p-4 h-32 sm:h-48'>
                  <h4>3. Peninjauan</h4>
                  <p>Tim BPKB Auto akan melakukan Survey peninjauan untuk proses selanjutnya</p>
                  </div>
                </div>

                <div className='w-64 m-2 border border-1'>
                  <div className='bg-black p-4 text-white text-center'>Image</div>
                  <div className='my-6 p-4 h-32 sm:h-48'>
                    <h4>4. Acc Pengajuan</h4>
                    <p>Pengajuan akan dicairkan ke rekening nasabah terdaftar</p>
                  </div>
                </div>
              </div>
            </section>

            {/* kelengkapan dokumen section */}
            <section id='kelengkapan_dokumen' className='border border-1 w-full p-10 my-10'>
              <h2 className='mb-10 text-[#23549a]'>Kelengkapan Dokumen</h2>
              <BasicTable/>
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
