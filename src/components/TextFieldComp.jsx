import { Container, Box, TextField, Typography, Button } from "@mui/material";
const TextFieldComp = () => {
  let error = false;
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
          gap: 2,
          mt: 4,
        }}
      >
        <Typography variant="h3" align="center" color="error">
          Ladies First
        </Typography>
        <TextField
          label="email"
          type="email"
          placeholder="enter your email address"
          error={error}
          helperText={error && "Incorrect Email Format"}
        />
        <TextField
          label="password"
          type="password"
          placeholder="enter your password"
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};
export default TextFieldComp;
