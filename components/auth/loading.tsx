import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col gap-y-4 justify-center items-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
        objectFit="cover"
      />
    </div>
  );
};
