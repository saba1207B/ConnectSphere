/*
Copyright (c) 2026 Sabareesh M (saba1207B). All Rights Reserved.

This source code is proprietary and confidential.

Unauthorized copying, redistribution, modification, or use — including
any use for artificial intelligence / machine learning training —
is strictly prohibited.

See the LICENSE and COPYRIGHT files in the repository root for full terms.
*/

import React from 'react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/landing/HeroSection';
import { FeatureSection } from '../components/landing/FeatureSection';
import { ShowcaseSection } from '../components/landing/ShowcaseSection';
import { SecuritySection } from '../components/landing/SecuritySection';
import { HowItWorksSection } from '../components/landing/HowItWorksSection';
import { TestimonialsSection } from '../components/landing/TestimonialsSection';
import { FaqSection } from '../components/landing/FaqSection';
import { PricingSection } from '../components/landing/PricingSection';
import { FinalCtaSection } from '../components/landing/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-warm-mesh overflow-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <FeatureSection />
        <ShowcaseSection />
        <SecuritySection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FaqSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};
