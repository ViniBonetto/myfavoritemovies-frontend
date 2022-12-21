import GlobalStyles from "../assets/styles/global";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../assets/styles/themes/default";
import { Container } from "./styles";
import Header from "../components/Header";
import Body from "../components/Body";
import Interstellar from "../assets/images/interstellar.jpg";
import IlhaDoMedo from "../assets/images/ilha-do-medo.jpg";
import OGrandeTruque from "../assets/images/o-grande-truque.jpg";
import SherlockHolmes from "../assets/images/sherlock-holmes.jpg";
import Fratura from "../assets/images/fratura.jpg";
import SeteVidas from "../assets/images/sete-vidas.jpg";
import OJogoDaImitacao from "../assets/images/o-jogo-da-imitacao.jpg";
import BastardosInglorios from "../assets/images/bastardos-inglorios.jpg";

const movies = [
  {
      name: "Interstellar",
      thumb: Interstellar,
      principal: "Christopher Nolan",
      country: "EUA",
      year: "2014"
  },
  {
      name: "Ilha do Medo",
      thumb: IlhaDoMedo,
      principal: "Martin Scorsese",
      country: "EUA",
      year: "2010"
  },
  {
      name: "O Grande Truque",
      thumb: OGrandeTruque,
      principal: "Christopher Nolan",
      country: "EUA",
      year: "2006"
  },
  {
      name: "Sherlock Holmes",
      thumb: SherlockHolmes,
      principal: "Guy Ritchie",
      country: "Reino Unido",
      year: "2009"
  },
  {
    name: "Fratura",
    thumb: Fratura,
    principal: "Brad Anderson",
    country: "EUA",
    year: "2019"
  },
  {
    name: "Sete Vidas",
    thumb: SeteVidas,
    principal: "Gabriele Muccino",
    country: "EUA",
    year: "2008"
  },
  {
    name: "O Jogo da Imitação",
    thumb: OJogoDaImitacao,
    principal: "Morten Tyldum",
    country: "EUA",
    year: "2014"
  },
  {
    name: "Bastardos Inglórios",
    thumb: BastardosInglorios,
    principal: "Quentin Tarantino",
    country: "EUA",
    year: "2009"
  },
];

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
       <Header/>
       <Body dados={movies}/>
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
