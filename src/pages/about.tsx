import React from 'react';

import Image from 'next/image';

import profileImage from '../../public/profile.jpg';
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
          src={profileImage}
          width={300}
          height={300}
          alt="Michael's profile picture"
        />
      </div>

      <p>
        Hello! I'm a software engineer hailing from the vibrant city of Chicago,
        Illinois. With a strong penchant for problem-solving and a drive to make
        digital concepts tangible, I've spent my career harnessing the power of
        JavaScript and TypeScript, and crafting exceptional web experiences
        using React.
      </p>

      <p>
        E-commerce has always held a special place in my heart. It's the perfect
        intersection of technology and real-world results, where I can see the
        direct impact of my code in the online shopping experiences that people
        interact with daily. There's something truly satisfying about watching
        lines of code transform into a fully operational online store, and I'm
        grateful for the many opportunities I've had to contribute to this
        exciting field.
      </p>

      <p>
        Recently, I've been delving into the possibilities presented by React
        Native and similar technologies. These technologies have opened up a new
        frontier for me, enabling the translation of web experiences to mobile
        platforms seamlessly. It's another step in making my work even more
        tangible and impactful, as it enters the hands of users worldwide.
      </p>

      <p>
        Beyond my technical skills, I bring to the table a curiosity that never
        stops and a dedication to continually evolving alongside the dynamic
        tech industry. I'm excited to take on new challenges, learn more, and
        create digital solutions that have real, meaningful impacts.
      </p>

      <p>
        If you're interested in talking tech, e-commerce, or just want to chat
        about the latest innovations, don't hesitate to get in touch. Let's
        explore the incredible possibilities the digital world holds together!
      </p>
    </Content>
  </Main>
);

export default About;
