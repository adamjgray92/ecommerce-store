'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { PlusIcon, XIcon } from 'lucide-react';

import { Color, Size } from '@/types';
import { Button } from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';
import Filter from './filter';

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export default function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
        Filters <PlusIcon size={20} />
      </Button>

      <Dialog
        open={isOpen}
        as='div'
        className='relative z-10 lg:hidden'
        onClose={onClose}
      >
        {/* Background */}
        <div className='fixed inset-0 bg-black bg-opacity-25' />

        {/* Dialog Position */}
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            {/* Close Button */}
            <div className='flex items-center justify-end px-4'>
              <IconButton icon={<XIcon size={15} onClick={onClose} />} />
            </div>

            {/* Filters */}
            <div className='p-4'>
              <Filter valueKey='sizeId' name='Sizes' data={sizes} />
              <Filter valueKey='colorId' name='Colors' data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
