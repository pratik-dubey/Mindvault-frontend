import { Delete } from "../../icons/delete";
import { Share } from "../../icons/shareIcon";

interface cardProps {
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

export function Card(props: cardProps) {
  return (
    <div>
      <div className="p-4 bg-white-100 rounded-md border-gray-300 shadow-md border max-w-72 min-h-48 min-w-72 ">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="pr-6 text-gray-500">
              <Share size="md" />
            </div>
            {props.title}
          </div>
          <div className="flex items-center">
            <div className="pr-3 text-gray-500">
              <a href={props.link} target="_blank">
                <Share size="md" />
              </a>
            </div>
            <div className="text-gray-500">
              <Delete size="md" />
            </div>
          </div>
        </div>

        <div className="pt-4">
          {/* here we are using link.replace(a,b) to replace a particular part like here watch with embed*/}
          {props.type === "youtube" && (
            <iframe
              className="w-full"
              src={props.link.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {/* to embed a tweet we first copied its link and also pasted its widget in index.html */}
          {props.type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={props.link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}

// import { useEffect } from "react";
// import { Delete } from "../../icons/delete";
// import { Share } from "../../icons/shareIcon";

// interface cardProps {
//   title: string;
//   link: string;
//   type: "Youtube" | "Twitter";
// }

// export function Card(props: cardProps) {
//   useEffect(() => {
//     if (props.type === "Twitter" && (window as any).twttr) {
//       (window as any).twttr.widgets.load();
//     }
//   }, [props.type, props.link]);

//   return (
//     <div>
//       <div className="p-4 bg-white-100 rounded-md border-gray-300 shadow-md border max-w-72 min-h-48 min-w-72 ">
//         <div className="flex justify-between">
//           <div className="flex items-center text-md">
//             <div className="pr-6 text-gray-500">
//               <Share size="md" />
//             </div>
//             {props.title}
//           </div>
//           <div className="flex items-center">
//             <div className="pr-3 text-gray-500">
//               <a href={props.link} target="_blank">
//                 <Share size="md" />
//               </a>
//             </div>
//             <div className="text-gray-500">
//               <Delete size="md" />
//             </div>
//           </div>
//         </div>

//         <div className="pt-4">
//           {/* YouTube Embed */}
//           {props.type === "Youtube" && (
//             <iframe
//               className="w-full"
//               src={props.link.replace(
//                 /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=/,
//                 "https://www.youtube.com/embed/"
//               )}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           )}

//           {/* Twitter Embed */}
//           {props.type === "Twitter" && (
//             <blockquote className="twitter-tweet">
//               <a href={props.link.replace("x.com", "twitter.com")}></a>
//             </blockquote>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
