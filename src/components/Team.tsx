import Image from "next/image";
import { team } from "@/lib/site-config";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Team() {
  return (
    <section id="equipo" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            El equipo detrás de Trending ADS
          </h2>
          <p className="mt-4 text-ink-secondary">
            Un equipo multidisciplinario apasionado por el marketing digital,
            el diseño y la producción audiovisual.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name + member.role}
              className="rounded-2xl border border-border-subtle bg-brand-900/50 p-6 text-center"
            >
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={72}
                  height={72}
                  className="mx-auto h-18 w-18 rounded-full object-cover"
                />
              ) : (
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-900 font-display text-lg font-bold text-white">
                  {initials(member.name)}
                </div>
              )}
              <h3 className="mt-4 text-sm font-semibold">{member.name}</h3>
              <p className="mt-1 text-xs font-medium text-brand-300">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
