"use client"

import { FiMoreHorizontal } from "react-icons/fi";
import { Avatar, AvatarText } from "./avatar";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IPost } from "@/utils/data";
import { useState } from "react";
import { buscarIniciais } from "@/utils/buscarIniciais";

export interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {

  const [like, setLike] = useState(false)
  function InsertLike() {
    setLike(!like)
  }

  return (
    <div className="w-11/12 2lg:max-w-2xl 2xl:max-w-3xl lg:-ml-32 md:max-w-xl border border-prussian-200/80 h-auto p-5 gap-4 rounded-2xl bg-prussian-800 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar color={post.color}>
            <AvatarText>{buscarIniciais(post.author)}</AvatarText>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="font-bold text-base">{post.author}</h1>
            <p className="text-base text-prussian-200 -mt-1">sem data</p>
          </div>
        </div>
        <button className="size-8 items-center justify-center flex duration-200 transition hover:bg-prussian-300/30 rounded-lg">
          <FiMoreHorizontal size={24} className="text-prussian-200" />
        </button>
      </div>
      <p>{post.content}</p>
      {post.image_url != null && (
        <img
          src={post.image_url}
          className="w-full h-auto object-cover rounded-2xl"
          alt="imagem do post"
        />
      )}
      <div className="flex items-center justify-around">
        <button
          onClick={InsertLike}
          className="flex items-center justify-center gap-2 border-0 text-prussian-200 transition duration-200 hover:bg-prussian-900/50 rounded-md w-full py-1.5 max-sm:text-sm">
          {like ? <AiFillLike size={24} className="fill-prussian-600" /> : <AiOutlineLike size={24} className="text-prussian-200" />}
          Gostei
        </button>
        <button className="flex items-center justify-center gap-2 border-0 text-prussian-200 transition duration-200 hover:bg-prussian-900/50 rounded-md w-full py-1.5 max-sm:text-sm">
          <FaRegMessage className="text-prussian-200 mt-1" size={21} />
          Comentar
        </button>
        <button className="flex items-center justify-center gap-2 border-0 text-prussian-200 transition duration-200 hover:bg-prussian-900/50 rounded-md w-full py-1.5 max-sm:text-sm">
          <FaShare className="text-prussian-200" size={24} />
          Partilhar
        </button>
      </div>
    </div>
  );
}
