import Image from "next/image";

type SectionEyebrowProps = {
  children: string;
  icon?: "flowers" | "sunflower" | "book" | "notebook";
  tone?: "green" | "bordo" | "brown";
};

const iconSrc = {
  flowers: "/brand/icon-flowers.png",
  sunflower: "/brand/icon-sunflower.png",
  book: "/brand/icon-book.png",
  notebook: "/brand/icon-notebook.png",
} as const;

const toneClass = {
  green: "text-green-medium",
  bordo: "text-bordo",
  brown: "text-brown",
} as const;

export function SectionEyebrow({
  children,
  icon,
  tone = "green",
}: SectionEyebrowProps) {
  return (
    <p
      className={`mb-3 inline-flex items-center gap-2 font-body text-caption font-semibold uppercase tracking-[0.12em] ${toneClass[tone]}`}
    >
      {icon ? (
        <Image
          src={iconSrc[icon]}
          alt=""
          width={22}
          height={22}
          className="h-[18px] w-[18px] object-contain opacity-90"
          aria-hidden
        />
      ) : null}
      {children}
    </p>
  );
}
