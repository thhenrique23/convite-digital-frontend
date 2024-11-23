import Event from "../model/Event";

export default function validateEvent(event: Partial<Event>): string[] {
  const errors: string[] = [];

  if (!event.name) {
    errors.push("Nome do evento é obrigatório");
  }

  if (!event.date) {
    errors.push("Data do evento é obrigatória");
  }

  if (!event.location) {
    errors.push("Local do evento é obrigatório");
  }

  if (!event.description) {
    errors.push("Descrição do evento é obrigatório");
  }

  if (!event.expectedPublic || event.expectedPublic < 1) {
    errors.push("Público esperado é obrigatório");
  }

  if (!event.image) {
    errors.push("Imagem do evento é obrigatória");
  }

  if (!event.imageBackground) {
    errors.push("Imagem de fundo do evento é obrigatória");
  }

  return errors;
}
