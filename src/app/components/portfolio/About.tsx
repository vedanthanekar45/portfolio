export default function About() {
  return (
    <div className="mt-24">
      <h1 className="text-black text-2xl">
        <p>
          Hi, I’m Vedant Thanekar, a final-year Information Technology student
          who enjoys building systems end-to-end, from backend APIs and data
          pipelines to production deployments. I’ve worked on full-stack and
          backend projects involving ETL pipelines, relational databases, and
          cloud infrastructure, and I’m comfortable working in Linux
          environments, debugging complex issues, and making trade-offs that
          keep systems simple and reliable.
        </p>
        <p className="mt-8">
          Apart from tech, I am also interested in Films, TV shows, I also write
          sometimes, I am working on a TV show idea.
        </p>

        <p className="mt-8">
          You can also checkout my{" "}
          <a href="https://boxd.it/7kC6P" className="text-blue-500 underline">
            Letterboxd
          </a>{" "}
          and{" "}
          <a
            href="https://srlzd.com/u/vedanthanekar"
            className="text-blue-500 underline"
          >
            Serializd
          </a>
          .
        </p>
      </h1>
    </div>
  );
}
