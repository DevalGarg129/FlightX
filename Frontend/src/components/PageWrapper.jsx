import { Container, Box } from "@mui/material";

function PageWrapper({ children }) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 6, mb: 8 }}>{children}</Box>
    </Container>
  );
}

export default PageWrapper;
