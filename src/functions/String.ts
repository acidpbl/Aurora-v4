export function capitalize(str: string) {
  const modStr = str[0].toUpperCase() + str.slice(1);
  return modStr;
}

export function ellipsis(texto: string, maxCaracteres: number): string {
  if (texto.length > maxCaracteres) {
    return texto.substring(0, maxCaracteres) + "...";
  } else {
    return texto;
  }
}
