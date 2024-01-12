import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import ProductList from '@/components/product-list';
import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('addb7b4a-1127-4f78-af82-f75347c00e19');

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
      {/* Featured Products */}
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title='Featured Products' items={products} />
      </div>
    </Container>
  );
}
