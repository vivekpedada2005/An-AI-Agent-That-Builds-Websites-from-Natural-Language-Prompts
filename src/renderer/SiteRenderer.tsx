import { useState, useEffect } from 'react';
import { type SiteBlueprint, type SiteSection } from '../engine/types';
import { NavbarTransparent, NavbarDark, NavbarMinimal, NavbarEcommerce, NavbarEnterprise, NavbarCreator, NavbarFloating, NavbarLuxury, NavbarSporty, NavbarWarm, NavbarGlass } from './Navbars';
import { HeroSplit, HeroCenter, HeroDashboard, HeroProduct, HeroPersonal, HeroEmergency, HeroImmersive, HeroEditorial, HeroBento, HeroStorefront, HeroAthletic, HeroTech, HeroLuxury, HeroWarm, HeroMinimalZen, HeroNetflix, HeroChatGPT, HeroApple, HeroCyberpunk, HeroAirbnb, HeroAmazon, HeroTesla } from './Heroes';
import { StatsBar, TrustLogos, FeaturesGrid, FeaturesAlternating, FeaturesBento, FeaturesCompact, IntegrationGrid } from './Sections';
import { PricingCards, PricingTable, TestimonialsGrid, TestimonialsQuote, TestimonialsSlider, CTABanner, CTACenter, FAQAccordion } from './Cards';
import { TeamCards, TeamMinimal, DoctorCards, DepartmentGrid, MenuCards, MenuGrid, ProductGrid, ProductFeatured, ProductCollections, GalleryGrid, GalleryMasonry, ContactForm, ContactSplit, TimelineSection, FooterFull, FooterMinimal, FooterEcommerce, NetflixSliders, ChatGPTLayout, AirbnbSearch, AmazonGrid, TeslaSections } from './MoreSections';
import { HeroBookstore, BookCategories, BookFeatured, BookGrid, BookNewArrivals } from './BookSections';

export const SiteRenderer = ({ blueprint }: { blueprint: SiteBlueprint }) => {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => { setCurrentPath('/'); }, [blueprint]);

  const currentPage = blueprint.pages.find(p => p.path === currentPath) || blueprint.pages[0];

  // Check if a page path actually exists in the blueprint before navigating
  const safeNav = (path: string) => {
    const exists = blueprint.pages.some(p => p.path === path);
    if (exists) setCurrentPath(path);
  };

  const renderSection = (section: SiteSection) => {
    const bp = blueprint;
    const nav = safeNav;
    const cur = currentPath;
    const pr = section.props;

    switch (section.type) {
      // ── NAVBARS ─────────────────────────────────────────────────────────────
      case 'NavbarTransparent': return <NavbarTransparent key={section.id} bp={bp} onNav={nav} cur={cur} />;
      case 'NavbarDark':        return <NavbarDark        key={section.id} bp={bp} onNav={nav} cur={cur} />;
      case 'NavbarMinimal':     return <NavbarMinimal     key={section.id} bp={bp} onNav={nav} cur={cur} />;
      case 'NavbarEcommerce':   return <NavbarEcommerce   key={section.id} bp={bp} onNav={nav} />;
      case 'NavbarEnterprise':  return <NavbarEnterprise  key={section.id} bp={bp} onNav={nav} cur={cur} />;
      case 'NavbarCreator':     return <NavbarCreator     key={section.id} bp={bp} onNav={nav} />;
      case 'NavbarFloating':    return <NavbarFloating    key={section.id} bp={bp} onNav={nav} />;
      case 'NavbarLuxury':      return <NavbarLuxury      key={section.id} bp={bp} onNav={nav} />;
      case 'NavbarSporty':      return <NavbarSporty      key={section.id} bp={bp} onNav={nav} />;
      case 'NavbarWarm':        return <NavbarWarm        key={section.id} bp={bp} onNav={nav} />;
      case 'NavbarGlass':       return <NavbarGlass       key={section.id} bp={bp} onNav={nav} />;

      // ── HEROES ──────────────────────────────────────────────────────────────
      case 'HeroSplit':      return <HeroSplit      key={section.id} bp={bp} onNav={nav} />;
      case 'HeroCenter':     return <HeroCenter     key={section.id} bp={bp} onNav={nav} />;
      case 'HeroDashboard':  return <HeroDashboard  key={section.id} bp={bp} onNav={nav} />;
      case 'HeroProduct':    return <HeroProduct    key={section.id} bp={bp} onNav={nav} />;
      case 'HeroPersonal':   return <HeroPersonal   key={section.id} bp={bp} onNav={nav} />;
      case 'HeroEmergency':  return <HeroEmergency  key={section.id} bp={bp} onNav={nav} />;
      case 'HeroImmersive':  return <HeroImmersive  key={section.id} bp={bp} onNav={nav} />;
      case 'HeroEditorial':  return <HeroEditorial  key={section.id} bp={bp} onNav={nav} />;
      case 'HeroBento':      return <HeroBento      key={section.id} bp={bp} onNav={nav} />;
      case 'HeroStorefront': return <HeroStorefront key={section.id} bp={bp} onNav={nav} />;
      case 'HeroAthletic':   return <HeroAthletic   key={section.id} bp={bp} onNav={nav} />;
      case 'HeroTech':       return <HeroTech       key={section.id} bp={bp} onNav={nav} />;
      case 'HeroLuxury':     return <HeroLuxury     key={section.id} bp={bp} onNav={nav} />;
      case 'HeroWarm':       return <HeroWarm       key={section.id} bp={bp} onNav={nav} />;
      case 'HeroMinimalZen': return <HeroMinimalZen key={section.id} bp={bp} onNav={nav} />;
      case 'HeroBookstore':  return <HeroBookstore  key={section.id} bp={bp} onNav={nav} />;
      case 'HeroNetflix':    return <HeroNetflix    key={section.id} bp={bp} onNav={nav} />;
      case 'HeroChatGPT':    return <HeroChatGPT    key={section.id} bp={bp} onNav={nav} />;
      case 'HeroApple':      return <HeroApple      key={section.id} bp={bp} onNav={nav} />;
      case 'HeroCyberpunk':  return <HeroCyberpunk  key={section.id} bp={bp} onNav={nav} />;
      case 'HeroAirbnb':     return <HeroAirbnb     key={section.id} bp={bp} onNav={nav} />;
      case 'HeroAmazon':     return <HeroAmazon     key={section.id} bp={bp} onNav={nav} />;
      case 'HeroTesla':      return <HeroTesla      key={section.id} bp={bp} onNav={nav} />;

      // ── FEATURES ────────────────────────────────────────────────────────────
      case 'StatsBar':           return <StatsBar           key={section.id} bp={bp} props={pr} />;
      case 'TrustLogos':         return <TrustLogos         key={section.id} bp={bp} />;
      case 'FeaturesGrid':       return <FeaturesGrid       key={section.id} bp={bp} props={pr} />;
      case 'FeaturesAlternating':return <FeaturesAlternating key={section.id} bp={bp} props={pr} />;
      case 'FeaturesBento':      return <FeaturesBento      key={section.id} bp={bp} />;
      case 'FeaturesCompact':    return <FeaturesCompact    key={section.id} bp={bp} props={pr} />;
      case 'IntegrationGrid':    return <IntegrationGrid    key={section.id} bp={bp} />;

      // ── PRICING / TESTIMONIALS / FAQ ─────────────────────────────────────
      case 'PricingCards':       return <PricingCards       key={section.id} bp={bp} onNav={nav} />;
      case 'PricingTable':       return <PricingTable       key={section.id} bp={bp} />;
      case 'TestimonialsGrid':   return <TestimonialsGrid   key={section.id} bp={bp} />;
      case 'TestimonialsQuote':  return <TestimonialsQuote  key={section.id} bp={bp} />;
      case 'TestimonialsSlider': return <TestimonialsSlider key={section.id} bp={bp} />;
      case 'CTABanner':          return <CTABanner          key={section.id} bp={bp} props={pr} onNav={nav} />;
      case 'CTACenter':          return <CTACenter          key={section.id} bp={bp} onNav={nav} />;
      case 'FAQAccordion':       return <FAQAccordion       key={section.id} bp={bp} />;

      // ── TEAM / DOCTORS / MENUS ────────────────────────────────────────────
      case 'TeamCards':       return <TeamCards       key={section.id} bp={bp} props={pr} />;
      case 'TeamMinimal':     return <TeamMinimal     key={section.id} bp={bp} />;
      case 'DoctorCards':     return <DoctorCards     key={section.id} bp={bp} onNav={nav} />;
      case 'DepartmentGrid':  return <DepartmentGrid  key={section.id} bp={bp} onNav={nav} />;
      case 'MenuCards':       return <MenuCards       key={section.id} bp={bp} />;
      case 'MenuGrid':        return <MenuGrid        key={section.id} bp={bp} />;

      // ── PRODUCTS ─────────────────────────────────────────────────────────
      case 'ProductGrid':        return <ProductGrid        key={section.id} bp={bp} />;
      case 'ProductFeatured':    return <ProductFeatured    key={section.id} bp={bp} props={pr} />;
      case 'ProductCollections': return <ProductCollections key={section.id} bp={bp} onNav={nav} />;

      // ── BOOKSTORE ─────────────────────────────────────────────────────────
      case 'BookGrid':        return <BookGrid        key={section.id} bp={bp} props={pr} onNav={nav} />;
      case 'BookFeatured':    return <BookFeatured    key={section.id} bp={bp} props={pr} onNav={nav} />;
      case 'BookCategories':  return <BookCategories  key={section.id} bp={bp} props={pr} onNav={nav} />;
      case 'BookNewArrivals': return <BookNewArrivals key={section.id} bp={bp} props={pr} onNav={nav} />;

      // ── GALLERY / CONTACT ─────────────────────────────────────────────────
      case 'GalleryGrid':    return <GalleryGrid    key={section.id} bp={bp} />;
      case 'GalleryMasonry': return <GalleryMasonry key={section.id} bp={bp} props={pr} />;
      case 'ContactForm':    return <ContactForm    key={section.id} bp={bp} props={pr} />;
      case 'ContactSplit':   return <ContactSplit   key={section.id} bp={bp} />;
      case 'TimelineSection':return <TimelineSection key={section.id} bp={bp} />;

      // ── ADVANCED CLONE SECTIONS ───────────────────────────────────────────
      case 'NetflixSliders': return <NetflixSliders key={section.id} />;
      case 'ChatGPTLayout':  return <ChatGPTLayout  key={section.id} bp={bp} />;
      case 'AirbnbSearch':   return <AirbnbSearch   key={section.id} />;
      case 'AmazonGrid':     return <AmazonGrid     key={section.id} />;
      case 'TeslaSections':  return <TeslaSections  key={section.id} />;

      // ── FOOTERS ────────────────────────────────────────────────────────────
      case 'FooterFull':      return <FooterFull      key={section.id} bp={bp} onNav={nav} />;
      case 'FooterMinimal':   return <FooterMinimal   key={section.id} bp={bp} onNav={nav} />;
      case 'FooterEcommerce': return <FooterEcommerce key={section.id} bp={bp} onNav={nav} />;

      default:
        return <div key={section.id} style={{ padding: 32, textAlign: 'center', color: blueprint.colors.muted, fontSize: 13 }}>Section: {section.type}</div>;
    }
  };

  return (
    <div style={{ background: blueprint.colors.bg, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      {currentPage.sections.map(renderSection)}
    </div>
  );
};
