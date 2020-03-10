import React, { useState, useEffect } from 'react';
import { FaGithubAlt, FaPlusCircle, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Form, SubmitButton, MsgError, List } from './styles';
import Container from '../../components/Container/index';

function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorApi, setErroApi] = useState(false);

  async function handleRepos(e) {
    e.preventDefault();

    setLoading(true);
    setErroApi(false);

    const getRepo = repos.find(getItem => getItem.name === newRepo);

    try {
      if (!getRepo) {
        const response = await api.get(`/repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        };

        setRepos([...repos, data]);
      }
    } catch (error) {
      setErroApi(true);
    }

    setLoading(false);
  }

  useEffect(() => {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      setRepos(JSON.parse(repositories));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repos));
  }, [repos]);

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={handleRepos}>
        <input
          type="text"
          placeholder="Add repo"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlusCircle color="#fff" size={14} />
          )}
        </SubmitButton>
      </Form>
      {errorApi && <MsgError>Repositório não encontrado</MsgError>}

      <List>
        {repos.length > 0 &&
          repos.map(repo => (
            <li key={repo.name}>
              <span>{repo.name}</span>
              <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                More info
              </Link>
            </li>
          ))}
      </List>
    </Container>
  );
}

export default Main;
