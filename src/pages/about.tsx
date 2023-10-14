import React from 'react';

import Image from 'next/image';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main
    meta={
      <Meta title="About Me" description="A little bit about Michael Capecci" />
    }
  >
    <Content>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src="/profile-picture.jpg"
          loader={({ src }) => `https://ik.imagekit.io/gib0zkfpk${src}`}
          width={300}
          height={300}
          alt="Michael's profile picture"
        />
      </div>

      <p>
        Hello! I am a software engineer based in Chicago, Illinois, with a focus
        on problem-solving and a proficiency in JavaScript, TypeScript, and
        React for web development. My career has centered around creating
        exceptional web experiences.
      </p>

      <p>
        E-commerce is a field I am particularly passionate about. I find
        satisfaction in witnessing the direct impact of my code on online
        shopping experiences. I have enjoyed numerous opportunities to
        contribute to this sector.
      </p>

      <p>
        Recently, I&apos;ve been exploring technologies like React Native, which
        extend the reach of web experiences to mobile platforms. This expansion
        allows me to make my work more accessible and impactful.
      </p>

      <p>
        In addition to my technical skills, I maintain a strong sense of
        curiosity and a commitment to keeping pace with the evolving tech
        industry. I am eager to tackle new challenges, expand my knowledge, and
        create meaningful digital solutions.
      </p>

      <p>
        If you&apos;d like to discuss technology, e-commerce, or engage in a
        conversation about the latest innovations, please feel free to reach
        out. I am eager to explore the vast possibilities of the digital world.
      </p>
    </Content>
  </Main>
);

export default About;
