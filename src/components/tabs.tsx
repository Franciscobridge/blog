import Link from "next/link";
import { FaSearch, FaUserCircle, FaUsers } from "react-icons/fa";
import { FaBell, FaCommentDots } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";

interface TabsProps { }

export function Tabs({ }: TabsProps) {
  return (
    <div className="flex fixed bottom-6 mx-auto items-center gap-4 border border-prussian-200/80 py-2 px-4 rounded-full backdrop-blur-2xl bg-prussian-950/70">
      <div className="flex items-center justify-center flex-col gap-2 relative group">
        <span className="absolute -top-6 p-1 bg-prussian-950/60 z-10 text-xs rounded hidden group-hover:flex">Início</span>
        <Link
          href={"/"}
          className="flex size-10 items-center justify-center rounded-full duration-200 transition bg-prussian-100 text-prussian-900"
        >
          <AiFillHome size={24} />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col gap-2 relative group">
        <span className="absolute -top-6 p-1 bg-prussian-950/80 z-10 text-xs rounded hidden group-hover:flex">Mensagens</span>
        <Link
          href={"/message"}
          className="flex size-10 items-center justify-center rounded-full duration-200 transition group-hover:scale-150 "
        >
          <FaCommentDots size={24} />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col gap-2 relative group">
        <span className="absolute -top-6 p-1 bg-prussian-950/80 z-10 text-xs rounded hidden group-hover:flex">Notificações</span>
        <Link
          href={"/"}
          className="flex size-10 items-center justify-center rounded-full duration-200 transition group-hover:scale-150 "
        >
          <FaBell size={24} />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col gap-2 relative group">
        <span className="absolute -top-6 p-1 bg-prussian-950/80 z-10 text-xs rounded hidden group-hover:flex">Pesquisar</span>
        <Link
          href={"/"}
          className="flex size-10 items-center justify-center rounded-full duration-200 transition group-hover:scale-150 "
        >
          <FaSearch size={24} />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col gap-2 relative group">
        <span className="absolute -top-6 p-1 bg-prussian-950/80 z-10 text-xs rounded hidden group-hover:flex">Amigos</span>
        <Link
          href={"/"}
          className="flex size-10 items-center justify-center rounded-full duration-200 transition group-hover:scale-150 "
        >
          <FaUsers size={24} />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col gap-2 relative group">
        <span className="absolute -top-6 p-1 bg-prussian-950/80 z-10 text-xs rounded hidden group-hover:flex">Perfil</span>
        <Link
          href={"/"}
          className="flex size-10 items-center justify-center rounded-full duration-200 transition group-hover:scale-150 "
        >
          <FaUserCircle size={24} />
        </Link>
      </div>
    </div>
  );
}
