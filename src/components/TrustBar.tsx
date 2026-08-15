import Image from "next/image";

const items = [
  {
    label: "Presencial em Novo Hamburgo/RS",
    icon: "/brand/icon-sunflower.png",
  },
  {
    label: "Online para todo o Brasil",
    icon: "/brand/icon-book.png",
  },
  {
    label: "Abordagem em Terapia do Esquema Contextual",
    icon: "/brand/icon-notebook.png",
  },
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Informações de atendimento"
      className="border-b border-clay-gray/20 bg-paper"
    >
      <ul className="mx-auto grid max-w-6xl gap-4 px-5 py-5 md:grid-cols-3 md:gap-6 md:px-8 md:py-6">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 font-body text-sm text-brown md:justify-center md:text-[0.95rem]"
          >
            <Image
              src={item.icon}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 shrink-0 object-contain"
              aria-hidden
            />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
