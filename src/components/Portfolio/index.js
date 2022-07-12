import React, { useState, useEffect } from "react";

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/mitchgeorge8/repos?per_page=100"
        );
        const result = await response.json();
        const sorted = result.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });

        setRepoData(sorted);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <>
        <h2 className="text-xl md:text-3xl">Portfolio</h2>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <h2 className="text-xl md:text-3xl">Portfolio</h2>

      <div>
        {repoData.map((repo) => (
          <div key={repo.id} className="">
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <h3>{repo.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
