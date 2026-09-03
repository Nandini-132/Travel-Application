<section className="hero">
  <video
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/travel-video.mp4" type="video/mp4" />
  </video>

  <div className="hero-overlay" />

  <nav>
    <div className="logo">AE Atlas Escape</div>

    <div className="nav-links">
      <a href="#explore">Explore</a>
      <a href="#weather">Weather</a>
      <a href="#about">About</a>
    </div>
  </nav>

  <div className="hero-content">
    <span>A LITTLE FURTHER THAN YOUR USUAL</span>

    <h1>
      Go somewhere
      <em>worth remembering.</em>
    </h1>

    <p>
      Explore remarkable places, check the weather,
      and build a trip around what interests you.
    </p>

    <a href="#explore">
      ↓ Start exploring
    </a>
  </div>
</section>

export const destinations = [
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "Asia",

    lat: 35.0116,
    lon: 135.7681,

    description:
      "Ancient lanes, quiet gardens, tea houses and unforgettable food.",

    vibe: [
      "Culture",
      "Food",
      "Slow travel"
    ],

    bestFor: [
      "History",
      "Temples",
      "Food"
    ],

    places: [
      {
        name: "Fushimi Inari Taisha",
        type: "Shrine",
        description:
          "Walk beneath thousands of vermilion torii gates."
      },
      {
        name: "Kiyomizu-dera",
        type: "Temple",
        description:
          "A hillside temple with sweeping city views."
      }
    ]
  }
];

{destinations.map(destination => (
  <DestinationCard
    key={destination.id}
    destination={destination}
  />
))}

function DestinationCard({ destination }) {
  return (
    <article className="destination-card">

      <div className="destination-image">
        <img
          src={destination.image}
          alt={destination.name}
        />

        <span className="region">
          {destination.region}
        </span>

        <button className="arrow">
          ↗
        </button>
      </div>

      <div className="destination-info">
        <div>
          <h3>{destination.name}</h3>
          <span>{destination.country}</span>
        </div>

        <p>{destination.description}</p>

        <div className="tags">
          {destination.vibe.map(vibe => (
            <span key={vibe}>{vibe}</span>
          ))}
        </div>
      </div>

    </article>
  );
}

const response = await fetch(
  `/api/weather?lat=${lat}&lon=${lon}`
);

const weather = await response.json();

navigator.geolocation.getCurrentPosition(
  position => {
    const { latitude, longitude } = position.coords;

    console.log(latitude, longitude);
  },
  error => {
    console.log("Location permission denied");
  }
);

[
  {
    url: "...",
    photographer: "...",
    photographerUrl: "..."
  }
]

<img
  src={photo:url}
  alt={photo:alt}
>

<small>
  Photo by
  <a href={photo.photographerUrl}>
    {photo.photographer}
  </a>
  on
  <a href={photo.unsplashUrl}>
    Unsplash
  </a>
</small>

const API_KEY = "AIza...";