import { colorName } from "./colors";

export interface IPost {
	id: string;
	author: string;
	created_at: Date;
	content: string;
	color?: colorName;
	image_url?: string | null;
}

export const posts: IPost[] = [
	{
		id: "1",
		author: "Joana Silva",
		created_at: new Date("2025-08-17T10:15:00"),
		content:
			"Que dia lindo para um passeio no parque! Adorando o sol e a natureza.🌳☀️ #paz #natureza",
		image_url: "/app-logo.png",
		color: "yellow",
	},
	{
		id: "2",
		author: "Carlos Pereira",
		created_at: new Date("2025-08-17T10:15:00"),
		content:
			"Finalmente terminei o meu novo projecto de programação. Foi um desafio, mas o resultado ficou incrivel. Quem quiser dar uma olhada o link está na minha bio. 💻 #programação #dev #react",
		image_url: null,
		color: "blue",
	},
	{
		id: "3",
		author: "Fernanda Lopes",
		created_at: new Date("2025-08-17T10:15:00"),
		content:
			"Acabei de ler um livro incrível sobre autoconhecimento.Recomendo muito para quem quer crescer pessoalmente! 📚✨ #leitura #autoconhecimento",
		image_url: null,
		color: "green",
	},
	{
		id: "4",
		author: "Rafael Costa",
		created_at: new Date("2025-08-17T10:15:00"),
		content:
			"Hoje foi dia de maratona de séries! Alguém tem recomendações para o próximo fim de samana? 🍿🎬 #séries #dicas",
		image_url: null,
		color: "red",
	},
	{
		id: "5",
		author: "Luiza Martins",
		created_at: new Date("2025-08-17T10:15:00"),
		content:
			"Fiz um bolo de cenoura delicioso! Se algu[em quiser a receita só pedir. 🍰🥕 #culinaria #bolo",
		image_url: "/app-logo.png",
		color: "yellow",
	},
];
