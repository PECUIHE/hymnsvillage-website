'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Button from './ui/Button';


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Hymnals', href: '/hymnals' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  // const isActive = (path: string) => pathname === path;
  return (
    <header className="w-full fixed bg-black/10 backdrop-blur-xs shadow-sm text-white px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Hymns Village" 
            width={40}
            height={40}
            className="rounded-full" 
          />
          <span className="text-lg font-semibold">Hymns Village</span>
        </Link>

        <MobileMenu />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
            <Link
              key={link.name}
              href={link.href}
              className={`hover-underline ${isActive ? 'active-underline font-semibold' : ''} transition`}
            >
              {link.name}
            </Link>
            );
          })}

          <div className='flex items-center justify-between gap-2 text-white'>
            {/* Login Button */}
            <Button className='bg-transparent border border-white text-white'>
              <Link
                href="/login"
                className="capitalize font-semibold"
              >
                Log In
              </Link>
            </Button>
            {/* Sign Up Button */}
            <Button className='hover:border-white'>
              <Link
                href="/signup"
                className="capitalize font-semibold"
              >
                Sign Up
              </Link>
            </Button>
          </div>
        </div>

      </div>

    </header>
  );
};

export default Navbar;

// This code defines a responsive navigation bar for a Next.js application.
// It includes a logo, navigation links, and buttons for login and sign up.
// The navigation bar adapts to different screen sizes, showing a mobile menu on smaller screens.
// The `usePathname` hook is used to determine the current route, allowing for active link styling.
// The `MobileMenu` component is imported to handle the mobile navigation menu.
// The `Button` component is used for the login and sign up buttons, providing a consistent style.
// The `navLinks` array contains the navigation items, which are mapped to create the links.
// The `isActive` function checks if the current path matches the link's href to apply active styles.
// The `Image` component from Next.js is used to optimize the logo image.
// The navigation bar is styled with Tailwind CSS classes for a modern look and feel.
// The `hover-underline` and `active-underline` classes are used to add underline effects on hover and when the link is active.
// The `className` prop is used to apply styles conditionally based on the active state of the link.
// The `max-w-7xl mx-auto` classes center the content and limit its width for better readability.
// The `flex` and `gap` classes are used to create a flexible layout with spacing between elements.
// The `bg-black/10 backdrop-blur-xs` classes create a semi-transparent background with a slight blur effect.
// The `z-50` class ensures the navbar stays on top of other content.
// The `px-6 py-4` classes add padding to the navbar for better spacing.
// The `text-white` class sets the text color to white for better contrast against the dark background.
// The `rounded-full` class is applied to the logo image for a circular appearance.
// The `hover:border-white` class adds a border on hover for the sign-up button, enhancing interactivity.
// The `transition` class is used to animate the hover effects smoothly.