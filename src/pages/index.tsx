import Head from 'next/head';
import api from '../lib/axios';
import Image from 'next/image';

import logoAlt from './assets/logo-alt.png';

export default function Home({ data }: { data: Item[] }) {
  // Separar os itens por categoria
  const categories = data.reduce((acc, item) => {
    if (!acc[item.categoria]) {
      acc[item.categoria] = [];
    }

    acc[item.categoria].push(item);

    return acc;
  }, {} as Record<string, Item[]>);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <header className='flex font-bold bg-primary p-3 mb-3'>
        <Image
          className='mx-2'
          src={logoAlt}
          width={120}
          height={120}
          alt='logo'
        />
      </header>

      <main className=''>
        {Object.entries(categories).map(([category, items]) => (
          <section
            key={category}
            className='flex flex-col flex-1 p-4 mx-10 gap-2'>
            <h2 className='text-3xl text-primary font-semibold'>{category}</h2>
            <div className='h-[2px] w-full bg-primary' />

            <div className='flex flex-col flex-1 gap-3'>
              {items.map((item) => (
                <div
                  key={item.id}
                  className='flex flex-col'>
                  <div className='flex flex-row justify-between flex-1'>
                    <span className='text-xl text-primary'> {item.nome} </span>
                    <span className='text-xl text-primary'>R${item.preco}</span>
                  </div>

                  <span className='text-gray-600'>{item.descricao_pt}</span>
                  <span className='text-gray-600'>{item.descricao_en}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await api.get('/api/items');

  const data = res.data as Item[];

  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 12, // 12 hours
  };
};
