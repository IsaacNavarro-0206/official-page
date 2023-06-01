import { FaLinkedin, FaHome, FaGithubSquare, FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { ButtonContained } from '@makinox/makinox-ui';

import { UserType } from '@/utils';

const classes = {
  imageContainer: cn('flex justify-center p-2'),
  imageWrapper: cn('flex bg-primary-100 w-32 h-32 justify-center items-center rounded-full'),
  link: cn('p-2'),
  icons: 20,
};

export const Speakers = ({ speakers }: { speakers: Array<UserType> }) => {
  const [showAll, setShowAll] = useState(false);

  const resultSpeakers = showAll ? speakers : speakers?.slice(0, 6);

  return (
    <section className="pt-20 container mx-auto">
      <h2 className="text-3xl">Nuestros heroes</h2>
      <p>Los charlistas que nos hacen crecer compartiendo su conocimiento</p>

      <div className="flex justify-center md:justify-between flex-wrap mt-8">
        {resultSpeakers?.map((speaker) => {
          const hasPhoto = speaker?.image?.url !== undefined;

          return (
            <article className="relative flex flex-col justify-center border-2 border-primary-100 w-40 min-h-40 rounded-md m-4" key={speaker.name}>
              {hasPhoto ? (
                <div className={classes.imageContainer}>
                  <div className={classes.imageWrapper}>
                    <Image src={speaker.image.url} alt={`Charlista ${speaker.name}`} width={112} height={112} className="rounded-full" />
                  </div>
                </div>
              ) : (
                <div className={classes.imageContainer}>
                  <div className={classes.imageWrapper}>
                    <FaUserAlt size={40} />
                  </div>
                </div>
              )}
              <div className="p-2 text-center truncate">
                <span>{speaker.name}</span>
              </div>
              <div className="flex justify-center h-10">
                {speaker?.homePage && (
                  <a className={classes.link} href={speaker.homePage} target="_blank" rel="noreferrer" aria-label={`Pagina web de ${speaker.name}`}>
                    <FaHome size={classes.icons} />
                  </a>
                )}
                {speaker?.githubLink && (
                  <a className={classes.link} href={speaker.githubLink} target="_blank" rel="noreferrer" aria-label={`Github de ${speaker.name}`}>
                    <FaGithubSquare size={classes.icons} />
                  </a>
                )}
                {speaker?.linkedinLink && (
                  <a className={classes.link} href={speaker.linkedinLink} target="_blank" rel="noreferrer" aria-label={`Linkedin de ${speaker.name}`}>
                    <FaLinkedin size={classes.icons} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        {showAll ? (
          <button className={ButtonContained()} onClick={() => setShowAll(false)}>
            Mostrar menos
          </button>
        ) : (
          <button className={ButtonContained()} onClick={() => setShowAll(true)}>
            Mostrar más
          </button>
        )}
      </div>
    </section>
  );
};
