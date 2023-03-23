interface Props {
   username: string;
   body: string;
   email: string;
}

const Comment = ({ username, body, email }: Props) => {
   return (
      <div className="bg-white p-4 my-2 shadow-sm flex flex-col">
         <header className="flex flex-row items-center gap-3 h-[32px] ">
            <h4 className="font-light text-sm mb-4 bg-stone-100">{email}</h4>
         </header>

         <h3 className="font-bold text-md">{username}</h3>
         <p className="text-md">{body}</p>
      </div>
   );
};

export default Comment;
