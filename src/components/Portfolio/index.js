import React, { useState, useEffect } from "react";

const featured = ["team-profile-generator", "the-tech-blog", "deep-thoughts"];

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
        <h2 className="text-xl md:text-3xl uppercase font-light">Portfolio</h2>
        <div className="pt-6">Loading...</div>
      </>
    );
  }

  const featuredRepos = repoData.filter((repo) => featured.includes(repo.name));

  return (
    <>
      <h2 className="text-xl md:text-3xl uppercase font-light">Portfolio</h2>

      <h3 className="pt-6 pb-2 text-lg md:text-2xl">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        {featuredRepos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white rounded shadow my-2 md:my-0 overflow-hidden"
          >
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <img
                src={require(`../../assets/images/${repo.name}.png`)}
                alt={repo.name.replace("-", " ").slice}
                className="w-full h-48 object-cover"
              ></img>
              <div className="p-2 border-t-2 border-gray-200">
                <span className="block text-lg md:text-xl font-semibold">
                  {repo.name}
                </span>
                <span className="text-xs font-thin uppercase">{`${repo.topics[0]} // ${repo.topics[1]} // ${repo.topics[2]}`}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div>
        <h3 className="pt-4 pb-2 text-lg md:text-2xl">Other Projects</h3>
        <ul className="md:flex md:flex-wrap md:-mx-1 items-center">
          {repoData
            .filter(
              (repo) =>
                !featured.includes(repo.name) && repo.name !== "mitchgeorge8"
            )
            .map((repo) => (
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <li className="rounded shadow bg-white my-2 md:m-1 py-1 px-2 flex justify-between items-center md:block">
                  <span>{repo.name}</span>
                  {repo.topics.length > 0 && (
                    <span className="text-xs font-thin uppercase md:block">
                      {repo.topics[0]}
                    </span>
                  )}
                </li>
              </a>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Portfolio;
