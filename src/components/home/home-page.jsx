import Link from "next/Link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data?.map((ev) => (
      <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
        <div className="image">
          <Image width={300} height={200} alt={ev.title} src={ev.image} />
        </div>
        <div className="content">
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </div>
      </Link>
    ))}
  </div>
);
