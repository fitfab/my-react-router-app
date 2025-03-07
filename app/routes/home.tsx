import { Carousel } from "~/components/carousel"
import { addressTable } from "~/db/schema"
import { db } from "~/db/supabase-client"
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Miguel Julio Developer" },
    { name: "description", content: "Welcome to React Router 7" },
  ]
}

export async function loader({ request }: Route.LoaderArgs) {
  const result = await db.select().from(addressTable)
  console.log(result)
  return {}
}

export async function action({ request }: Route.LoaderArgs) {
  return { message: "Hello from action" }
}

export default function Home({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const data = [
    {
      src: "https://source.unsplash.com/480x320?sports",
      alt: "This is an image",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "480px",
      height: "320px",
    },
    {
      src: "https://source.unsplash.com/collection/190727/280x320",
      alt: "This is an image",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "280px",
      height: "320px",
    },
    {
      src: "https://source.unsplash.com/320x320?city",
      alt: "fixedwidth",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "320px",
      height: "320px",
    },
    {
      src: "https://source.unsplash.com/780x320?sports",
      alt: "This is an image",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "780px",
      height: "320px",
    },
    {
      src: "https://source.unsplash.com/random/420x320",
      alt: "This is an image",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "420px",
      height: "320px",
    },
    {
      src: "https://source.unsplash.com/320x320?nature,water",
      alt: "This is an image",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "320px",
      height: "320px",
    },
    {
      src: "https://source.unsplash.com/collection/190727/196x320",
      alt: "This is an image",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "196px",
      height: "320px",
    },
    {
      src: "https://source.unsplash.com/collection/190727/780x320",
      alt: "fixedwidth",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "780px",
      height: "320px",
    },

    {
      src: "https://source.unsplash.com/collection/190725/480x320",
      alt: "fixedwidth",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "480px",
      height: "320px",
    },
    {
      src: "https://source.unsplash.com/collection/190726/280x320",
      alt: "fixedwidth",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "280px",
      height: "320px",
    },
    {
      src: "https://source.unsplash.com/collection/190727/780x320",
      alt: "fixedwidth",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "780px",
      height: "320px",
    },
    {
      src: "https://source.unsplash.com/random/480x320",
      alt: "This is an image",
      caption:
        "Em eratemquam ut offi cium eos elignimusam latur. Conestrum necae di dio eiusapis si sus.it millaciis asit quodit ea voluptat.",
      width: "480px",
      height: "320px",
    },
  ]
  console.log(loaderData)
  return (
    <div className="">
      <p className="text-xl font-light text-decorator m-30 max-w-140">
        Front-End Web Developer with a flair for design — committed to creating
        websites that meet design and technical requirements — including SEO,
        Usability and accessibility based on web standards guidelines.
      </p>
      <h1>Welcome to My Route with Props!</h1>
      <p>Loader Data: {JSON.stringify(loaderData, null, 2)}</p>

      <Carousel width="84%" height="432px">
        {data.map((card, index) => (
          <div
            key={index}
            className="border-1 border-neutral-300 rounded-md p-6 w-[480px] overflow-hidden bg-white"
          >
            <h2 className="text-1xl uppercase font-extrabold text-gray-600 underline  decoration-brand mb-4 decoration-4">
              {card.alt}
            </h2>
            <img
              src={card.src}
              alt={card.alt}
              width={card.width}
              height={card.height}
            />
            <p className="">{card.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
