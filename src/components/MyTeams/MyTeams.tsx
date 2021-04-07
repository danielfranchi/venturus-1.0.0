import React, { useState } from "react";
import Card from "../Card/Card";

import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ItemTeam, dataTeam } from "../../store/ducks/reducerTeam/types";
import { getTeam, deleteTeam, editTeam } from "../../store/ducks/reducerTeam/action";

import HighestAvgAge from "../Tables/HighestAvgAge";
import LowestAvgAge from "../Tables/LowestAvgAge";

import axios from "axios";
import "./MyTeams.css";

const MyTeams = () => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState<Boolean>(false);
  const [ids, setIds] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [teamModal, setTeamModal] = useState<Boolean>(false);
  const [settingsTeams, setSettingsTeams] = useState<any>(null);

  const teams = useSelector((state: dataTeam) => state.team.arrayTeam);

  const sorted = (e: any) => {
    if (e.target.innerText === "Name") {
      let sortedTeam: any = [...teams];
      sortedTeam.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      dispatch(getTeam(sortedTeam));
    }

    if (e.target.innerText === "Description") {
      let sortedTeam: any = [...teams];
      sortedTeam.sort((a: any, b: any) => {
        if (a.description < b.description) {
          return -1;
        }
        if (a.description > b.description) {
          return 1;
        }
        return 0;
      });
      dispatch(getTeam(sortedTeam));
    }
  };

  const remove = (id: any) => {
    axios.delete(`http://localhost:4000/team/${id}`).then((resposta) => {
      if (resposta.status === 200 || resposta.status === 201) {
        dispatch(deleteTeam(id));
      }
    });
  };

  const toEdit = (id: any) => {
    setIds(id);
    if (teamModal === false) {
      setEdit(true);
    }
  };

  const toUpdate = () => {
    const requsicao = {
      name: name,
      description: description,
    };

    axios
      .patch(`http://localhost:4000/team/${ids}`, requsicao)
      .then((resposta) => {
        console.log(resposta.data);
        if (resposta.status === 200) {
          dispatch(editTeam(resposta.data));
        }
      });

    setEdit(false);
    setName("");
    setDescription("");
  };

  const teamsModal = (id: any) => {
    setTeamModal(!teamModal);
    const settings = teams.filter((itens: any) => {
      return itens.id === id;
    });

    setSettingsTeams(settings);
  };

  return (
    <div className="myTeams">
      <div className="myTeamsMenu">
        <h2 style={{ color: "royalblue" }}>My teams</h2>
        <NavLink to="/teams" exact className="navLink">
          +
        </NavLink>

        <table className="myTeamsTable">
          <thead>
            <tr>
              <th>
                <button onClick={sorted}>
                  {" "}
                  <strong className="my-teams-button">Name</strong>{" "}
                </button>
              </th>
              <th>
                <button onClick={sorted}>
                  <strong className="my-teams-button">Description</strong>{" "}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {teams !== null &&
              teams.map((items: ItemTeam) => (
                <tr key={items.id}>
                  <td className="pointer" onClick={() => teamsModal(items.id)}>
                    {items.name}
                  </td>
                  <td>{items.description}</td>
                  <td>
                    <button onClick={() => remove(items.id)}>
                      <MdDelete />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => toEdit(items.id)}>
                      <FiEdit3 />
                    </button>
                  </td>
                  <td>
                    <button>
                      <AiOutlineShareAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {edit === true && (
          <div>
            <input
              className="myTeamsInput"
              type="text"
              id="name"
              value={name}
              placeholder="team"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="myTeamsInput"
              type="text"
              id="description"
              value={description}
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <div>
              <button className="teamsEdit" onClick={toUpdate}>
                To update
              </button>
              <button className="teamsEdit" onClick={() => setEdit(false)}>
                close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="table">
        <h2 style={{ color: "royalblue" }}>Top 5</h2>

        <div className="tableDiv">
          <HighestAvgAge title="Highest avg age" />
          <LowestAvgAge title="Lowest avg age" />
        </div>

        <Card />
      </div>

      {teamModal === true && (
        <div className="modal">
          <h2 style={{ color: "royalblue" }}>Team Configuration</h2>
          {settingsTeams !== null &&
            settingsTeams.map((item: ItemTeam) => (
              <div key={item.id} className="settings">
                <span>
                  <strong>Team:</strong> {item.name}
                </span>{" "}

                <span>
                  <strong>Description:</strong> {item.description}{" "}
                </span>{" "}

                <span>
                  <strong>Type:</strong> {item.type}
                </span>{" "}

                <span>
                  <strong>Formation:</strong> {item.formation} <strong>Site:</strong>{" "}
                  {item.site}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MyTeams;
