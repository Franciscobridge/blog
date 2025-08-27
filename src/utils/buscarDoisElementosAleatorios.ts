export function buscarDoisElementosAleatorios(arr: any) {
	const copia = [...arr];
	const elemento1 = copia.splice(
		Math.floor(Math.random() * copia.length),
		1
	)[0];
	const elemento2 = copia.splice(
		Math.floor(Math.random() * copia.length),
		1
	)[0];
	return [elemento1, elemento2];
}
