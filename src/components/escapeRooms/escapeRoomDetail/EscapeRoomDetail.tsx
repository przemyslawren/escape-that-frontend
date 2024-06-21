import React, { useEffect, useState } from 'react';
import { EscapeRoomDetailsType } from '../../../types/types';
import { fetchEscapeRoomDetails } from '../../../api/api';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';

interface EscapeRoomDetailsProps {
  escapeRoomDetails: EscapeRoomDetailsType;
}

const EscapeRoomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [escapeRoomDetails, setEscapeRoomDetails] =
    useState<EscapeRoomDetailsType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const escapeRoomDetails = await fetchEscapeRoomDetails(id);
        setEscapeRoomDetails(escapeRoomDetails);
      } catch (error) {
        setError('Error fetching escape room details. Please try again later.');
        console.error('Error fetching escapeRoomDetails: ', error);
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Escape Room Details</h1>
      {escapeRoomDetails && (
        <Box>
          <Typography variant="h4">{escapeRoomDetails.name}</Typography>
          <Typography variant="body1">
            {escapeRoomDetails.description}
          </Typography>
          <Typography variant="body1"></Typography>
          <Typography variant="body1">
            Difficulty: {escapeRoomDetails.difficultyLevel}
          </Typography>
          <Typography variant="body1">
            Theme: {escapeRoomDetails.roomTheme.themeName}
          </Typography>
          <Typography variant="body1">
            Theme description: {escapeRoomDetails.roomTheme.description}
          </Typography>
          <Typography variant="body1">
            Address: {escapeRoomDetails.address.city},{' '}
            {escapeRoomDetails.address.street},{' '}
            {escapeRoomDetails.address.postalCode}
          </Typography>
          <Typography variant="body1">
            Safety requirements: {escapeRoomDetails.safetyRequirements}
          </Typography>
          <Typography variant="body1">
            Minimum players: {escapeRoomDetails.playerRange.minPlayers}
          </Typography>
          <Typography variant="body1">
            Maximum players: {escapeRoomDetails.playerRange.maxPlayers}
          </Typography>
          <Typography variant="body1">
            Price: {escapeRoomDetails.basePrice} zł
          </Typography>
          <Divider sx={{ margin: 2 }} />
          <Button>Book the room</Button>
        </Box>
      )}
    </div>
  );
};

export default EscapeRoomDetail;
