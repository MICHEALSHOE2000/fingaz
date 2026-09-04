import Link from 'next/link';
import {ArrowRight,ClipboardCheck,ShieldCheck,Truck} from 'lucide-react';
import {ProductFilter} from '@/components/ui';

const proof=[
 {title:'RFQ-ready catalogue',copy:'Filter products, compare broad specifications and request current price or availability.'},
 {title:'Project quantity support',copy:'Built for BOQs, office rollouts, CCTV projects and contractor procurement lists.'},
 {title:'Warranty confirmation',copy:'Confirm model, supplier warranty and replacement guidance before purchase.'}
];

export default function Page(){return <main><section className="pageHero catalogueHero"><div className="container"><p className="eyebrow">Fingaz product catalogue</p><h1>Server racks, networking, wireless, surveillance and cabling hardware.</h1><p>Browse representative equipment, then request a current quote for exact model, quantity, warranty, availability and delivery requirements.</p><div className="heroActions"><Link className="btn primary btnLg" href="/request-quote">Send RFQ <ArrowRight size={16}/></Link><Link className="btn btnLg" href="/contact">Talk to Sales</Link></div></div></section><section className="catalogueProof"><div className="container">{proof.map((p,i)=><article key={p.title}>{i===0?<ClipboardCheck/>:i===1?<Truck/>:<ShieldCheck/>}<h2>{p.title}</h2><p>{p.copy}</p></article>)}</div></section><section className="section productsSection"><div className="container"><div className="sectionHead"><div><p className="overline">Products</p><h2>Find the right hardware category.</h2></div><p>Use this catalogue as a starting point. Fingaz confirms current market availability, specs and alternatives during quotation.</p></div><ProductFilter/></div></section></main>}
