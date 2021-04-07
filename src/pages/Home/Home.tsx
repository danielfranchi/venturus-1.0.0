import React, { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MyTeams from "../../components/MyTeams/MyTeams";

import { useDispatch } from "react-redux";
import { getTeam } from "../../store/ducks/reducerTeam/action";
import { getPlayers } from "../../store/ducks/ReducerPlayers/action";

import axios from "axios";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/team")
      .then((resposta) => dispatch(getTeam(resposta.data)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    axios
      .get("http://localhost:4000/player")
      .then((resposta) => dispatch(getPlayers(resposta.data)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='container-home'>
      <Header />
      <MyTeams />
      <Footer />
    </div>
  );
};

export default Home;
