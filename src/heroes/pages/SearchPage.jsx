import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string';
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const {q = ''} = query;

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Enter text to search</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              value={searchText}
              className="form-control"
              placeholder="Enter text"
              onChange={onInputChange}
              autoComplete="off"
            />
            <button className="btn btn-dark mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '')
            ? <div className="alert alert-primary">Please search hero...</div>
            : (heroes.length === 0)
              ? <div className="alert alert-danger">No results for {q}. Try again</div>
              : <div className="alert alert-success">{heroes.length} results for {q}</div>
          }
          
          
        </div>
      </div>
      <div className="row mt-4 mb-4">
        {heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
