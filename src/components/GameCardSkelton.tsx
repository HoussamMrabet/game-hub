import { CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkelton = () => {
  return (
    <>
        <Skeleton height={{sm: "400px", md: "300px", lg: "200px", xl: "180px"}}/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </>
  )
}

export default GameCardSkelton