import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import Button from '@/components/buttons/Button';

export default function PengajuanForm() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();

  // Put Header or Footer Here
  return <form className='m-0 w-full py-12 text-center'
              onSubmit={handleSubmit((data) => {
                let nama = data['nama'];
                let email = data['email'];
                let telp = data['telp'];
                let domisili = data['domisili'];
                let merk = data['merk'];
                let nopol = data['nopol'];
                let pengajuan = data['pengajuan'];
                const wa_link = `https://wa.me/+6281310911206?text=Halo%20Gadai%20BPKB%20Nasional,%20saya%20ingin%20mengajukan%20dana%0aNama:%20${nama}%20(${email})%0aNo%20HP:%20${telp}%0aDomisili:%20${domisili}%0aMerk%20Kendaraan:%20${merk}%0aNopol:%20${nopol}%0aPengajuan:%20${pengajuan}`;
                router.push(wa_link);
              })}
            >
              <h2 className='mb-10 text-[#23549a]'>Pengajuan BPKB</h2>
              <div className='mx-auto grid grid-cols-3 gap-4'>
                <div className='text-start'>
                  <label className='text-sm font-medium leading-6 text-gray-900'>
                    Nama Lengkap
                  </label>
                  <div className='mx-auto mt-2 w-full'>
                    <input
                      {...register('nama')}
                      type='text'
                      name='nama'
                      id='nama'
                      className='block w-full w-full rounded-md border-0 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 focus:ring-1 sm:text-sm sm:leading-6'
                      placeholder='Nama Lengkap'
                    />
                  </div>
                </div>

                <div className='text-start'>
                  <label className='text-sm font-medium leading-6 text-gray-900'>
                    Email
                  </label>
                  <div className='mx-auto mt-2 w-full'>
                    <input
                      {...register('email')}
                      type='text'
                      name='email'
                      id='email'
                      className='block w-full w-full rounded-md border-0 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 focus:ring-1 sm:text-sm sm:leading-6'
                      placeholder='Email'
                    />
                  </div>
                </div>

                <div className='text-start'>
                  <label className='text-sm font-medium leading-6 text-gray-900'>
                    NO HP/WA Aktif
                  </label>
                  <div className='mx-auto mt-2 w-full'>
                    <input
                      {...register('telp')}
                      type='text'
                      name='telp'
                      id='telp'
                      className='block w-full w-full rounded-md border-0 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 focus:ring-1 sm:text-sm sm:leading-6'
                      placeholder='Contoh: 0815223124999'
                    />
                  </div>
                </div>
              </div>
              <div className='mx-auto grid grid-cols-1'>
                <div className='text-start'>
                  <label className='text-sm font-medium leading-6 text-gray-900'>
                    Domisili Saat Ini
                  </label>
                  <div className='mx-auto mt-2 w-full'>
                    <input
                      {...register('domisili')}
                      type='text'
                      name='domisili'
                      id='domisili'
                      className='block w-full w-full rounded-md border-0 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 focus:ring-1 sm:text-sm sm:leading-6'
                      placeholder='Kelurahan Kujangsari, Kecamatan Buahbatu, Kota Bandung'
                    />
                  </div>
                </div>
              </div>
              <div className='mx-auto grid grid-cols-2 gap-4'>
                <div className='text-start'>
                    <label className='text-sm font-medium leading-6 text-gray-900'>
                        Merk, Tipe, Tahun Mobil
                    </label>
                    <div className='mx-auto mt-2 w-full'>
                        <input
                        {...register('merk')}
                        type='text'
                        name='merk'
                        id='merk'
                        className='block w-full w-full rounded-md border-0 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 focus:ring-1 sm:text-sm sm:leading-6'
                        placeholder='Contoh: Toyota Yaris GR Sport 2021'
                        />
                    </div>
                </div>
                <div className='text-start'>
                  <label className='text-sm font-medium leading-6 text-gray-900'>
                    Nomor Kendaraan (Plat)
                  </label>
                  <div className='mx-auto mt-2 w-full'>
                    <input
                      {...register('nopol')}
                      type='text'
                      name='nopol'
                      id='nopol'
                      className='block w-full w-full rounded-md border-0 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 focus:ring-1 sm:text-sm sm:leading-6'
                      placeholder='Contoh: B 1231 KK'
                    />
                  </div>
                </div>
              </div>

              <div className='text-start'>
                  <label className='text-sm font-medium leading-6 text-gray-900'>
                    Pengajuan
                  </label>
                  <div className='mx-auto mt-2 w-full'>
                    <input
                      {...register('pengajuan')}
                      type='text'
                      name='pengajuan'
                      id='pengajuan'
                      className='block w-full w-full rounded-md border-0 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 focus:ring-1 sm:text-sm sm:leading-6'
                      placeholder='B 1231 KK'
                    />
                  </div>
                </div>

                <Button
                className='my-8 block w-full rounded-xl bg-[#23549a] p-2 text-center'
                type='submit'
              >
                Submit
              </Button>
  </form>
}
