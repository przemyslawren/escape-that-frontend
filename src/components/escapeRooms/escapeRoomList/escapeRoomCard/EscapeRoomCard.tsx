import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { EscapeRoomSimpleType } from '../../../../types/types';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Link } from 'react-router-dom';
import { StarBorder } from '@mui/icons-material';

interface EscapeRoomCardProps {
  escapeRoom: EscapeRoomSimpleType;
}

const calculateDifficultyLevel = (difficultyLevel: string) => {
  switch (difficultyLevel) {
    case 'BEGINNER':
      return <StarIcon />;
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
          <StarIcon />
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
          margin: 0,
          borderRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          image="https://s3.viva.pl/newsy/kadr-z-filmu-pila-monolith-video-430077-MT.jpg"
          alt={escapeRoom.name}
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
            >
              Difficulty: {calculateDifficultyLevel(escapeRoom.difficultyLevel)}{' '}
            </Typography>
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
              <CalendarTodayIcon sx={{ mr: 0.5 }} /> 16+
            </Typography>
          </Box>
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
