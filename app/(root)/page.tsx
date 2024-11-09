import StartupCard from "@/components/startupCard";
import SearchForm from "../../components/searchForm";

export interface Startup {
  _id: number;
  views: number;
  _createdAt: string;
  description: string;
  title: string;
  category: string;
  image: string;
  author: { _id: number; name: string; image: string };
}
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _id: 1,
      views: 55,
      _createdAt: new Date(),
      description: "This is description",
      title: "We Robots",
      category: "Robots",
      image:
        "https://media.istockphoto.com/id/2039918088/photo/happy-african-american-woman-using-tablet-on-a-cozy-sofa-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=a124M439yRMrnReLVn91U6BgfIDGVMiJDZCTpBAgib8=",
      author: {
        _id: 1,
        name: "DJ",
        image:
          "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
      },
    },
    {
      _id: 2,
      views: 55,
      _createdAt: new Date(),
      description: "This is description",
      title: "We Robots",
      category: "Robots",
      image:
        "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
      author: {
        _id: 1,
        name: "DJ",
        image:
          "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
      },
    },
    {
      _id: 3,
      views: 55,
      _createdAt: new Date(),
      description: "This is description",
      title: "We Robots",
      category: "Robots",
      image:
        "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
      author: {
        _id: 1,
        name: "DJ",
        image:
          "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
      },
    },
    {
      _id: 4,
      views: 55,
      _createdAt: new Date(),
      description: "This is description",
      title: "We Robots",
      category: "Robots",
      image:
        "https://media.istockphoto.com/id/2039918088/photo/happy-african-american-woman-using-tablet-on-a-cozy-sofa-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=a124M439yRMrnReLVn91U6BgfIDGVMiJDZCTpBAgib8=",
      author: {
        _id: 1,
        name: "DJ",
        image:
          "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
      },
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup,
          <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups  "}
        </p>

        <ul className="mt-7 card_grid sm:card_grid-sm">
          {posts?.length > 0 ? (
            posts.map((post: Startup) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
