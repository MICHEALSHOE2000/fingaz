import type {Metadata} from 'next';
import './globals.css';
import './compat.css';
import './premium.css';
import './enterprise.css';
import './detail.css';
import './user-images.css';
import {Footer,Navbar} from '@/components/ui';

export const metadata:Metadata={
 metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://fingaztech.netlify.app'),
 title:{default:'Fingaz Concept Technologies Ltd | Networking & Infrastructure Lagos',template:'%s | Fingaz Concept Technologies'},
 description:'Enterprise networking, wireless connectivity, CCTV, access control and technology procurement from Computer Village, Ikeja, Lagos, Nigeria.',
 keywords:['networking equipment Lagos','enterprise networking Nigeria','wireless access point Nigeria','CCTV equipment Lagos','network infrastructure company Nigeria','router supplier Lagos'],
 alternates:{canonical:'/'},
 openGraph:{siteName:'Fingaz Concept Technologies Ltd',type:'website',locale:'en_NG',title:'Fingaz Concept Technologies Ltd | Connectivity. Infrastructure. Security.',description:'Enterprise networking, wireless connectivity, surveillance and technology procurement for businesses across Nigeria.',images:[{url:'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&q=85&w=1600',width:1600,height:900,alt:'Enterprise technology infrastructure'}]},
 twitter:{card:'summary_large_image',title:'Fingaz Concept Technologies Ltd',description:'Connectivity. Infrastructure. Security.',images:['https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&q=85&w=1600']},
 robots:{index:true,follow:true}
};

export default function RootLayout({children}:{children:React.ReactNode}){const schema={
 '@context':'https://schema.org','@graph':[
 {'@type':'Organization','@id':'https://fingaztech.netlify.app/#organization',name:'Fingaz Concept Technologies Ltd',email:'fingazconcept@gmail.com',telephone:['+2348175916034','+2348113829826'],address:{'@type':'PostalAddress',streetAddress:'Suite 26, No. 5 Adepele Street, Computer Village',addressLocality:'Ikeja',addressRegion:'Lagos',addressCountry:'NG'}},
 {'@type':'LocalBusiness','@id':'https://fingaztech.netlify.app/#localbusiness',name:'Fingaz Concept Technologies Ltd',description:'Networking, connectivity, security and technology infrastructure company in Computer Village, Ikeja, Lagos.',email:'fingazconcept@gmail.com',telephone:'+2348175916034',address:{'@type':'PostalAddress',streetAddress:'Suite 26, No. 5 Adepele Street, Computer Village',addressLocality:'Ikeja',addressRegion:'Lagos',addressCountry:'NG'}}
 ]};return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><Navbar/>{children}<Footer/></body></html>}
