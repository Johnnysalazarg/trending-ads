import { trustedByBrands } from "@/lib/site-config";

export default function TrustTicker() {
  return (
    <div className="border-y border-border-subtle bg-brand-900 py-5 px-5 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 md:gap-16">
        {trustedByBrands.map((brand) => (
          <div
            key={brand.name}
            className="flex shrink-0 items-center justify-center p-2"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-15 md:h-20 w-auto object-contain brightness-0 invert opacity-70 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}