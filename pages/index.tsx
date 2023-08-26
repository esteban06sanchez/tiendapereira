import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';
import { ProductList } from '../components/products';


const Home: NextPage = () => {
  return (
    <ShopLayout title={'Deportivo Pereira'} pageDescription={'La tienda del grande matecaña'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Productos</Typography>

        <ProductList 
          products={ initialData.products as any }
        />
    

    </ShopLayout>
  )
}

export default Home
