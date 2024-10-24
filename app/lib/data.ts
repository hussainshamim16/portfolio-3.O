import {
  FaGithub,
  FaLinkedin,
  FaDumbbell,
  FaPlaneDeparture,
  FaEnvelope,
  FaBookOpen,
} from 'react-icons/fa6'
import { PiTennisBallFill } from 'react-icons/pi'
import html from '@/public/html.png'
import css from '@/public/css.png'
import flask from '@/public/flask.png'
import typescript from '@/public/typescript.png'
import react from '@/public/react.png'
import next from '@/public/next.png'
import tailwind from '@/public/tailwind.png'
import node from '@/public/node.png'
import express from '@/public/express.png'
import mongodb from '@/public/mongo.png'
import javascript from '@/public/javascript.png'
import c from '@/public/c.png'
import firebase from '@/public/icons8-firebase-480.png'
import python from '@/public/python.png'
import git from '@/public/git.png'
import maria from '@/public/maria.png'
import mysql from '@/public/mysql.png'
import vscode from '@/public/vscode.png'
import eclipse from '@/public/eclipse.png'
import postman from '@/public/postman.png'
import sql from '@/public/sql.png'
import prisma from '@/public/prisma.png'
import villa from '@/public/villa.png'
import warriors from '@/public/warriors.png'
import boxd from '@/public/boxd.png'
import atcq from '@/public/atcq.png'
import vercel from '@/public/vercel.png'
import split from '@/public/split.png'
import spotlefy from '@/public/spotlefy.png'
import spotify from '@/public/spotify.png'
import cinefindPersonal from '@/public/cinefind_me.png'
import tmdb from '@/public/tmdb.png'
import jinja from '@/public/jinja.png'
import cron from '@/public/cron.png'
import reddit from '@/public/reddit.png'
import gater from '@/public/gater.png'
import Bootstrap from '@/public/Bootstrap.png'
import discogs from '@/public/discogs.png'
import rpi from '@/public/rpi.png'
import materialUI from '@/public/material.png'
import vinylBot from '@/public/vinyl-bot.png'
import temp from '@/public/temp.png'
import giants from '@/public/giants.png'
import amc from '@/public/amc.png'
import lifetime from '@/public/lifetime.png'
import sjsu from '@/public/sjsu.png'
import cinefindLogo from '@/public/cinefind-logo.png'
import figma from '@/public/figma.png'
import niners from '@/public/49ers.png'
import codding from '@/public/cooood.png'
import naat from '@/public/quran.png'
import CRICKET from '@/public/cricket.png'
import cycling from '@/public/cycling.png'
import urban from '@/public/urban 3.png'
import greeni from '@/public/green Portfolio.png'
import quiz from '@/public/quiz app.png'
import angler from '@/public/angloer.png'

export const links = [
  {
    hash: '#home',
    label: 'Home',
  },
  {
    hash: '#about',
    label: 'About',
  },
  {
    hash: '#skills',
    label: 'Skills',
  },
  {
    hash: '#projects',
    label: 'Projects',
  },
  {
    hash: '#experience',
    label: 'Experience',
  },
  {
    hash: '#contact',
    label: 'Contact',
  },
] as const

export const socials = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/hussainshamim16/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/hussainshamim16',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:hussainshamimdev@gmail.com',
  },
] as const

export const interests = [
  {
    name: 'Coding',
    image: codding,
  },
  {
    name: 'Cricket',
    image: CRICKET,
  },
  {
    name: 'Cycling',
    image: cycling,
  },
  {
    name: 'Tennis',
    icon: PiTennisBallFill,
  },
  {
    name: 'Fitness',
    icon: FaDumbbell,
  },
  {
    name: 'Learning',
    image: boxd,
    href: 'https://letterboxd.com/aross2010/',
  },
  {
    name: `Naat's`,
    image: naat,
  },
  {
    name: 'Reading',
    icon: FaBookOpen,
  },
  // {
  //   name: 'Traveling',
  //   icon: FaPlaneDeparture,
  // },
] as const

export const skills = [
  {
    name: 'HTML',
    image: html,
  },
  {
    name: 'CSS',
    image: css,
  },
  {
    name: 'JavaScript',
    image: javascript,
  },
  {
    name: 'React',
    image: react,
  },
  {
    name: 'Next.js',
    image: next,
  },
  {
    name: 'material Ui',
    image: materialUI,
  },
 
  {
    name: 'Tailwind',
    image: tailwind,
  },
  {
    name: 'Bootstrap',
    image: Bootstrap,
  },
  {
    name: 'Git',
    image: git,
  },
  {
    name: 'Firebase',
    image: firebase,
  },
] as const

export const projects = [
  {
    name: 'Urban Bazaar',
    image: urban,
    description:
      'An eCommerce web application built using React. Designed for a seamless and user-friendly shopping experience, ',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: react,
        alt: 'react',
      },
      {
        src: tailwind,
        alt: 'tailwind',
      },
    ],
    link: 'https://ubazaar.netlify.app/',
    code: 'https://github.com/hussainshamim16/urbanBazar',
  },
  {
    name: 'Vinyl Bot',
    image: angler,
    description:
      'This Educational Website serves as a comprehensive solution for students looking to further their education. ',
    tech: [
      {
        src: javascript,
        alt: 'javascript',
      },
      {
        src: firebase,
        alt: 'firebase',
      },
      {
        src: Bootstrap,
        alt: 'Bootstrap',
      },
    ],
    link: "https://theanglophilecenter.netlify.app/",
    code: 'https://github.com/hussainshamim16/tester.com',
  },
  {
    name: 'Js Quiz App',
    image: quiz,
    description:
      'Step into a world of JavaScript discovery with our beautifully designed quiz app, tailored for both budding programmers and seasoned developers.',
    tech: [
      {
        src: html,
        alt: 'html',
      },
      {
        src: css,
        alt: 'css',
      },
      {
        src: Bootstrap,
        alt: 'Bootstrap',
      },
      {
        src: javascript,
        alt: 'js',
      }
    ],
    link: 'https://quizliy.netlify.app/',
    code: 'https://github.com/hussainshamim16/quizliy',
  },
  {
    name: 'Greeni Portfolio',
    image: greeni,
    description:
      'This Advanced Portfolio is a modern web development project built entirely using HTML, CSS, and JavaScript.',
    tech: [
     
      {
        src: html,
        alt: 'html',
      },
      {
        src: css,
        alt: 'css',
      },
      {
        src: javascript,
        alt: 'js',
      }
      
    ],
    link: "https://hussainshamim16.github.io/new-portfolio/",
    code: 'https://github.com/hussainshamim16/new-portfolio',
  },
]

export const experiences = [
  {
    title: 'Wordpress Developer',
    subtitle: 'AMC Theatres',
    image: amc,
    dates: 'Mar. 2022 - Aug. 2022',
    description:
      'Managed theatre operations including recruiting and hiring, team scheduling, training, inventory, and team developement.',
  },
  {
    title: 'Front End Developer',
    subtitle: 'Cinefind',
    image: cinefindLogo,
    dates: 'Jun. 2023 - Aug. 2024',
    description:
      'Led development overhaul on the company website with Next.js for optimized performance and SEO. In addition, I managed backend database communication with MongoDB and Prisma and implemented user authentication.',
  },
 
  {
    title: 'Full Stack Developer',
    subtitle: 'Saylani Mass It Training',
    image: sjsu,
    dates: 'Feb. 2025 (in progress)',
    description:
      'Gained significant experience leading teams on a diverse range of software development projects using SDLC methodologies.',
    gpa: 3.8,
  },

  {
    title: 'Basketball Instructor',
    subtitle: 'Lifetime Activities',
    image: lifetime,
    dates: 'Jul. 2024 - present',
    description:
      'Developed and implemented basketball curriculum for children ages 5-14. Instructed and coached children in basketball fundamentals and team play.',
  },
]

export const footerLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/hussainshamim16/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/hussainshamim16',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:hussainshamimdev@gmail.com',
  },
] as const
