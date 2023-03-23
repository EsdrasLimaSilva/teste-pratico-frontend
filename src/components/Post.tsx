interface Props {
   title: string;
   body: string;
   id: number;
}

const Post = ({ title, body, id }: Props) => {
   const formatedBoty = body.length > 100 ? body.slice(0, 100) + "..." : body;

   return (
      <div className="min-w-[250px] w-[250px] shrink-0 h-80  bg-white p-2 shadow-md flex flex-col gap-2">
         <div className="bg-green-600 w-full h-32" />
         <h2 className="font-bold text-md ">
            <a href={`/post/${id}`}>{title}</a>
         </h2>
         <p className="text-sm">{formatedBoty}</p>
      </div>
   );
};

export default Post;
