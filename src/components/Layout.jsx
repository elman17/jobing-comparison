import { Box, Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Box sx={{ backgroundColor: '#f4f5f7', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },  
            gap: 3,
            py: 3,
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}