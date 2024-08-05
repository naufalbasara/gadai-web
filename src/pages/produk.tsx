import * as React from 'react';

import Card from '@/components/Card';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import BasicTable from '@/components/Table';
import NextImage from '@/components/NextImage';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PrivacyPolicy() {
    return (
    <Layout>
        <Seo templateTitle='Home' />
        <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <section id='layanan' className=' w-full my-10'>
              <h2 className='mb-10 text-[#23549a]'>Layanan Kami</h2>
              <div className='flex flex-col justify-evenly items-center sm:flex sm:flex-row sm:justify-evenly'>
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
                              <TableCell align="left">Bunga</TableCell>
                              <TableCell align="left"><b>Rendah</b></TableCell>
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
                              <TableCell align="left">Bunga</TableCell>
                              <TableCell align="left"><b>Rendah</b></TableCell>
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
                              <TableCell align="left">Bunga</TableCell>
                              <TableCell align="left"><b>Rendah</b></TableCell>
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

            {/* kelengkapan dokumen section */}
            <section id='kelengkapan_dokumen' className=' w-full p-10 my-10'>
              <h2 className='mb-10 text-[#23549a]'>Kelengkapan Dokumen</h2>
              <BasicTable/>
            </section>
          </div>
        </section>
        </main>
    </Layout>
    );
}