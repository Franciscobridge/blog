import { colorClasses, colorName } from "@/utils/colors";
import Image, { StaticImageData } from "next/image";



interface AvatarProps {
  children?: React.ReactNode,
  src?: string | StaticImageData,
  alt?: string,
  color?: colorName
}

export function Avatar({ children, src, alt, color = "gray" }: AvatarProps) {

  const selectedColor = colorClasses[color] || colorClasses["prussian"]

  return (
    <div className={`flex items-center justify-center min-h-10 min-w-10 ${selectedColor.bg} rounded-full`}>
      {src ? (
        <Image src={src} alt={alt || "Alt not defined"} className="rounded-full" />
      ) : (
        <span className={`${selectedColor.text}`}>{children}</span>
      )}
    </div>
  );
}


interface AvatarTextProps {
  children: React.ReactNode
}

export function AvatarText({ children }: AvatarTextProps) {
  return (
    <h1 className="flex font-bold text-xl">{children}</h1>
  )
}