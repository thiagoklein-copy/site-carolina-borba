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
      className="border-y border-brown/10 bg-paper"
    >
      <ul className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-7 md:flex-row md:items-center md:justify-between md:gap-8 md:px-8">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 font-body text-sm font-light text-brown md:text-[0.95rem]"
          >
            <Image
              src={item.icon}
              alt=""
              width={26}
              height={26}
              className="h-[26px] w-[26px] shrink-0 object-contain"
              aria-hidden
            />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
