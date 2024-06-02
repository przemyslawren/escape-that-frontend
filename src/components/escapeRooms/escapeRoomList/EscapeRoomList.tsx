import React, { useEffect, useState } from 'react';
import { EscapeRoomSimpleType } from '../../../types/types';
import { fetchSimpleEscapeRooms } from '../../../api/api';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EscapeRoomCard from './escapeRoomCard/EscapeRoomCard';

interface SimpleEscapeRoomsProps {
  simpleEscapeRooms: EscapeRoomSimpleType[];
}

const EscapeRoomList = () => {
  const [simpleEscapeRooms, setSimpleEscapeRooms] = useState<
    EscapeRoomSimpleType[] | null
  >(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const simpleEscapeRooms = await fetchSimpleEscapeRooms();
        setSimpleEscapeRooms(simpleEscapeRooms);
      } catch (error) {
        setError('Error fetching escape rooms. Please try again later.');
        console.error('Error fetching simpleEscapeRooms: ', error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {simpleEscapeRooms ? (
        <DisplayEscapeRooms simpleEscapeRooms={simpleEscapeRooms} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const DisplayEscapeRooms: React.FC<SimpleEscapeRoomsProps> = ({
  simpleEscapeRooms,
}) => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom align="center">
        Escape Rooms
      </Typography>
      <Grid container spacing={4}>
        {simpleEscapeRooms ? (
          simpleEscapeRooms.map((escapeRoom) => (
            <Grid
              item
              key={escapeRoom.id}
              xs={12}
              sm={12}
              md={6}
              lg={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <EscapeRoomCard escapeRoom={escapeRoom} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default EscapeRoomList;
