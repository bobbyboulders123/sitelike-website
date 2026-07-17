import { Monitor, Smartphone, SlidersHorizontal } from 'lucide-react';
import mark from '../../assets/logos/sitelike-mark.png';
import { BrowserFrame } from '../ui/BrowserFrame';

export function HeroBuilderMockup() {
  return (
    <div className="gradient-border rounded-[28px] shadow-soft">
      <div className="rounded-[27px] bg-white p-3 sm:p-4">
        <BrowserFrame label="SiteLike builder concept" className="shadow-none">
          <div className="grid gap-4 p-4 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="rounded-2xl border border-[var(--color-soft-border)] bg-[var(--color-warm-white)] p-4">
              <div className="flex items-center gap-2">
                <img src={mark} alt="" className="h-7 w-7 rounded-lg object-cover" />
                <span className="text-sm font-extrabold">SiteLike</span>
                <span className="ml-auto rounded-full border border-[var(--color-border)] bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-muted)]">
                  Product concept
                </span>
              </div>
              <label className="mt-5 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Prompt</label>
              <div className="mt-2 rounded-2xl border border-[var(--color-border)] bg-white p-3 text-xs leading-5 text-[var(--color-body)]">
                Create a modern website for a locally owned landscaping company. Use natural colors, clear service sections,
                customer-friendly language, and a strong request-a-quote button.
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-white p-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-green)]" />
                <span className="text-xs font-bold text-[var(--color-charcoal)]">Concept ready for review</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-[var(--color-body)]">
                <div className="rounded-xl bg-white p-2">Colors</div>
                <div className="rounded-xl bg-white p-2">Sections</div>
                <div className="rounded-xl bg-white p-2">Copy</div>
              </div>
            </aside>
            <section className="rounded-2xl border border-[var(--color-soft-border)] bg-white p-3">
              <div className="mb-3 flex items-center gap-2">
                <button type="button" className="focus-ring rounded-lg brand-gradient p-2 text-[var(--color-charcoal)]" aria-label="Desktop preview selected">
                  <Monitor className="h-4 w-4" />
                </button>
                <button type="button" className="focus-ring rounded-lg border border-[var(--color-border)] p-2 text-[var(--color-muted)]" aria-label="Mobile preview">
                  <Smartphone className="h-4 w-4" />
                </button>
                <SlidersHorizontal className="ml-auto h-4 w-4 text-[var(--color-muted)]" aria-hidden="true" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-[var(--color-border)]">
                <div className="bg-[#edf6e7] p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#527a22]">Evergreen Yard Co.</p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[var(--color-charcoal)]">Landscaping that makes home feel finished.</h3>
                  <button type="button" disabled className="mt-4 rounded-xl bg-[var(--color-charcoal)] px-4 py-2 text-xs font-bold text-white">
                    Request a Quote
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2 bg-white p-4">
                  {['Design', 'Maintenance', 'Seasonal'].map((item) => (
                    <div key={item} className="rounded-xl border border-[var(--color-soft-border)] p-3">
                      <div className="h-8 rounded-lg bg-[#edf6e7]" />
                      <p className="mt-2 text-[11px] font-bold">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[var(--color-warm-white)] p-4">
                  <div className="h-3 w-4/5 rounded-full bg-[var(--color-border)]" />
                  <div className="mt-2 h-3 w-2/3 rounded-full bg-[var(--color-soft-border)]" />
                </div>
              </div>
            </section>
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}
