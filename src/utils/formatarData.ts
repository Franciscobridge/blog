import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function formatarData(data: Date): string {
  const agora = dayjs();
  const alvo = dayjs(data);

  const diffMinutos = agora.diff(alvo, "minute");
  const diffHoras = agora.diff(alvo, "hour");
  const diffDias = agora.diff(alvo, "day");

  if (diffMinutos < 1) {
    return "agora mesmo";
  }

  if (diffMinutos < 60) {
    return `${diffMinutos} minutos atrás`;
  }

  if (diffHoras < 24) {
    return `${diffHoras} horas atrás`;
  }

  if (diffDias < 7) {
    return `${diffDias} dias atrás`;
  }

  if (diffDias === 7) {
    return "7 dias atrás";
  }

  // Se passou de 7 dias, retorna a data formatada
  return alvo.format("DD/MM/YYYY HH:mm");
}