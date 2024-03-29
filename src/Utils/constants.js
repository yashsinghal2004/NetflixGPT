export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODFjZTg1MjI0OTE3YmU4NGE3MzBiNjhlZGNiM2U5YyIsInN1YiI6IjY1YTkwMjlhNTVjMWY0MDEyYjg5ZTk5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LqPLLmq3_u99F1XC4-xs0ZxwuQjfHKzZn38hEudaGzU",
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
