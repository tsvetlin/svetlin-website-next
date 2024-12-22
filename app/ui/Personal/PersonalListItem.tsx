import Image from 'next/image';

export default function PersonalListItem({
  personal: { title, description, images },
}: {
  personal: {
    title: string;
    description: string;
    images?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    }[];
  };
}) {
  return (
    <li className="mb-4">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-4 text-gray-400">{description}</p>
      {images && (
        <div className="flex flex-row items-center justify-around">
          {images.map((image) => (
            <div className="h-min overflow-hidden rounded-lg" key={image.src}>
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
