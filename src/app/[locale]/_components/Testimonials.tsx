'use client';

import { Quote, Star, User } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { SectionTitle } from '@/components/SectionTitle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Testimonial, TESTIMONIALS } from '@/constants/testimonials';
import { cn } from '@/lib/utils';
import { range } from '@/utils/numbers';

export function Testimonials() {
  const { t } = useTranslation();
  return (
    <section id='testimonials' className='py-16 grid place-items-center'>
      <div className='container mx-auto grid gap-4'>
        <SectionTitle>{t('testimonials.title')}</SectionTitle>
        <Carousel
          className='mx-auto max-w-[min(60vw,750px)]'
          opts={{ loop: true }}
        >
          <CarouselContent className='px-1 py-4 items-center'>
            {TESTIMONIALS.map(testimonial => (
              <TestimonialItem key={testimonial.title} {...testimonial} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialItem(testimonial: Testimonial) {
  const quoteClass =
    'absolute bg-accent text-accent-foreground rounded-full size-10 grid place-items-center';
  return (
    <CarouselItem>
      <article
        className={cn(
          'grid gap-4 relative',
          'px-4 sm:px-8 py-8 bg-card text-card-foreground rounded-lg shadow mx-auto'
        )}
      >
        <span className={cn('scale-x-[-1] -top-4 left-4', quoteClass)}>
          <Quote />
        </span>
        <span className={cn('-bottom-4 right-4', quoteClass)}>
          <Quote />
        </span>
        <div
          className={cn(
            'rounded-full overflow-hidden size-24 mx-auto grid place-items-center',
            testimonial.imageUrl == null &&
              'bg-primary stroke-primary-foreground'
          )}
        >
          {testimonial.imageUrl ? (
            <Image
              src={testimonial.imageUrl}
              alt={testimonial.imageAlt}
              width={96}
              height={96}
            />
          ) : (
            <User className='stroke-inherit h-full w-full' />
          )}
        </div>
        <h3 className='text-center font-bold text-xl'>{testimonial.title}</h3>
        <Stars amount={testimonial.stars} />
        <blockquote className='italic text-sm'>
          <p>{testimonial.description}</p>
        </blockquote>
      </article>
    </CarouselItem>
  );
}

type StarsProps = {
  amount: number;
};
function Stars({ amount }: StarsProps) {
  return (
    <div className='flex gap-2 mx-auto w-fit'>
      {range(5).map(index => (
        <Star
          key={index}
          className={cn('size-4', index <= amount && 'fill-accent')}
        />
      ))}
    </div>
  );
}
