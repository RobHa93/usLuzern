import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Example() {
  return (
    <Link to="/shop">
      <button
        type="button"
        className="inline-flex mt-20 items-center gap-x-2 rounded-md bg-[#1E6EB4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1C63A3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E6EB4] font-sans"
      >
        Zum Shop
        <ArrowRightIcon aria-hidden="true" className="-mr-0.5 h-5 w-5" />
      </button>
    </Link>
  );
}
