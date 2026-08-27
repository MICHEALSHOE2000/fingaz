import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight,Building2,CheckCircle2,MapPin,Phone,Send,ShieldCheck,Truck} from 'lucide-react';
import {BrandStrip,ProductGrid} from '@/components/ui';
import {industries,products,solutions,whatsapp} from '@/lib/data';
import {userImages} from '@/lib/user-images';

const IMG={
 hero:'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&q=85&w=1800',
 network:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=82&w=1400',
 router:'https://images.unsplash.com/photo-1702895742107-35bebf49ce8b?auto=format&fit=crop&q=82&w=1200',
 switches:'/images/products/cisco-catalyst-1200-24-port-switch.webp',
 cables:'/images/products/d-link-cat6-utp-cable-roll.webp',
 cctv:'/images/products/hikvision-acusense-ip-dome-camera.webp',
 wireless:'/images/products/ubiquiti-unifi-u6-plus-access-point.webp'
};

const trust=[
 ['Computer Village, Lagos','Local technology market presence'],
 ['Project & RFQ Support','Send BOQs, lists and requirements'],
 ['Business Supply','For offices, contractors and teams'],
 ['Hardware Sourcing','Networking, wireless and security'],
 ['Nationwide Support','Supply conversations across Nigeria']
];

const categories=[
 {title:'Networking',copy:'Routers, switching and network infrastructure for offices and projects.',href:'/category/networking',image:IMG.network},
 {title:'Wireless',copy:'Access points and wireless equipment selected around coverage and users.',href:'/category/wireless',image:IMG.wireless},
 {title:'Security & CCTV',copy:'IP surveillance hardware for offices, retail, estates and facilities.',href:'/category/security',image:IMG.cctv},
 {title:'Routers & Gateways',copy:'Business connectivity, failover and routing hardware for reliable networks.',href:'/products/tp-link-4g-lte-router',image:IMG.router},
 {title:'Switches',copy:'Wired network equipment for LAN, CCTV aggregation and cabinets.',href:'/products/cisco-24-port-business-switch',image:IMG.switches},
 {title:'Cables & Accessories',copy:'Structured cabling and accessories for dependable installations.',href:'/category/computer-accessories',image:IMG.cables}
];

const stock=[
 {image:'/images/stock/router-stock-02.jpg',title:'Networking hardware'},
 {image:userImages.litebeam,title:'Wireless hardware'},
 {image:'/images/stock/networking-stock-01.jpg',title:'Equipment sourcing example'}
];

export default function Home(){return <main>
<section className="b2bHero"><div className="b2bHeroMedia" aria-hidden="true"><img src={IMG.hero} alt=""/><div/></div><div className="container b2bHeroGrid"><div className="b2bHeroCopy"><p className="eyebrow">Computer Village · Lagos · Nigeria</p><h1>Enterprise Networking, Security & IT Infrastructure Supply</h1><p>Fingaz Concept Technologies Ltd supplies networking, wireless, surveillance and IT hardware for businesses, installers, contractors and project teams that need dependable procurement support.</p><div className="heroActions"><Link className="btn primary btnLg" href="/request-quote">Request a Quote <ArrowRight size={16}/></Link><Link className="btn glassBtn btnLg" href="/products">Explore Products</Link></div><div className="b2bHeroChecks"><span><CheckCircle2 size={15}/> RFQs, BOQs & equipment lists</span><span><CheckCircle2 size={15}/> Networking, wireless, CCTV & accessories</span><span><CheckCircle2 size={15}/> Business and project supply support</span></div></div><aside className="b2bHeroPanel" aria-label="Fingaz supply focus"><div><span>Core supply areas</span><b>Networking</b><b>Wireless</b><b>Security</b><b>Cables</b></div><Link href="/contact">Speak with sales <ArrowRight size={15}/></Link></aside></div></section>
<section className="trustStrip" aria-label="Fingaz credibility points"><div className="container">{trust.map(([title,copy])=><div key={title}><b>{title}</b><span>{copy}</span></div>)}</div></section>
<BrandStrip/>
<section className="section categorySection"><div className="container"><div className="sectionHead"><div><p className="overline">Product categories</p><h2>Infrastructure hardware, organized for business buying.</h2></div><p>Scan the major supply areas Fingaz supports before sending a product list, RFQ or project requirement.</p></div><div className="categoryGrid">{categories.map(c=><Link className="categoryTile" href={c.href} key={c.title}><div className="categoryImage"><img src={c.image} alt={c.title + ' hardware'}/></div><div><h3>{c.title}</h3><p>{c.copy}</p><span>View category <ArrowRight size={14}/></span></div></Link>)}</div></div></section>
<section className="section productsSection"><div className="container"><div className="sectionHead"><div><p className="overline">Featured equipment</p><h2>Clean product sourcing for serious deployments.</h2></div><div><p>Representative products across networking, wireless, surveillance and accessories. Confirm exact models, warranty, availability and pricing during quotation.</p><Link className="textLink sectionLink" href="/products">View all products <ArrowRight size={15}/></Link></div></div><ProductGrid items={products}/></div></section>
<section className="section rfqSection"><div className="container"><div className="rfqPanel"><div className="rfqContent"><p className="eyebrow">Procurement & RFQ support</p><h2>Send the requirement. Fingaz helps source the right hardware.</h2><p>Send RFQs, BOQs, network requirements, equipment lists or project specifications. Fingaz can help align suitable networking, wireless, CCTV, access-control and accessory hardware for business purchasing.</p><div className="rfqList"><span><Send size={16}/> RFQs and equipment lists</span><span><Building2 size={16}/> Office and project requirements</span><span><ShieldCheck size={16}/> Security and network infrastructure</span><span><Truck size={16}/> Supply conversations across Nigeria</span></div><div className="heroActions"><Link className="btn light btnLg" href="/request-quote">Send Your RFQ <ArrowRight size={16}/></Link><a className="btn ghost btnLg" href={whatsapp('Hello Fingaz, I would like to send an RFQ or equipment list for a project.')}>WhatsApp Sales</a></div></div><div className="rfqImage"><img src={IMG.network} alt="Network infrastructure rack for business procurement"/><span>BOQ / PROCUREMENT / PROJECT SUPPLY</span></div></div></div></section>
<section className="section stockSection"><div className="container"><div className="sectionHead"><div><p className="overline">Real hardware examples</p><h2>Real hardware. Real supply capability.</h2></div><p>Examples of networking, wireless and project hardware Fingaz sources and supplies. Exact available stock and models should be confirmed during enquiry.</p></div><div className="stockGrid">{stock.map(s=><figure key={s.title}><img src={s.image} alt={s.title + ' sourcing example'}/><figcaption>{s.title}</figcaption></figure>)}</div></div></section>
<section className="section solutionsPreview"><div className="container"><div className="sectionHead darkHead"><div><p className="eyebrow">Business solutions</p><h2>Support for the environments that depend on uptime.</h2></div><Link className="textLink lightLink" href="/solutions">Explore all solutions <ArrowRight size={15}/></Link></div><div className="solutionCards">{solutions.slice(0,6).map(s=><Link href={'/solutions/'+s.slug} key={s.slug}><h3>{s.title}</h3><p>{s.summary}</p><span>View solution <ArrowRight size={14}/></span></Link>)}</div></div></section>
<section className="section industriesSection" id="industries"><div className="container"><div className="sectionHead"><div><p className="overline">Industries served</p><h2>Built for teams, facilities and procurement desks.</h2></div><p>Different environments create different infrastructure demands. Fingaz helps buyers discuss the right equipment mix before purchase.</p></div><div className="industryPills">{industries.map(i=><Link href="/request-quote" key={i.name}><span>{i.name}</span><small>{i.copy}</small></Link>)}</div></div></section>
<section className="finalCta"><div className="container"><div><p className="eyebrow">Ready to source hardware?</p><h2>Share your equipment list or project requirement.</h2></div><div className="ctaActions"><Link className="btn primary btnLg" href="/request-quote">Request a Quote <ArrowRight size={16}/></Link><a className="btn btnLg" href="tel:08175916034"><Phone size={16}/> Call Fingaz</a></div></div></section>
</main>}
