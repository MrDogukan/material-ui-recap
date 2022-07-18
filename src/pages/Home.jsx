import ResponsiveAppBar from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/private-theming";
import { deepPurple, pink } from "@mui/material/colors";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: pink[300],
      },
      secondary: {
        main: deepPurple[500],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <TypoButtons />
        <TextFieldComp />
        <CardGrid />
      </ThemeProvider>
    </>
  );
};

export default Home;
