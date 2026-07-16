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
          {/* Color logo in light mode, white logo in dark mode. CSS-swapped, both SSR'd (no flash).
              Dedicated 256x99 assets served unoptimized: the optimizer's variant rounding
              (569x220 -> 256x100) skewed the intrinsic ratio past Lighthouse's 2% aspect-ratio
              tolerance. One exact file = attr ratio == natural ratio == displayed ratio. */}
          <Image
            src="/logo-256.png"
            alt=""
            width={256}
            height={99}
            unoptimized
            priority
            className="h-11 w-auto dark:hidden"
          />
          <Image
            src="/logo-white-256.png"
            alt=""
            width={256}
            height={99}
            unoptimized
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
