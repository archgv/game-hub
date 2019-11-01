import React from 'react';
import useGenres, { Genre } from '../hooks/useGenres';
import { Button, HStack, Image, Link, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelecteGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelecteGenre }: Props) => {
	const { genres, isLoading, error } = useGenres();
	if (error) return null;

	if (isLoading) return <Spinner />;
	return (
		<List>
			{genres.map((genre) => (
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
