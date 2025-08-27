
import { Avatar, AvatarText } from "@/components/avatar";
import { MdEmojiEmotions, MdInsertPhoto } from "react-icons/md";
import { FaUserTag } from "react-icons/fa6";
import { Post } from "@/components/post";
import { Tabs } from "@/components/tabs";
import Header from "@/components/header";
import { Sugestoes } from "@/components/sugestoes";
import { posts } from "@/utils/data";

export default function Home() {
  return (
    <div className="flex w-full h-auto items-center justify-center gap-7 flex-col pb-24">

      <Header />
      <Sugestoes />

      <div className="bg-prussian-800 border p-4 border-prussian-200/80 w-11/12 h-40 mt-24 rounded-2xl lg:-ml-32 md:max-w-xl 2lg:max-w-2xl 2xl:max-w-3xl">
        <div className="flex items-center w-full gap-4">
          <Avatar>
            <AvatarText>AV</AvatarText>
          </Avatar>
          <div
            className="flex flex-1 items-center px-5 py-2.5 bg-prussian-600/20 rounded-3xl h-10 focus-within:bg-prussian-100 focus-within:border-2 focus-within:
          border-prussian-600"
          >
            <input
              type="text"
              className="flex w-full h-full bg-transparent outline-0 text-prussian-900 placeholder:text-prussian-200"
              placeholder="O que se passa, Seu nome?"
            />
          </div>
        </div>

        <div className="flex w-full h-0.5 bg-prussian-300 my-5"></div>

        <div className="flex items-center justify-around">
          <button className="flex items-center justify-center gap-1 border-0  text-prussian-200 transition duration-200 hover:bg-prussian-900/50 rounded-md  w-full py-1.5 max-sm:text-sm">
            <MdInsertPhoto className="text-green-500" size={24} />
            Fotos/Vídeos
          </button>
          <button className="flex items-center justify-center gap-1 border-0  text-prussian-200 transition duration-200 hover:bg-prussian-900/50 rounded-md  w-full py-1.5 max-sm:text-sm">
            <FaUserTag className="text-blue-600" size={24} />
            Marcar
          </button>
          <button className="flex items-center justify-center gap-1 border-0  text-prussian-200 transition duration-200 hover:bg-prussian-900/50 rounded-md  w-full py-1.5 max-sm:text-sm">
            <MdEmojiEmotions className="text-amber-400" size={24} />
            Actividade
          </button>
        </div>

      </div>

      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}

      <Tabs />
    </div>
  );
}
