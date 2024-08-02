import * as React from 'react';

import { useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';

export default function PengajuanForm() {
    const { register, handleSubmit } = useForm();

  // Put Header or Footer Here
  return <form className='m-0 w-full py-12 text-center'
              onSubmit={handleSubmit((data) => {
                console.log(data);
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
                      {...register('Demog1_RIDAGEYR')}
                      type='number'
                      name='Demog1_RIDAGEYR'
                      id='Demog1_RIDAGEYR'
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
                      {...register('Demog1_RIDAGEYR')}
                      type='number'
                      name='Demog1_RIDAGEYR'
                      id='Demog1_RIDAGEYR'
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
                      {...register('Demog1_RIDAGEYR')}
                      type='number'
                      name='Demog1_RIDAGEYR'
                      id='Demog1_RIDAGEYR'
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
                      {...register('Demog1_DMDHHSIZ')}
                      type='number'
                      name='Demog1_DMDHHSIZ'
                      id='Demog1_DMDHHSIZ'
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
                        {...register('Demog1_DMDHHSIZ')}
                        type='number'
                        name='Demog1_DMDHHSIZ'
                        id='Demog1_DMDHHSIZ'
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
                      {...register('Demog1_DMDHHSIZ')}
                      type='number'
                      name='Demog1_DMDHHSIZ'
                      id='Demog1_DMDHHSIZ'
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
                      {...register('Demog1_DMDFMSIZ')}
                      type='number'
                      name='Demog1_DMDFMSIZ'
                      id='Demog1_DMDFMSIZ'
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
