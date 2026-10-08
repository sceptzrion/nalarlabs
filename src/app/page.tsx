'use client';

import React, { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-zinc-100 selection:bg-amber-500/20 selection:text-amber-200">
      {/* Background Subtle Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Navigation */}
      <header className="relative z-10 border-b border-zinc-800/80 bg-[#0c0d0e]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-lg tracking-tight">Nalar Labs</span>
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-zinc-700/60 bg-zinc-800/40 text-zinc-400">
              Stealth
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#architecture" 
              className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors hidden sm:inline-block"
            >
              Architecture
            </a>
            <a 
              href="#contact" 
              className="text-sm px-3.5 py-1.5 rounded-md border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400">Agentic Reasoning & Cognitive Workflows</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-zinc-100 max-w-3xl mx-auto leading-[1.12]">
            Deterministic logic meets frontier reasoning.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Nalar Labs develops orchestration primitives and reliable reasoning pipelines for complex operational data. Built to turn generative intelligence into production-grade systems.
          </p>

          {/* Waitlist Form */}
          <div className="mt-10 max-w-md mx-auto">
            {submitted ? (
              <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/60 text-sm text-amber-200 font-mono">
                ✓ Access requested. We will reach out shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-sm transition-colors whitespace-nowrap"
                >
                  Request Access
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-zinc-500 font-mono">Private developer alpha preview.</p>
          </div>
        </section>

        {/* Technical Preview / Code Window */}
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/40">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="ml-2 text-xs font-mono text-zinc-400">nalar-pipeline.ts</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Claude 3.5 Sonnet Engine</span>
            </div>
            <pre className="p-5 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed overflow-x-auto">
              <code>{`import { NalarEngine, ReasoningPipeline } from "@nalar/core";

export const workflow = new ReasoningPipeline({
  model: "claude-3-5-sonnet",
  validation: "strict-deterministic",
  guardrails: { maxDepth: 4, fallback: "human-in-the-loop" }
});

// Run stateful multi-step enterprise agent
const result = await workflow.execute({
  task: "Synthesize operational logs & flag anomalies",
  source: enterpriseDb.connectors.readOnly()
});`}</code>
            </pre>
          </div>
        </section>

        {/* Feature / Architecture Grid */}
        <section id="architecture" className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-850">
          <div className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Foundations</h2>
            <p className="mt-2 text-2xl font-medium tracking-tight text-zinc-200">
              Engineered for precision over hallucination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-zinc-800/80 bg-zinc-900/20">
              <div className="text-zinc-400 font-mono text-xs mb-3">01 / RETRIEVAL</div>
              <h3 className="text-base font-medium text-zinc-100 mb-2">Context Graphs</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Stateful semantic memory structures designed to preserve complex multi-turn system context without context dilution.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-zinc-800/80 bg-zinc-900/20">
              <div className="text-zinc-400 font-mono text-xs mb-3">02 / EXECUTION</div>
              <h3 className="text-base font-medium text-zinc-100 mb-2">Deterministic Guardrails</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Compile-time schema validation ensuring language model outputs map directly into functional database actions safely.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-zinc-800/80 bg-zinc-900/20">
              <div className="text-zinc-400 font-mono text-xs mb-3">03 / ADAPTATION</div>
              <h3 className="text-base font-medium text-zinc-100 mb-2">Domain Connectors</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Specialized orchestration adaptors built for emerging enterprise software stacks across Southeast Asia.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="p-8 sm:p-12 rounded-2xl border border-zinc-800 bg-linear-to-b from-zinc-900/40 to-transparent">
            <h3 className="text-xl sm:text-2xl font-medium text-zinc-100">
              Building next-generation intelligent systems?
            </h3>
            <p className="mt-3 text-sm text-zinc-400 max-w-lg mx-auto">
              We collaborate with researchers, engineering teams, and enterprise partners.
            </p>
            <div className="mt-6">
              <a
                href="mailto:rizqiyr@nalarlabs.cloud"
                className="inline-flex items-center gap-2 text-sm font-mono text-zinc-200 hover:text-white px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-800/60 hover:bg-zinc-800 transition-all"
              >
                <span>rizqiyr@nalarlabs.cloud</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-8 relative z-10 text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span>© 2026 Nalar Labs. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span>nalarlabs.cloud</span>
            <span>•</span>
            <span className="text-emerald-500/90">All systems operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}