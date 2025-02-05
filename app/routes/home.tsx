import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "React Router7" }, { name: "description", content: "Welcome to React Router 7" }];
}

export default function Home() {
  return (
    <div className="m-30 max-w-140">
      <p className="text-xl font-light">
        Front-End Web Developer with a flair for design — committed to creating websites that meet design and technical
        requirements — including SEO, Usability and accessibility based on web standards guidelines.
      </p>
    </div>
  );
}
