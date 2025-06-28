import Image from 'next/image';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Zoom } from './Zoom';

type _Image = {
  src: string;
  alt: string;
  sizes: string;
};
type ImageCarouselProps = {
  images: _Image[];
} & ComponentProps<typeof CarouselContent>;
export function ImageCarousel({ images, ...props }: ImageCarouselProps) {
  return (
    <Carousel opts={{ loop: true }} className='group w-full'>
      <CarouselContent {...props} className={cn(props.className, 'group')}>
        {images.map(image => (
          <CarouselItem key={image.src}>
            <figure className='w-full grid gap-2'>
              <ImageDialog {...image} />
              <figcaption className='text-muted-foreground text-center'>
                {image.alt}
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselNext className='transition-opacity group-hover:opacity-100 opacity-0 right-4' />
          <CarouselPrevious className='transition-opacity group-hover:opacity-100 opacity-0 left-4' />
        </>
      )}
    </Carousel>
  );
}

function ImageDialog(image: _Image) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className='relative w-full aspect-video'>
          <Image src={image.src} alt={image.alt} fill sizes={image.sizes} />
        </div>
      </DialogTrigger>
      <DialogContent className='aspect-video w-[min(90vw,2000px)] h-auto max-w-none overflow-hidden p-0'>
        <DialogTitle className='sr-only'>{image.alt}</DialogTitle>
        <DialogDescription className='sr-only'>{image.alt}</DialogDescription>
        <Zoom className='w-full h-full'>
          <Image src={image.src} alt={image.alt} fill sizes={image.sizes} />
        </Zoom>
      </DialogContent>
    </Dialog>
  );
}
