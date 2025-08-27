export function buscarIniciais(text: string) {
	const words = text.trim().split(/\s+/);
	if (words.length == 0) return "";
	const primeiraInicial = words[0].charAt(0).toUpperCase();
	if (words.length == 1) return primeiraInicial;
	const ultimaInicial = words[words.length - 1].charAt(0).toUpperCase();
	return primeiraInicial + ultimaInicial;
}
