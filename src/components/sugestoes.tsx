import { buscarDoisElementosAleatorios } from "@/utils/buscarDoisElementosAleatorios";
import { Avatar, AvatarText } from "./avatar";
import { IPost, posts } from "@/utils/data"
import { buscarIniciais } from "@/utils/buscarIniciais";

export function Sugestoes() {
  const sugestoes: IPost[] = buscarDoisElementosAleatorios(posts)

  return (
    <div className="lg:flex hidden flex-col fixed rounded-xl xl:right-15 right-10 gap-5 top-24 border border-prussian-200/70 p-5 bg-prussian-800 w-60 h-48 2lg:w-60 3lg:w-64 3xl:w-72">
      <div>
        <h1 className="flex text-xl font-bold">Sugestões</h1>
      </div>
      <div className="flex flex-col gap-4">
        {sugestoes.map(sugestao => (
          <div key={sugestao.id} className="flex items-center justify-between gap-2">
            <div className="flex w-full gap-2 items-center">
              <Avatar color={sugestao.color}>
                <AvatarText>{buscarIniciais(sugestao.author)}</AvatarText>
              </Avatar>
              <h1 className="font-bold">{sugestao.author}</h1>
            </div>
            <button className="flex border-0 bg-prussian-500 rounded-xl py-0.5 px-3 text-sm transition duration-200 hover:bg-prussian-600">
              Seguir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
