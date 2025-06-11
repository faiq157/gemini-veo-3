import { SVGProps } from 'react';

/**
 * A sleek, modern icon representing an energy drink can with a lightning bolt.
 * It's designed to be styled with Tailwind CSS `className`.
 * @example <EnergyDrinkIcon className="h-6 w-6 text-blue-500" />
 */
export function EnergyDrinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 12h.01" />
      <path d="M15.07 4.93A8 8 0 0 1 19.07 8.93" />
      <path d="M4.93 15.07A8 8 0 0 1 8.93 4.93" />
      <path d="M12 20a8 8 0 0 1-8-8" />
      <path d="M12 4v4l4 4" />
      <path d="M12 12h4" />
      <path d="M12 12v4" />
    </svg>
  );
}

/**
 * A clean, simple icon representing a house for real estate.
 * It's designed to be styled with Tailwind CSS `className`.
 * @example <RealEstateIcon className="h-8 w-8 text-green-600" />
 */
export function RealEstateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}