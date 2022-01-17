import * as React from 'react';
import Galaxy from '../components/galaxyImage';
import Layout from '../components/layout';
// markup
function IndexPage() {
  return (
    <Layout>
      <main className="grid grid-cols-12 grid-rows-layout">
        <title className="font-title">Milky way</title>
        <h1 className="row-start-2 col-start-4 col-span-6 self-center text-center text-6xl text-five">MILKY WAY</h1>
        <div className="row-start-4 col-span-6 p-5 self-center text-center font-paragraph text-">
          <h2 className="text-4xl mx-20 pb-10 border-b-2 border-b-five text-five">The Milky Way is the galaxy that includes our Solar System</h2>
          <div className="bg-seven mt-10">
            <div className="p-10">
              <p className="border border-one text-one p-5 font-bold">
                With the name describing the galaxy`&apos;`s appearance from Earth: a hazy band
                of light seen in the night sky formed from stars that cannot be individually distinguished by the
                naked eye. The term Milky Way is a translation of the Latin via lactea, from
                the Greek γαλακτικός κύκλος (galaktikos kýklos), meaning `&quot;`milky circle.`&quot;`
              </p>
            </div>
            {/* From Earth, the Milky Way appears as a band because its disk-shaped
            structure is viewed from within. Galileo Galilei first resolved the band of
            light into individual stars with his telescope in 1610. Until the early 1920s,
            most astronomers thought that the Milky Way contained all the stars in the
            Universe. Following the 1920 Great Debate between the astronomers Harlow
            Shapley and Heber Curtis, observations by Edwin Hubble showed that the
            Milky Way is just one of many galaxies.The Milky Way is a barred spiral galaxy
            with an estimated visible diameter of 100,000–200,000 light-years. Recent
            simulations suggest that a dark matter disk, also containing some visible
            stars, may extend up to a diameter of almost 2 million light-years. The
            Milky Way has several satellite galaxies and is part of the Local Group of
            galaxies, which form part of the Virgo Supercluster, which is itself a
            component of the Laniakea Supercluster. It is estimated to contain 100–
            400 billion stars and at least that number of planets. The
            Solar System is located at a radius of about 27,000 light-years from the
            Galactic Center, on the inner edge of the Orion Arm, one of the spiral-
            shaped concentrations of gas and dust. The stars in the innermost 10,000 light-
            years form a bulge and one or more bars that radiate from the bulge. The
            galactic center is an intense radio source known as Sagittarius A*, a
            supermassive black hole of 4.100 (± 0.034) million solar masses. Stars and
            gases at a wide range of distances from the Galactic Center orbit at
            approximately 220 kilometers per second. The constant rotational speed appears
            to contradict the laws of Keplerian dynamics and suggests that much (about 90%)
            of the mass of the Milky Way is invisible to telescopes, neither
            emitting nor absorbing electromagnetic radiation. This conjectural mass has
            been termed `&quot;`dark matter`&quot;`. The rotational period is about 240 million years
            at the radius of the Sun. The Milky Way as a whole is moving at a velocity
            of approximately 600 km per second with respect to extragalactic frames of
            reference. The oldest stars in the Milky Way are nearly as old as the Universe
            itself and thus probably formed shortly after the Dark Ages of the Big Bang. */}
          </div>
        </div>
        <Galaxy className="row-start-4 col-start-7 col-span-6 p-5 self-center justify-self-center -z-10" src="milkyway.png" alt="Milky way" />
      </main>
    </Layout>
  );
}

export default IndexPage;
