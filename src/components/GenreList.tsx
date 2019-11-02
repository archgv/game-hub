import useGenres, { Genre } from '../hooks/useGenres';
import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelecteGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelecteGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	if (error) return null;

	if (isLoading) return <Spinner />;
	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
						<Button onClick={() => onSelecteGenre(genre)} fontSize="lg" variant="Link">
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
