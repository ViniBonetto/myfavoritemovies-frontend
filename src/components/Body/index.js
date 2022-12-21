import { Container, FilterContainer, MoviesContainer,
     Input, ButtonYear, ButtonName, ButtonCountry } from "./styles";
import Card from "../Card";
import { useCallback, useEffect, useMemo, useState } from "react";


export default function Body(props) {
    const { dados } = props;
    const [searchMovie, setSearchMovie] = useState("");
    const [orderBy, setOrderBy] = useState("Ano de Lançamento");
    const [movies, setMovies] = useState(dados);

    function onChangeSearchMovieHandle(event) {
        setSearchMovie(event.target.value);
    }

    const filteredMovies = useMemo(() => movies.filter((movie) => (
        movie.name.toLowerCase().includes(searchMovie.toLowerCase())
    )), [searchMovie, movies])

    const handleOrderBy = useCallback((event) => {
        setOrderBy(event.target.textContent)
        if(event.target.textContent === "Ano de Lançamento") {
            let data = filteredMovies.sort(function (a, b) {
                return parseInt(a.year) - parseInt(b.year)
            })
            setMovies(data);
        } else if(event.target.textContent === "Nome") {
            let data = filteredMovies.sort(function (x, y) {
                let a = x.name.toUpperCase(),
                    b = y.name.toUpperCase();
                return a == b ? 0 : a > b ? 1 : -1;
            });
            setMovies(data);
        } else if(event.target.textContent === "País") {
            let data = filteredMovies.sort(function (x, y) {
                let a = x.country.toUpperCase(),
                    b = y.country.toUpperCase();
                return a == b ? 0 : a > b ? 1 : -1;
            });
            setMovies(data);
    }}, [filteredMovies])

    useEffect(() => {
        let data = filteredMovies.sort(function (a, b) {
            return parseInt(a.year) - parseInt(b.year)
        })
        setMovies(data);
    }, []);

    return (
        <Container >
            <FilterContainer >
                <h1>Filtros</h1>
                <Input>
                    <label>
                        Pesquisar filme
                    </label>
                    <input type="text" value={searchMovie} onChange={onChangeSearchMovieHandle}></input>
                </Input>
                <h2>Ordenar por</h2>
                <ButtonYear orderBy={orderBy} onClick={handleOrderBy}>Ano de Lançamento</ButtonYear>
                <ButtonName orderBy={orderBy} onClick={handleOrderBy}>Nome</ButtonName>
                <ButtonCountry orderBy={orderBy} onClick={handleOrderBy}>País</ButtonCountry>
            </FilterContainer>
            <MoviesContainer>
            {filteredMovies.map((movie) => 
            <Card
             key={movie.name}
             name={movie.name}
             thumb={movie.thumb}
             principal={movie.principal}
             country={movie.country}
             year={movie.year}
            />
            )}
            </MoviesContainer>
        </Container>
    )
}