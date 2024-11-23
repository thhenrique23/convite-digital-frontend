import LogoHome from "@/components/template/LogoHome";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
      flex h-screen flex-col justify-center items-center gap-10
      bg-[url('/home.svg')] bg-cover
    "
    >
      <div className="flex flex-col items-center">
        <LogoHome />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Crie e gerencie o convite do seu evento de forma rápida e facil, e sem
          complicações!
        </p>
      </div>
      <Link href="/evento" className="button blue text-lg uppercase">
        Crie o seu evento
      </Link>
    </div>
  );
}
