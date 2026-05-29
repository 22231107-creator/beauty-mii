import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Hero />
      <div className="row">
        <div className="column">
          <h3>Skincare</h3>
          <p>Natural ingredients for healthy, glowing skin.</p>
        </div>
        <div className="column">
          <h3>Makeup</h3>
          <p>Bold colors and smooth textures.</p>
        </div>
        <div className="column">
          <h3>Natural Beauty</h3>
          <p>Cruelty‑free and eco‑friendly products.</p>
        </div>
      </div>
    </>
  );
}

export default Home;