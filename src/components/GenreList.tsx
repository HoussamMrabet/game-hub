import { HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
        <Heading fontSize="2xl" marginY={3}>Genres</Heading>
        <List paddingY="10px">
        {isLoading || error
            ? skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)
            : data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                <HStack>
                    <Image
                    boxSize="32px"
                    borderRadius={8}
                    objectFit="cover"
                    src={getCroppedImageUrl(genre.image_background)}
                    />
                    <Text onClick={()=>onSelectGenre(genre)} fontSize="lg" fontWeight={genre.id === selectedGenre?.id ? "bold":"normal"} cursor="pointer">{genre.name}</Text>
                </HStack>
                </ListItem>
            ))}
        </List>
    </>
  );
};

export default GenreList;
