import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkelton = () => {
  return (
    <Card width="auto" borderRadius={10} overflow="hidden" >
        <Skeleton width="100%" minWidth={600} height="200px"/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkelton