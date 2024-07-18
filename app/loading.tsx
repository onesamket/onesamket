import { dark_polygon_star, with_glass } from "@/assets";
import Image from "next/image";

export default function Loading() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="relative flex items-center justify-center">
        <Image
          src={dark_polygon_star}
          alt="polygon"
          className="w-80 h-80 animate-slow-spin"
          layout="fixed"
          width={400}
          height={400}
        />
        <Image
          src={with_glass}
          alt="classic"
          className="absolute w-40 h-40 rounded-full"
        />
      </div>
    </main>
  );
}
