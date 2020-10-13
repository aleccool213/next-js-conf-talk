function PageSSRNext93({ stars }) {
  return <div>Next stars: {stars}</div>
}

PageSSRNext93.getServerSideProps = async (context) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default PageSSRNext93