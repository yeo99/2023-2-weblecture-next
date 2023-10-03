import Link from 'next/link'
import React from 'react'
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa'

const username = 'yeo99'

async function fetchRepo(name) {
  const url = `https://api.github.com/repos/${username}/${name}`
  const response = await fetch(url)
  const repo = await response.json()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return repo
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name)
  return (
    <div>
      <h3 className="text-xl font-bold">
        <Link href={`https://github.com/${username}/${name}`}></Link>
      </h3>
      <p>{repo.description}</p>
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-1">
          <FaStar /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FaCodeBranch /> {repo.forks_count}
        </span>
        <span className="flex items-center gap-1">
          <FaEye /> {repo.watchers_count}
        </span>
      </div>
    </div>
  )
}

export default Repo
