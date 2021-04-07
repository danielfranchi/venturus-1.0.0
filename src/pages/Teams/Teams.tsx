import Header from "../../components/Header/Header";
import CreateTeam from "../../components/CreateTeam/CreateTeam";
import Footer from "../../components/Footer/Footer";

import "./Teams.css";

const Teams = () => {
  return (
    <div className="container-page-teams">
      <Header />
      <CreateTeam />
      <Footer />
    </div>
  );
};

export default Teams;
