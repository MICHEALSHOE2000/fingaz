import Link from 'next/link';
import {ArrowRight,Building2,CheckCircle2,Headphones,Phone,Send,ShieldCheck,Truck} from 'lucide-react';
import {BrandStrip,ProductGrid} from '@/components/ui';
import {contact,industries,products,solutions,whatsapp} from '@/lib/data';
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
 ['Computer Village, Lagos','Local sourcing presence for Nigerian businesses'],
 ['RFQs & BOQs','Quotation support for equipment lists and project specs'],
 ['Infrastructure Focus','Networking, wireless, CCTV, access control and cabling'],
 ['Procurement Ready','Model, warranty, compatibility and availability checks'],
 ['After-Supply Support','Guidance for replacements, upgrades and support needs']
];

const categories=[
 {title:'Server Racks & Cabinets',copy:'4U to 42U wall-mount and floor-standing cabinets selected around equipment depth, airflow and project load.',href:'/category/server-racks',image:'/images/server-racks/42u-floor-standing-server-rack.webp',spec:'4U–42U / Wall / Floor',featured:true},
 {title:'Networking',copy:'Routers, switches, cabinets and LAN infrastructure for offices, sites and multi-branch teams.',href:'/category/networking',image:IMG.network,spec:'Routing / Switching / LAN'},
 {title:'Wireless Infrastructure',copy:'Access points, wireless links and Wi-Fi hardware selected around coverage, users and PoE.',href:'/category/wireless',image:IMG.wireless,spec:'Wi-Fi / APs / Wireless links'},
 {title:'CCTV & Surveillance',copy:'IP cameras, NVR-ready hardware and PoE switching for security projects and facilities.',href:'/category/security',image:IMG.cctv,spec:'IP cameras / NVR / PoE'},
 {title:'Routers & Gateways',copy:'Business connectivity, failover and routing hardware for dependable internet access.',href:'/products/tp-link-4g-lte-router',image:IMG.router,spec:'LTE / Gateway / Failover'},
 {title:'Switches & PoE',copy:'Wired network equipment for LAN, CCTV aggregation, access points and rack deployments.',href:'/products/cisco-24-port-business-switch',image:IMG.switches,spec:'24-port / PoE / Managed'},
 {title:'Structured Cabling',copy:'Cat6 cabling and accessories for clean installation, patching and long-term reliability.',href:'/category/computer-accessories',image:IMG.cables,spec:'Cat6 / Patch / Cabinets'}
];

const projects=[
 {title:'Office network refresh',copy:'Routers, switches, access points and structured cabling for growing business teams.'},
 {title:'Retail surveillance rollout',copy:'IP CCTV, PoE switching and NVR-ready hardware for stores and stock areas.'},
 {title:'Hotel and estate Wi-Fi',copy:'Managed access points and wireless coverage hardware for guests, staff and shared spaces.'}
];

const process=[
 ['01','Requirement review','Send your RFQ, BOQ, floor plan, device count or product list for a practical supply discussion.'],
 ['02','Model matching','Fingaz checks brand options, specifications, warranty position, compatibility and availability.'],
 ['03','Quotation','You receive a clear quote path for current pricing, quantities and suitable alternatives where needed.'],
 ['04','Supply support','Procurement conversations continue through delivery, replacement needs and future upgrades.']
];

const stock=[
 {image:'/images/stock/router-stock-02.jpg',title:'Routers and connectivity hardware'},
 {image:userImages.litebeam,title:'Wireless bridge and access hardware'},
 {image:'/images/stock/networking-stock-01.jpg',title:'Switching and network equipment'},
 {image:'/images/recent-stock/cisco-catalyst-9100ax-stock.webp',title:'Cisco Catalyst 9100AX Series — recent stock'},
 {image:'/images/recent-stock/mikrotik-groove-a52-ac-stock.webp',title:'MikroTik GrooveA 52 ac — recent stock'},
 {image:'/images/recent-stock/optical-power-meter-stock.webp',title:'Optical power meters — recent stock'}
];

const rackProducts=products.filter(product=>product.category==='server-racks');
const featuredProducts=products.filter(product=>product.featured&&product.category!=='server-racks').slice(0,6);

export default function Home(){return <main>
<section className="b2bHero"><div className="b2bHeroMedia" aria-hidden="true"><img src={IMG.hero} alt=""/><div/></div><div className="container b2bHeroGrid"><div className="b2bHeroCopy"><p className="eyebrow">Fingaz Concept Technologies Ltd - Lagos, Nigeria</p><h1>Infrastructure hardware sourcing for serious business networks.</h1><p>Fingaz supplies networking, server racks, wireless infrastructure, CCTV/surveillance, access control, structured cabling and technology procurement for Nigerian businesses, contractors and project teams.</p><div className="heroActions"><Link className="btn primary btnLg" href="/request-quote">Request a Quote <ArrowRight size={16}/></Link><a className="btn glassBtn btnLg" href={whatsapp('Hello Fingaz, I would like to discuss networking, server racks, CCTV, wireless or procurement requirements for a project.')}>WhatsApp Sales</a></div><div className="b2bHeroChecks"><span><CheckCircle2 size={15}/> RFQs, BOQs and product lists</span><span><CheckCircle2 size={15}/> Warranty and model confirmation</span><span><CheckCircle2 size={15}/> Lagos supply, Nigeria-focused support</span></div></div><aside className="b2bHeroPanel" aria-label="Fingaz contact and supply focus"><div><span>Core supply areas</span><b>Server racks</b><b>Networking</b><b>Wireless</b><b>CCTV</b><b>Cabling</b></div><div className="heroContact"><span>Main line</span><a href={`tel:${contact.mainLine}`}>{contact.mainLine}</a><span>Alternative</span><a href={`tel:${contact.alternativeLine}`}>{contact.alternativeLine}</a></div><Link href="/contact">Speak with sales <ArrowRight size={15}/></Link></aside></div></section>
<section className="trustStrip" aria-label="Fingaz credibility points"><div className="container">{trust.map(([title,copy])=><div key={title}><b>{title}</b><span>{copy}</span></div>)}</div></section>
<BrandStrip/>
<section className="section categorySection"><div className="container"><div className="sectionHead"><div><p className="overline">Product and service categories</p><h2>Infrastructure procurement, organized around real deployments.</h2></div><p>Browse the core areas Fingaz supports before sending a product list, site requirement or formal RFQ.</p></div><div className="categoryGrid">{categories.map(c=><Link className={`categoryTile ${c.featured?'featuredCategory':''}`} href={c.href} key={c.title}><div className="categoryImage"><img src={c.image} alt={c.title + ' hardware'}/></div><div><span className="categorySpec">{c.spec}</span><h3>{c.title}</h3><p>{c.copy}</p><b>Request category quote <ArrowRight size={14}/></b></div></Link>)}</div></div></section>
<section className="section rackSection"><div className="container"><div className="rackHeader"><div><p className="eyebrow">Server racks &amp; network cabinets</p><h2>One cabinet family. Six deployment scales.</h2></div><div><p>Choose a starting size, then let Fingaz confirm the right depth, mounting, airflow, PDU, accessories and delivery requirements for your equipment.</p><Link className="textLink lightLink" href="/category/server-racks">Explore the rack collection <ArrowRight size={15}/></Link></div></div><div className="rackGrid">{rackProducts.map((rack,index)=><Link className={`rackCard ${index===rackProducts.length-1?'rackCardTall':''}`} href={`/products/${rack.slug}`} key={rack.id}><div className="rackImage"><img src={rack.images[0]} alt={rack.imageAlt}/><span>{rack.specifications['Rack Height']}</span></div><div className="rackCardBody"><small>{rack.specifications.Mounting}</small><h3>{rack.name}</h3><p>{rack.shortDescription}</p><b>View cabinet <ArrowRight size={14}/></b></div></Link>)}</div><div className="rackBrief"><span>Before we quote</span><div><b>01 / Equipment list</b><p>Tell us what will go inside the rack.</p></div><div><b>02 / Depth &amp; mounting</b><p>Confirm device depth and wall or floor placement.</p></div><div><b>03 / Power &amp; cooling</b><p>Add the right PDU, fan, shelves and cable management.</p></div><Link className="btn light" href="/request-quote?product=Server%20Rack%20Cabinet">Send rack requirement <ArrowRight size={15}/></Link></div></div></section>
<section className="section productsSection"><div className="container"><div className="sectionHead"><div><p className="overline">Featured equipment</p><h2>Product cards built for quotation, not impulse buying.</h2></div><div><p>Representative products across networking, wireless, surveillance and accessories. Confirm exact models, warranty, availability and pricing during quotation.</p><Link className="textLink sectionLink" href="/products">View all products <ArrowRight size={15}/></Link></div></div><ProductGrid items={featuredProducts}/></div></section>
<section className="section processSection"><div className="container"><div className="sectionHead"><div><p className="overline">Service process</p><h2>A clearer path from requirement to supply.</h2></div><p>Fingaz helps business buyers move from a rough equipment need to a more confident procurement conversation.</p></div><div className="processGrid">{process.map(([n,title,copy])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
<section className="section rfqSection"><div className="container"><div className="rfqPanel"><div className="rfqContent"><p className="eyebrow">Procurement credibility</p><h2>Send the requirement. Fingaz helps source the right hardware.</h2><p>Share RFQs, BOQs, network requirements, equipment lists or project specifications. Fingaz can help align suitable networking, wireless, CCTV, access-control and accessory hardware for business purchasing.</p><div className="rfqList"><span><Send size={16}/> RFQs and equipment lists</span><span><Building2 size={16}/> Office and project requirements</span><span><ShieldCheck size={16}/> Security and network infrastructure</span><span><Truck size={16}/> Supply conversations across Nigeria</span></div><div className="supportNote"><Headphones size={18}/><p><b>Warranty and support messaging:</b> exact warranty terms are confirmed by model and supplier at quotation stage, with guidance for replacement, upgrade and after-supply support needs.</p></div><div className="heroActions"><Link className="btn light btnLg" href="/request-quote">Send Your RFQ <ArrowRight size={16}/></Link><a className="btn ghost btnLg" href={whatsapp('Hello Fingaz, I would like to send an RFQ or equipment list for a project.')}>WhatsApp Sales</a></div></div><div className="rfqImage"><img src={IMG.network} alt="Network infrastructure rack for business procurement"/><span>BOQ / PROCUREMENT / PROJECT SUPPLY</span></div></div></div></section>
<section className="section projectSection"><div className="container"><div className="sectionHead"><div><p className="overline">Project examples</p><h2>Typical infrastructure requests Fingaz can support.</h2></div><p>These examples reflect the kind of business requirements Fingaz is positioned to quote and supply.</p></div><div className="projectGrid">{projects.map((p,i)=><article key={p.title}><span>Example 0{i+1}</span><h3>{p.title}</h3><p>{p.copy}</p><Link className="textLink" href="/request-quote">Request similar quote <ArrowRight size={14}/></Link></article>)}</div></div></section>
<section className="section stockSection"><div className="container"><div className="sectionHead"><div><p className="overline">Recent stock &amp; sourcing proof</p><h2>Real hardware, documented from the supply floor.</h2></div><p>Recent Fingaz stock and representative sourcing examples. Exact units, product identifiers and quantities must be reconfirmed during enquiry.</p></div><div className="stockGrid">{stock.map((s,index)=><figure className={index>2?'recentStockCard':''} key={s.title}><img src={s.image} alt={s.title + ' sourcing example'}/><figcaption>{s.title}</figcaption></figure>)}</div></div></section>
<section className="section solutionsPreview"><div className="container"><div className="sectionHead darkHead"><div><p className="eyebrow">Supported industries</p><h2>Built for environments that depend on uptime, safety and clean procurement.</h2></div><Link className="textLink lightLink" href="/solutions">Explore all solutions <ArrowRight size={15}/></Link></div><div className="solutionCards">{solutions.slice(0,6).map(s=><Link href={'/solutions/'+s.slug} key={s.slug}><h3>{s.title}</h3><p>{s.summary}</p><span>View solution <ArrowRight size={14}/></span></Link>)}</div></div></section>
<section className="section industriesSection" id="industries"><div className="container"><div className="sectionHead"><div><p className="overline">Industries served</p><h2>For teams, facilities, contractors and procurement desks.</h2></div><p>Different environments create different infrastructure demands. Fingaz helps buyers discuss the right equipment mix before purchase.</p></div><div className="industryPills">{industries.map(i=><Link href="/request-quote" key={i.name}><span>{i.name}</span><small>{i.copy}</small></Link>)}</div></div></section>
<section className="finalCta"><div className="container"><div><p className="eyebrow">Ready to source hardware?</p><h2>Share your equipment list or project requirement.</h2></div><div className="ctaActions"><Link className="btn primary btnLg" href="/request-quote">Request a Quote <ArrowRight size={16}/></Link><a className="btn btnLg" href={`tel:${contact.mainLine}`}><Phone size={16}/> Call Fingaz</a></div></div></section>
</main>}
