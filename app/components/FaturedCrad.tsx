import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  iconSrc,
  iconAlt,
}) => {
  return (
    <div className="flex flex-col   items-center text-center pt-10">
      <Image src={iconSrc} alt={iconAlt} width={43} height={43} />
      <h3 className="font-bold pb-2 pt-5">{title}</h3>
      <p className="text-center text-sm text-gray-700 p-2 max-w-[350px] ">
        {description}
      </p>
    </div>
  );
};

export default Feature;
