import { HStack, Skeleton } from "@chakra-ui/react"

const GenreSkeleton = () => {
  return (
    <HStack paddingY="5px">
        <Skeleton height="32px" width="32px" borderRadius={8} />
        <Skeleton height="12px" width="80px" borderRadius={20}/>
    </HStack>
  )
}

export default GenreSkeleton