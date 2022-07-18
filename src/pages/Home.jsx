import ResponsiveAppBar from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
    </>
  );
};

export default Home;
