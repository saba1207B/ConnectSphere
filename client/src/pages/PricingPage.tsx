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
import { PricingSection } from '../components/landing/PricingSection';

export const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col justify-between pt-16">
      <Navigation />
      <main className="flex-1">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};
