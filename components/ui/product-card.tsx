'use client';

import { Product } from '@/types';
import Image from 'next/image';
import IconButton from '@/components/ui/icon-button';
import { ExpandIcon, ShoppingBagIcon } from 'lucide-react';
import Currency from '@/components/ui/currency';

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
  console.log(data);
  return (
    <div className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt={data?.name}
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <IconButton
              onClick={() => {}}
              icon={<ExpandIcon size={20} className='text-gray-600' />}
            />
            <IconButton
              icon={<ShoppingBagIcon size={20} className='text-gray-600' />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-gray-500 text-sm'>{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className='flex items-center justify-between'>
        <Currency value={data?.price} />
      </div>
    </div>
  );
}