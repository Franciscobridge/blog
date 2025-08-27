interface MessageProps { }

export default function Message({ }: MessageProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5 px-10">
      <h1 className="text-2xl lg:text-3xl text-prussian-500 font-bold text-center">Complete a frase para desvendar* o enigma</h1>
      <div className="flex flex-col p-5 w-auto h-auto bg-prussian-700 rounded-2xl gap-5">
        <div className="flex gap-3 items-center">
          <h2 className="text-prussian-500 font-bold">miney e...</h2>
          <input autoFocus type="text" className="flex border border-prussian-100 rounded-lg flex-1 h-10 outline-0 text-center font-bold text-prussian-500/80" placeholder="Digite a palavra" />
        </div>
        <button className="bg-prussian-500 text-prussian-100 w-full h-12 rounded-xl text-[18px] duration-200 transition-colors hover:bg-prussian-600">Verificar</button>
      </div>
    </div>
  );
}
