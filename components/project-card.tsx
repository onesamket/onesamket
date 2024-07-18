import { ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

type Props = {
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
  languages: string[];
  sourceCodeUrl: string;
  previewUrl: string;
};

export default function ProjectCard({
  description,
  imageUrl,
  languages,
  previewUrl,
  sourceCodeUrl,
  title,
}: Props) {
  return (
    <div className="w-full md:max-w-[375px] flex flex-col space-y-2 shadow overflow-hidden rounded-[10px] pb-5">
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-[264px] rounded-t-[10px] object-fill   shadow hover:scale-105 transition-all delay-200 ease-out  "
      />
      {/* title and description  */}
      <div className="flex flex-col flex-1 px-3 ">
        <h2 className="text-justify   w-full text-xl  font-bold ">{title}</h2>
        <p className="text-justify">{description}</p>
      </div>
      {/* badges  */}
      <div className="px-3 w-full flex-1 my-3 mb-3 flex flex-wrap gap-1">
        {languages.slice(0, 3).map((lang, index) => (
          <Badge key={index}>{lang}</Badge>
        ))}
      </div>

      {/* links */}
      <div className="flex justify-between items-center  px-3">
        <Link href={sourceCodeUrl}>
          <Github className="w-5 h-5" />
        </Link>
        <Link href={previewUrl}>
          <ExternalLink className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
