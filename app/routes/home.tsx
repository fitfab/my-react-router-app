import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "React Router7" }, { name: "description", content: "Welcome to React Router 7" }];
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to React Router 7</h1>
      <p>
        This is a simple example of a React Router 7 app. It demonstrates how to use the new hooks API to create a
        simple app with routing.
      </p>
    </div>
  );
}
