import Image from 'next/image';

const HomeImage = ({ containerStyles, imageSource }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src={imageSource} fill priority alt="" className="rounded-lg object-cover" />
    </div>
  );
};

export default HomeImage;