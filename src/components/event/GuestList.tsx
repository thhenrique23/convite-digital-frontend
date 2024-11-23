import { Guest } from "@/core";
import GuestItem from "./GuestItem";

export interface GuestListProps {
  guests: Guest[];
}

export default function GuestList({ guests }: GuestListProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {guests.map((guest: Guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  );
}
