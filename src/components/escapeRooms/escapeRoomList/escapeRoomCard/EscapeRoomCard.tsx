import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { EscapeRoomSimpleType } from '../../../../types/types';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import { CalendarMonth, LocalOffer, StarBorder } from '@mui/icons-material';

interface EscapeRoomCardProps {
  escapeRoom: EscapeRoomSimpleType;
}

const calculateDifficultyLevel = (difficultyLevel: string) => {
  switch (difficultyLevel) {
    case 'BEGINNER':
      return (
        <>
          <StarIcon /> <StarBorder />
          <StarBorder /> <StarBorder /> <StarBorder />
        </>
      );
    case 'INTERMEDIATE':
      return (
        <>
          <StarIcon /> <StarIcon />
          <StarIcon /> <StarBorder /> <StarBorder />
        </>
      );
    case 'ADVANCED':
      return (
        <>
          <StarIcon /> <StarIcon />
          <StarIcon /> <StarIcon /> <StarIcon />
        </>
      );
    default:
      return '';
  }
};

const EscapeRoomCard: React.FC<EscapeRoomCardProps> = ({ escapeRoom }) => {
  return (
    <Link
      to={`/escape-rooms/${escapeRoom.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card
        sx={{
          marginBottom: 2,
          borderRadius: 5,
        }}
      >
        <CardMedia
          component="img"
          image="https://s3.viva.pl/newsy/kadr-z-filmu-pila-monolith-video-430077-MT.jpg"
          alt={escapeRoom.name}
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'nowrap',
              mb: 1,
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
              }}
            >
              Difficulty: {calculateDifficultyLevel(escapeRoom.difficultyLevel)}{' '}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
              }}
            >
              {escapeRoom.roomTheme.themeName}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'nowrap',
              mb: 1,
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
            >
              <PeopleIcon sx={{ mr: 0.5 }} />{' '}
              {escapeRoom.playerRange.minPlayers}-
              {escapeRoom.playerRange.maxPlayers}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
            >
              <AccessTimeIcon sx={{ mr: 0.5 }} /> 60 min
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
            >
              <CalendarMonth sx={{ mr: 0.5 }} /> 16+
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
              }}
            >
              <LocalOffer sx={{ mr: 0.5 }} />
              {escapeRoom.basePrice} - {escapeRoom.basePrice + 200} zł
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'nowrap',
            }}
          ></Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
          >
            Address: {escapeRoom.address.street}, {escapeRoom.address.city}{' '}
            {escapeRoom.address.postalCode}
          </Typography>
        </CardContent>
      </Card>
      <Typography
        variant="h4"
        component="div"
        align="center"
        sx={{ fontWeight: 'bold' }}
      >
        {escapeRoom.name}
      </Typography>
    </Link>
  );
};

export default EscapeRoomCard;
