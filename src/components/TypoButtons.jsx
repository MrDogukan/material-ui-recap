import { Typography, Container, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <div>
      <Container>
        <Typography
          variant="h2"
          align="center"
          component="h4"
          color="primary"
          sx={{
            background: "pink",
            margin: "auto",
            border: "2px solid gray",
            mb: 3,
          }}
        >
          Start from here
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, magnam
          ab temporibus optio ea, explicabo veniam iste distinctio quidem beatae
          ex eveniet totam necessitatibus laborum omnis quia a doloremque
          tenetur?
        </Typography>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Button variant="contained" color="secondary" startIcon={<SendIcon />}>
          Click
        </Button>
        <Button variant="outlined" endIcon={<DeleteIcon />}>
          Send
        </Button>
      </Box>
    </div>
  );
};

export default TypoButtons;
