import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container sx={{ mt: { xs: '5px', sm: '20px', zIndex: '999 ' } }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center' }}>
        Welcome to the Phonebook. This app helps you to save and find
        your contacts.
      </Typography>
    </Container>
  );
};

export default HomePage;
