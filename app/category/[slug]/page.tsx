import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {ProductGrid} from '@/components/ui';
import {categories,products,CategorySlug} from '@/lib/data';

const categoryCopy:Record<CategorySlug,string>={
 wireless:'Access points, LTE routers and wireless infrastructure selected around coverage, users and site conditions.',
 networking:'Routers, switches and gateway hardware for reliable LAN, internet and cabinet deployments.',
 'networking-accessories':'Fibre and copper networking accessories selected against device compatibility, speed, connector and link requirements.',
 'network-switches':'PoE network switching options for CCTV, wireless access points, IP phones and business networks.',
 'power-solutions':'Compact backup power options for compatible routers, modems, ONTs and other low-voltage networking devices.',
 security:'IP CCTV and surveillance hardware planned with storage, PoE and facility coverage in mind.',
 'access-control':'Access-control hardware conversations for offices, facilities and managed properties.',
 'computer-accessories':'Structured cabling, accessories and supporting hardware for clean infrastructure projects.'
};

export function generateStaticParams(){return Object.keys(categories).map(slug=>({slug}))}
export default function Page({params}:{params:{slug:string}}){if(!(params.slug in categories))notFound();const slug=params.slug as CategorySlug;const items=products.filter(p=>p.category===slug);return <main><section className="pageHero catalogueHero"><div className="container"><p className="eyebrow">Category</p><h1>{categories[slug]}</h1><p>{categoryCopy[slug]}</p><div className="heroActions"><Link className="btn primary btnLg" href="/request-quote">Request Category Quote <ArrowRight size={16}/></Link><Link className="btn btnLg" href="/products">All Products</Link></div></div></section><section className="section productsSection"><div className="container"><div className="sectionHead"><div><p className="overline">Available starting points</p><h2>Quote-ready options for {categories[slug].toLowerCase()}.</h2></div><p>Send quantities, preferred brand, deployment location and any existing BOQ for faster pricing support.</p></div><ProductGrid items={items}/></div></section></main>}
