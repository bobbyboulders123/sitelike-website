import { useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Modal } from '../components/ui/Modal';
import { usePageTitle } from '../hooks/usePageTitle';

interface FormValues {
  name: string;
  email: string;
  company: string;
  reason: string;
  message: string;
}

type Errors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: '', email: '', company: '', reason: '', message: '' };
const reasons = ['General question', 'Early access', 'Business inquiry', 'Partnership', 'Technical question', 'Other'];

export function ContactPage() {
  usePageTitle('Contact SiteLike');
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const reasonRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validate = () => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Enter your name.';
    if (!values.email.trim()) next.email = 'Enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email address.';
    if (!values.reason) next.reason = 'Choose a reason for contacting SiteLike.';
    if (values.message.trim().length < 12) next.message = 'Enter a message of at least 12 characters.';
    return next;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    const first = Object.keys(next)[0] as keyof Errors | undefined;
    if (first === 'name') {
      nameRef.current?.focus();
      return;
    }
    if (first === 'email') {
      emailRef.current?.focus();
      return;
    }
    if (first === 'reason') {
      reasonRef.current?.focus();
      return;
    }
    if (first === 'message') {
      messageRef.current?.focus();
      return;
    }
    setDialogOpen(true);
  };

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  return (
    <>
      <section className="section-pad bg-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-green)]">CONTACT</p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight sm:text-5xl">Let's talk about what you are building.</h1>
            <p className="mt-6 text-lg leading-8 text-[var(--color-body)]">Have a question about SiteLike, early access, or a future project? Use the form below.</p>
          </div>
          <form onSubmit={onSubmit} noValidate className="mt-10 max-w-3xl rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-soft sm:p-8">
            {Object.values(errors).some(Boolean) ? (
              <div role="alert" className="mb-6 rounded-2xl border border-[var(--color-orange)] bg-[#fff8ef] p-4 text-sm font-semibold text-[var(--color-charcoal)]">
                Please review the highlighted fields before continuing.
              </div>
            ) : null}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name} htmlFor="name">
                <input ref={nameRef} id="name" value={values.name} onChange={(e) => update('name', e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} className="field" />
              </Field>
              <Field label="Email" error={errors.email} htmlFor="email">
                <input ref={emailRef} id="email" type="email" value={values.email} onChange={(e) => update('email', e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className="field" />
              </Field>
              <Field label="Company, optional" htmlFor="company">
                <input id="company" value={values.company} onChange={(e) => update('company', e.target.value)} className="field" />
              </Field>
              <Field label="Reason for contacting" error={errors.reason} htmlFor="reason">
                <select ref={reasonRef} id="reason" value={values.reason} onChange={(e) => update('reason', e.target.value)} aria-invalid={Boolean(errors.reason)} aria-describedby={errors.reason ? 'reason-error' : undefined} className="field">
                  <option value="">Select a reason</option>
                  {reasons.map((reason) => <option key={reason}>{reason}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Message" error={errors.message} htmlFor="message" className="mt-5">
              <textarea ref={messageRef} id="message" rows={6} value={values.message} onChange={(e) => update('message', e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} className="field resize-y" />
            </Field>
            <Button type="submit" className="mt-6">Submit</Button>
            <p className="mt-4 text-sm font-semibold text-[var(--color-muted)]">This preview form does not send messages yet.</p>
          </form>
        </Container>
      </section>
      <Modal
        isOpen={dialogOpen}
        title="Contact form coming soon"
        description="Your message has not been sent because the SiteLike contact system is not connected yet. This placeholder will be replaced before launch."
        primaryLabel="Return to form"
        onPrimary={() => setDialogOpen(false)}
        onClose={() => setDialogOpen(false)}
        labelledBy="contact-dialog-title"
        describedBy="contact-dialog-description"
      />
    </>
  );
}

function Field({ label, htmlFor, error, children, className = '' }: { label: string; htmlFor: string; error?: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-extrabold text-[var(--color-charcoal)]">{label}</label>
      {children}
      {error ? <p id={`${htmlFor}-error`} className="mt-2 text-sm font-semibold text-[#9a4a00]">{error}</p> : null}
    </div>
  );
}
