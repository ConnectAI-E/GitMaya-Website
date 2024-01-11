import type { FC } from 'react';

import React from 'react';
import { Compass, Github } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@components/button';

interface ActionProps {}

const Actions: FC<ActionProps> = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="cta-container inline-flex justify-center gap-3.5">
        <Button
          asChild
          className="hero-join-button group relative mx-auto  w-fit overflow-hidden rounded-xl p-[1px] font-bold transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#fff8] md:mr-0 lg:mr-auto dark:block"
          variant="outline"
        >
          <Link href="/explore">
            <span className="inline-flex h-full w-fit items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300 dark:bg-neutral-900 dark:text-white group-hover:dark:bg-black">
              <Github className="h-4 w-4" />
              Try with your github
            </span>
          </Link>
        </Button>
      </div>
      <div style={{ marginTop: '2rem' }} />
      <a
        href=""
        style={{
          color: 'inherit',
          opacity: 0.7,
          fontSize: 14
        }}
        target="_blank"
      >
        Learn more details →
      </a>
    </div>
  );
};

export default Actions;
