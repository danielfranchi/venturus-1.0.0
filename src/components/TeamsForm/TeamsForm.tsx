import React, { useRef, useState } from "react";
import SearchPlayers from "../SearchPlayers/SearchPlayers";

import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTeam } from "../../store/ducks/reducerTeam/action";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import "./TeamsForm.css";

const TeamsForm = () => {
  const dispatch = useDispatch();

  const name = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const site = useRef<HTMLInputElement>(null);

  const [select, setSelect] = useState<any>("");
  const [home, setHome] = useState<Boolean>(false);
  const [radio, setRadio] = useState<string>("");
  const [inputColor, setInputColor] = useState("#000000");

  const handleSubimt = (e: any) => {
    e.preventDefault();

    interface Input {
      name: string | undefined;
      description: string | undefined;
      type: string | undefined;
      formation: string | undefined;
      site: string | undefined;
    }
    const requisicao: Input = {
      name: name.current?.value,
      description: description.current?.value,
      type: radio,
      formation: select,
      site: site.current?.value,
    };

    if (
      requisicao.name !== "" &&
      requisicao.description !== "" &&
      requisicao.site !== ""
    ) {
      axios
        .post("http://localhost:4000/team", requisicao)
        .then((resposta) => dispatch(addTeam(resposta.data)));

      setHome(true);
    } else {
      setInputColor("#ed1b66");
      toast.error("campo obrigatório");
    }
  };

  return (
    <div className="time-form">
      <Toaster position="top-center" reverseOrder={true} />
      
      <div className="grid-title">
        <h4>TEAM INFORMATION</h4>
      </div>

      <div className="grid-form">
        <form onSubmit={handleSubimt}>
          <label className="label">Team name</label>
          <br />

          <input
            type="text"
            placeholder="team name"
            ref={name}
            required
            style={{
              borderColor: inputColor,
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          />
          <br />

          <label className="label">Description</label>
          <br />

          <textarea
            name="text"
            cols={30}
            rows={10}
            placeholder="description"
            ref={description}
            style={{
              borderColor: inputColor,
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          />
        </form>
      </div>

      <div className="grid-title2">
        <h4>CONFIGURE SQUAD</h4>
      </div>

      <div className="grid-form2">
        <form className="form-two" onSubmit={handleSubimt}>
          <label className="label">Formation </label>
          <select
            id="produtos"
            value={select}
            onChange={(e: any) => setSelect(e.target.value)}
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="3-2-2-3">3-2-2-3</option>
            <option value="3-2-3-1">3-2-3-1</option>
            <option value="3-4-3">3-4-3</option>
            <option value="3-5-2">3-5-2</option>
            <option value="4-2-3-1">4-2-3-1</option>
            <option value="4-3-1-1">4-3-1-1</option>
            <option value="4-3-2">4-3-2</option>
            <option value="4-4-2">4-4-2</option>
            <option value="4-5-1">4-5-1</option>
            <option value="5-4-1">5-4-1</option>
          </select>
          <br />

          <button className="grid-button" type="submit">
            Save
          </button>
        </form>
      </div>

      <div className="grid-form3">
        <form onSubmit={handleSubimt}>
          <label className="label">Team WebSite</label>
          <br />
          <input
            type="url"
            placeholder="http://myteam.com"
            required
            ref={site}
            style={{
              borderColor: inputColor,
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          />
          <br />
          <label className="label">Team Type</label> <br />
          <label>
            <input
              checked={radio === "real"}
              value="real"
              type="radio"
              style={{ width: "10px" }}
              onChange={(e) => setRadio(e.target.value)}
            />
            Real
          </label>
          <label>
            <input
              checked={radio === "fantasy"}
              value="fantasy"
              type="radio"
              style={{ width: "10px" }}
              onChange={(e) => setRadio(e.target.value)}
            />
            Fantasy
          </label>
          <br />
          <label className="label">Tags</label> <br />
          <textarea name="" id="" cols={30} rows={5}></textarea>
        </form>
      </div>

      <div className="grid-search">
        <SearchPlayers />
      </div>

      {home !== false && <Redirect to="/" />}
    </div>
  );
};

export default TeamsForm;
