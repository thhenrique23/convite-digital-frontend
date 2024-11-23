import { events } from "@/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PaginaEventos() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex flex-col w-full bg-zinc-800 rounded-lg overflow-hidden "
        >
          <div className="relative w-full h-52">
            <Image
              src={event.image}
              fill
              alt={event.name}
              className="obj-cover"
            />
          </div>
          <div className="flex-1 flex flex-col p-7 gap-5 items-center">
            <span className="text-lg text-center font-black">{event.name}</span>
            <p className="flex-1 text-sm text-zinc-400 text-center">
              {event.description}
            </p>
            <QRCode
              value={JSON.stringify({ id: event.id, password: event.password })}
              className="w-44 h-44"
            />
            <div className="flex flex-1 gap-5">
              <Link
                className="button red"
                href={`/evento/admin/${event.id}/${event.password}`}
              >
                Admin
              </Link>
              <Link className="button green" href={`/convite/${event.alias}`}>
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
