import Guest from "../model/Guest";
import validateGuest from "./validateGuest";

export default function complementGuest(guest: Partial<Guest>): Guest {
  const errors = validateGuest(guest);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
  const qtdCompanions = guest.qtdCompanions ?? 0;
  const haveCompanions =
    guest.hasCompanions && guest.confirmed && qtdCompanions > 0;

  const updatedGuest = {
    ...guest,
    qtdCompanions: haveCompanions ? qtdCompanions : 0,
    hasCompanions: haveCompanions,
  };

  return updatedGuest as Guest;
}
