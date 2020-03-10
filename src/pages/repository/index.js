import React, { useState } from 'react';
import { FaSpinner, FaBackward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { Loading, Owner, Back, IssuesList } from './styles';
import Container from '../../components/Container/index';

function Repository({ match }) {
  const repoName = decodeURIComponent(match.params.repo);

  const [repo, setRepo] = useState({});
  const [issuesRepo, setIssuesRepo] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getRepoIssues() {
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    setRepo(repository.data);
    setIssuesRepo(issues.data);
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <Loading loading={loading} render={getRepoIssues()}>
          <FaSpinner />
        </Loading>
      ) : (
        <Container>
          <Link to="/">
            <Back>
              <FaBackward size={18} color="#161616" />
            </Back>
          </Link>
          <Owner>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <h1>{repo.name}</h1>
            <p>{repo.description}</p>
          </Owner>

          <IssuesList>
            {issuesRepo.length !== 0 ? (
              issuesRepo.map(issue => (
                <li key={String(issue.id)}>
                  <img src={issue.user.avatar_url} alt={issue.user.login} />
                  <div>
                    <strong>
                      <a
                        href={issue.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {issue.title}
                      </a>
                      {issue.labels.map(label => (
                        <span key={String(label.id)}>{label.name}</span>
                      ))}
                    </strong>
                    <p>{issue.user.login}</p>
                  </div>
                </li>
              ))
            ) : (
              <h1>Não a issues!</h1>
            )}
          </IssuesList>
        </Container>
      )}
    </>
  );
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repo: PropTypes.string,
    }),
  }).isRequired,
};

export default Repository;
