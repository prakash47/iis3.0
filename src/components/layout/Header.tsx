import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  return (
    <header className="header-scroll glass sticky top-0 z-50 border-x-0 border-t-0">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Intention InfoService - home" className="flex items-center">
          {/* Color logo in light mode, white logo in dark mode. CSS-swapped, both SSR'd (no flash). */}
          <Image
            src="/logo.png"
            alt=""
            width={569}
            height={220}
            sizes="120px"
            priority
            className="h-11 w-auto dark:hidden"
          />
          <Image
            src="/logo-white.png"
            alt=""
            width={620}
            height={240}
            sizes="120px"
            loading="eager"
            className="hidden h-11 w-auto dark:block"
          />
        </Link>

        <DesktopNav />

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="contact-btn inline-flex h-10 items-center justify-center px-5 text-sm font-semibold"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
