import './AboutMe.css';
export function AboutMe() {
  return (
    <article className="AboutMe">
      <img src="/image.png" alt="Smiley face" />

      <div>
        <h2 className="aboutMe__title">About Me</h2>
        <p className="aboutMe__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </article>
  );
}
