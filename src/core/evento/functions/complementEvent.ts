import { Id, Password } from "@/core/shared";
import Event from "../model/Event";
import validateEvent from "./validateEvent";

export default function complementEvent(partialEvent: Partial<Event>): Event {
  const errors = validateEvent(partialEvent);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  const event: Event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.new(),
    password: partialEvent.password ?? Password.create(20),
    expectedPublic: +(partialEvent.expectedPublic ?? 1),
  } as Event;

  return event;
}
