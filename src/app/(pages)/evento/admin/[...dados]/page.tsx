"use client";
import DashboardEvent from "@/components/event/DashboardEvent";
import FormPasswordEvent from "@/components/event/FormPasswordEvent";
import { Event, events, Guest } from "@/core";
import { use, useEffect, useState } from "react";

export default function AdminEvento(props: any) {
  const params: any = use(props.params);

  const id = params.dados[0];
  const [event, setEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState<string | null>(
    params.dados[1] ?? null
  );

  const guestsConfirmeds = event?.guests.filter((c) => c.confirmed) ?? [];
  const guestsAway = event?.guests.filter((c) => !c.confirmed) ?? [];

  const total =
    guestsConfirmeds.reduce(
      (total: number, guest: Guest) => total + guest.qtdCompanions + 1,
      0
    ) ?? 0;

  function getEvent() {
    const event = events.find((ev) => ev.id === id && ev.password === password);
    setEvent(event ?? null);
  }

  useEffect(() => {
    getEvent();
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <DashboardEvent
          event={event}
          confirmeds={guestsConfirmeds}
          aways={guestsAway}
          total={total}
        />
      ) : (
        <FormPasswordEvent />
      )}
    </div>
  );
}
