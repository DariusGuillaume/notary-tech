import Image from 'next/image'

const HomeImage = ({ containerStyles, imageSource }) => {
  return (
    <div className={containerStyles}>
      <Image src={imageSource} fill priority alt='' />
    </div>
  )
}

export default HomeImage