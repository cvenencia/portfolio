import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function LoadingPage() {
  return (
    <div className='min-h-[50vh] grid place-items-center'>
      <LoadingSpinner className='size-24' />
    </div>
  );
}
