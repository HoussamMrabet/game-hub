import { CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkelton = () => {
  return (
    <>
        <Skeleton width="100%" minWidth={600} height="200px"/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </>
  )
}

export default GameCardSkelton