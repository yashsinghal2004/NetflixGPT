export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};
export const POSTER_URL = "https://image.tmdb.org/t/p/w780";
export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "english" },
  { identifier: "hindi", name: "hindi" },
  { identifier: "spanish", name: "spanish" },
  { identifier: "french", name: "french" },
  { identifier: "german", name: "german" },
  { identifier: "italian", name: "italian" },
  { identifier: "japanese", name: "japanese" },
  { identifier: "korean", name: "korean" },
  { identifier: "chinese", name: "chinese" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
//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
