interface song {
  title: string;
  description: string;
  iframe: JSX.Element;
}

export const iframes: song[] = [
  {
    title: "Our Victory",
    description: "some temp description",
    iframe: (
      <iframe
        src="https://open.spotify.com/embed/track/2V71WGqnoRAKFT3R41jqA3?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    title: "King Jesus Come",
    description: "some temp description",
    iframe: (
      <iframe
        src="https://open.spotify.com/embed/track/5F0dtt47EO8zQzc9zBOjKS?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    title: "Greater Lamb",
    description: "some temp description",
    iframe: (
      <div className="gap-10 flex flex-row">
        <iframe
          src="https://open.spotify.com/embed/track/2XeVAMcBYnXvgfgkLLKPJR?utm_source=generator"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/track/6A5sZJ3i1UoBlBVCk0sN7o?utm_source=generator"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    ),
  },
];
