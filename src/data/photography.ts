import type { ImageMetadata } from 'astro';
import landscape1 from '../assets/photography/landscape-1.jpg';
import landscape2 from '../assets/photography/landscape-2.jpg';
import landscape3 from '../assets/photography/landscape-3.jpg';
import landscape4 from '../assets/photography/landscape-4.jpg';
import travel1 from '../assets/photography/travel-1.jpg';
import travel2 from '../assets/photography/travel-2.jpg';
import travel3 from '../assets/photography/travel-3.jpg';
import travel4 from '../assets/photography/travel-4.jpg';
import birds1 from '../assets/photography/birds-1.jpg';
import birds2 from '../assets/photography/birds-2.jpg';
import birds3 from '../assets/photography/birds-3.jpg';
import birds4 from '../assets/photography/birds-4.jpg';
import people1 from '../assets/photography/people-1.jpg';
import people2 from '../assets/photography/people-2.jpg';
import people3 from '../assets/photography/people-3.jpg';
import people4 from '../assets/photography/people-4.jpg';
import events1 from '../assets/photography/events-1.jpg';
import events2 from '../assets/photography/events-2.jpg';
import events3 from '../assets/photography/events-3.jpg';
import events4 from '../assets/photography/events-4.jpg';

export interface PhotoItem {
    id: string;
    title: string;
    alt: string;
    src?: ImageMetadata;
    /** Placeholder aspect ratio when `src` is not yet provided. */
    aspect?: '3 / 2' | '4 / 3' | '4 / 5' | '16 / 9';
    location?: string;
    date?: string;
    camera?: string;
    lens?: string;
    settings?: string;
}

export interface PhotoCategory {
    slug: 'landscapes' | 'travels' | 'birds' | 'people' | 'events';
    title: string;
    summary: string;
    coverIndex?: number;
    photos: PhotoItem[];
}

export const photoCategories: PhotoCategory[] = [
    {
        slug: 'landscapes',
        title: 'Landscapes',
        summary: 'Ridges, trails, and quiet light.',
        photos: [
            {
                id: 'landscapes-1',
                title: 'Landscapes 01',
                alt: 'Mountain range rising behind a calm alpine lake',
                src: landscape1,
                location: 'Lake Tekapo, New Zealand',
                date: 'Oct 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 16–55mm f/2.8',
                settings: '28mm · f/8 · 1/250s · ISO 125',
            },
            {
                id: 'landscapes-2',
                title: 'Landscapes 02',
                alt: 'Sunlit mountain peaks and forested slopes',
                src: landscape2,
                location: 'Dolomites, Italy',
                date: 'Sep 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 16–55mm f/2.8',
                settings: '35mm · f/9 · 1/320s · ISO 125',
            },
            {
                id: 'landscapes-3',
                title: 'Landscapes 03',
                alt: 'Dramatic mountain valley with a winding road and cabin',
                src: landscape3,
                location: 'Lofoten, Norway',
                date: 'Jun 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 23mm f/2',
                settings: '23mm · f/7.1 · 1/500s · ISO 160',
            },
            {
                id: 'landscapes-4',
                title: 'Landscapes 04',
                alt: 'Layered mountain ridges under a warm orange sky with long shadows',
                src: landscape4,
                location: 'Zillertal Alps, Austria',
                date: 'Aug 2024',
                camera: 'Fujifilm X-T5',
                lens: 'XF 50–140mm f/2.8',
                settings: '95mm · f/8 · 1/160s · ISO 200',
            },
        ],
    },
    {
        slug: 'travels',
        title: 'Travels',
        summary: 'Streets, coastlines, and places in passing.',
        photos: [
            {
                id: 'travels-1',
                title: 'Travels 01',
                alt: 'People walking along a European street lined with historic buildings',
                src: travel1,
                location: 'Prague, Czechia',
                date: 'May 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 23mm f/2',
                settings: '23mm · f/4 · 1/640s · ISO 160',
            },
            {
                id: 'travels-2',
                title: 'Travels 02',
                alt: 'Quiet city street beside warm stone facades in daytime light',
                src: travel2,
                location: 'Bologna, Italy',
                date: 'Apr 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 35mm f/1.4',
                settings: '35mm · f/5.6 · 1/500s · ISO 125',
            },
            {
                id: 'travels-3',
                title: 'Travels 03',
                alt: 'Roadside view along a European town street',
                src: travel3,
                location: 'Ghent, Belgium',
                date: 'Nov 2024',
                camera: 'Fujifilm X-T5',
                lens: 'XF 23mm f/2',
                settings: '23mm · f/4 · 1/400s · ISO 320',
            },
            {
                id: 'travels-4',
                title: 'Travels 04',
                alt: 'Colorful building facade with rows of shuttered windows and balconies',
                src: travel4,
                location: 'Lisbon, Portugal',
                date: 'Mar 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 35mm f/1.4',
                settings: '35mm · f/5.6 · 1/800s · ISO 125',
            },
        ],
    },
    {
        slug: 'birds',
        title: 'Birds',
        summary: 'Long glass, patience, and quick frames.',
        photos: [
            {
                id: 'birds-1',
                title: 'Birds 01',
                alt: 'Small wild bird perched on a tree branch',
                src: birds1,
                location: 'De Hoge Veluwe, Netherlands',
                date: 'Feb 2026',
                camera: 'Fujifilm X-T5',
                lens: 'XF 150–600mm f/5.6–8',
                settings: '520mm · f/8 · 1/1250s · ISO 800',
            },
            {
                id: 'birds-2',
                title: 'Birds 02',
                alt: 'Two birds perched together on a slender branch',
                src: birds2,
                location: 'Oostvaardersplassen, Netherlands',
                date: 'Jan 2026',
                camera: 'Fujifilm X-T5',
                lens: 'XF 150–600mm f/5.6–8',
                settings: '600mm · f/8 · 1/1000s · ISO 640',
            },
            {
                id: 'birds-3',
                title: 'Birds 03',
                alt: 'Small white bird resting on a tree branch',
                src: birds3,
                location: 'Biesbosch, Netherlands',
                date: 'Nov 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 150–600mm f/5.6–8',
                settings: '460mm · f/7.1 · 1/1600s · ISO 500',
            },
            {
                id: 'birds-4',
                title: 'Birds 04',
                alt: 'White bird in flight against a clear blue sky',
                src: birds4,
                location: 'Texel, Netherlands',
                date: 'Sep 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 150–600mm f/5.6–8',
                settings: '600mm · f/8 · 1/2500s · ISO 400',
            },
        ],
    },
    {
        slug: 'people',
        title: 'People',
        summary: 'Candid portraits, natural light, and everyday moments.',
        photos: [
            {
                id: 'people-1',
                title: 'People 01',
                alt: 'Portrait of a man in warm golden outdoor light',
                src: people1,
                location: 'Utrecht, Netherlands',
                date: 'Sep 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 56mm f/1.2',
                settings: '56mm · f/2 · 1/640s · ISO 160',
            },
            {
                id: 'people-2',
                title: 'People 02',
                alt: 'Smiling man holding a morning coffee mug outdoors in greenery',
                src: people2,
                location: 'Amersfoort, Netherlands',
                date: 'Jul 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 35mm f/1.4',
                settings: '35mm · f/2.8 · 1/400s · ISO 125',
            },
            {
                id: 'people-3',
                title: 'People 03',
                alt: 'Group of friends walking and laughing along a city storefront',
                src: people3,
                location: 'Amsterdam, Netherlands',
                date: 'Jan 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 23mm f/2',
                settings: '23mm · f/2.8 · 1/500s · ISO 400',
            },
            {
                id: 'people-4',
                title: 'People 04',
                alt: 'Two friends standing together on a sunlit city street',
                src: people4,
                location: 'London, United Kingdom',
                date: 'Oct 2024',
                camera: 'Fujifilm X-T5',
                lens: 'XF 35mm f/1.4',
                settings: '35mm · f/2 · 1/800s · ISO 160',
            },
        ],
    },
    {
        slug: 'events',
        title: 'Events',
        summary: 'Stage lights, talks, and evenings with a crowd.',
        photos: [
            {
                id: 'events-1',
                title: 'Events 01',
                alt: 'Concert crowd illuminated by vibrant stage lights',
                src: events1,
                location: 'TivoliVredenburg, Utrecht',
                date: 'Jan 2026',
                camera: 'Fujifilm X-T5',
                lens: 'XF 16–55mm f/2.8',
                settings: '24mm · f/2.8 · 1/250s · ISO 3200',
            },
            {
                id: 'events-2',
                title: 'Events 02',
                alt: 'Large audience watching a live performance under bright stage beams',
                src: events2,
                location: 'Paradiso, Amsterdam',
                date: 'Nov 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 16–55mm f/2.8',
                settings: '32mm · f/2.8 · 1/320s · ISO 2500',
            },
            {
                id: 'events-3',
                title: 'Events 03',
                alt: 'Speaker on stage addressing an audience under a spotlight',
                src: events3,
                location: 'Jaarbeurs, Utrecht',
                date: 'Oct 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 50–140mm f/2.8',
                settings: '85mm · f/2.8 · 1/200s · ISO 1600',
            },
            {
                id: 'events-4',
                title: 'Events 04',
                alt: 'People gathering on an outdoor patio under warm string lights',
                src: events4,
                location: 'Rotterdam, Netherlands',
                date: 'Aug 2025',
                camera: 'Fujifilm X-T5',
                lens: 'XF 23mm f/2',
                settings: '23mm · f/2.2 · 1/160s · ISO 1250',
            },
        ],
    },
];
