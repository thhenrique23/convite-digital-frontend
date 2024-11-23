import { Event, Guest } from "@/core";
import InfoEvent from "./InfoEvent";
import QrCodeView from "./QrCodeView";
import Statistic from "../shared/Statistic";
import GuestList from "./GuestList";

export interface DashboardEventProps {
  event: Event;
  confirmeds: Guest[];
  aways: Guest[];
  total: number;
}
export default function DashboardEvent({
  event,
  confirmeds,
  aways,
  total,
}: DashboardEventProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InfoEvent event={event} className="flex-1" />
        <QrCodeView event={event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistic
          text="Expectativa de Convidados:"
          value={event.expectedPublic}
          image="/icones/convidados.svg"
        />
        <Statistic
          text="Confirmações:"
          value={confirmeds.length}
          image="/icones/confirmados.svg"
        />
        <Statistic
          text="Total Confirmado:"
          value={total}
          image="/icones/acompanhantes.svg"
        />
      </div>

      <button className="button blue self-end mt-12">
        <a href="">Atualizar Lista de Convidados</a>
      </button>
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram PRESENÇA
      </span>
      <GuestList guests={confirmeds} />
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <GuestList guests={aways} />
    </div>
  );
}
