import AppLogo from "../../public/app-logo.png";
import { Avatar, AvatarText } from "./avatar";
import { Search } from "lucide-react";

interface HeaderProps { }

export default function Header({ }: HeaderProps) {
  return (
    <header className="w-full h-auto fixed top-0 z-10 py-2 px-4 md:px-14 bg-prussian-700 items-center justify-between flex opacity-95">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <img src="/app-logo.png" alt="logo do site" width={50} height={50} className="rounded-full" />
          <h1 className="text-xl font-bold">Quenny Verse</h1>
        </div>
        <div className="hidden lg:flex bg-prussian-600/30 rounded-lg py-1 px-3 gap-1.5 items-center w-64 focus-within:bg-prussian-100 focus-within:border-2 focus-within:
          border-prussian-600">
          <Search className="text-prussian-200 size-5" />
          <input type="text" className="outline-0 w-full placeholder:text-prussian-200 text-prussian-900" placeholder="Pesquisar" />
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarText>AV</AvatarText>
        </Avatar>
        <h1 className="text-xl font-bold">Quenny Princesa</h1>
      </div>
    </header>
  );
}