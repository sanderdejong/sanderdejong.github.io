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
    slug: 'landscapes' | 'travels' | 'birds';
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
];
