import React from 'react';

export default function Footer({ textAttributionWikipedia }) {
  return (
    <footer className="bg-three w-full sticky top-[100vh] mt-10 py-1 text-center text-seven">
      <div className="text-base">
        A concept by
        <a href="https://andreagraglia.gatsbyjs.io/" className="text-two">&nbsp;Andrea Graglia</a>
      </div>
      <div className="text-xs">
        This article uses material from the Wikipedia article
        <a href={`https://en.wikipedia.org/wiki/${textAttributionWikipedia}`}>
          &nbsp;
          {textAttributionWikipedia}
          &nbsp;
        </a>
        , which is released under the
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">&nbsp;Creative Commons Attribution-Share-Alike License 3.0</a>
      </div>
    </footer>
  );
}
