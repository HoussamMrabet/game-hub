import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";

const GameGrid = () => {
  const {games, error, isLoading} = useGames();
  const skeletons = [1,2,3,4,5,6,7,8,9,10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding='10px'>
        {isLoading && skeletons.map(Skeleton => <GameCardSkelton key={Skeleton}/>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
