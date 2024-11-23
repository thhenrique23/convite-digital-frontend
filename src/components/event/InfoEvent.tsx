import { Event } from "@/core";
import Info from "../shared/Info";

export interface InfoEventProps {
  event: Event;
  className?: string;
}
export default function InfoEvent({ event, className }: InfoEventProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3">
        <span className="text-2xl font-black">{event.alias}</span>
        <span className="text-xl font-zinc-300">{event.name}</span>
      </div>
      <div className="flex gap-2">
        <Info label="Data:">
          <span>
            {new Date(event.date!).toLocaleDateString()}
            {" às  "}
            {new Date(event.date!).toLocaleTimeString()}
          </span>
        </Info>
        <Info label="Local:">{event.location}</Info>
      </div>
      <div>
        <Info label="Descrição:">{event.description}</Info>
      </div>
    </div>
  );
}
