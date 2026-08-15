import Image from "next/image";

type SectionEyebrowProps = {
  children: string;
  icon?: "flowers" | "sunflower" | "book" | "notebook";
};

const iconSrc = {
  flowers: "/brand/icon-flowers.png",
  sunflower: "/brand/icon-sunflower.png",
  book: "/brand/icon-book.png",
  notebook: "/brand/icon-notebook.png",
} as const;

export function SectionEyebrow({ children, icon }: SectionEyebrowProps) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 font-body text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-green-medium">
      {icon ? (
        <Image
          src={iconSrc[icon]}
          alt=""
          width={18}
          height={18}
          className="h-[16px] w-[16px] object-contain opacity-80"
          aria-hidden
        />
      ) : null}
      {children}
    </p>
  );
}
