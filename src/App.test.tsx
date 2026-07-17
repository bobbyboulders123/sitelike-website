import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';

function renderApp(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe('SiteLike marketing site', () => {
  it('renders the homepage primary heading', () => {
    renderApp();
    expect(screen.getByRole('heading', { name: /Describe your idea\.\s*SiteLike builds the website\./i, level: 1 })).toBeInTheDocument();
  });

  it('opens the Start Building placeholder dialog', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getAllByRole('button', { name: /Start Building/i })[0]);
    expect(screen.getByRole('dialog', { name: /SiteLike is getting ready\./i })).toBeInTheDocument();
  });

  it('closes the Start Building dialog with Escape', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getAllByRole('button', { name: /Start Building/i })[0]);
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog', { name: /SiteLike is getting ready\./i })).not.toBeInTheDocument());
  });

  it('opens and closes an FAQ answer', async () => {
    const user = userEvent.setup();
    renderApp();
    const question = screen.getByRole('button', { name: /What is SiteLike\?/i });
    expect(question).toHaveAttribute('aria-expanded', 'true');
    await user.click(question);
    expect(question).toHaveAttribute('aria-expanded', 'false');
    await user.click(question);
    expect(screen.getByText(/turn a written description into a polished/i)).toBeInTheDocument();
  });

  it('shows validation errors for an invalid Contact form submission', async () => {
    const user = userEvent.setup();
    renderApp('/contact');
    await user.click(screen.getByRole('button', { name: /^Submit$/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/Please review/i);
    expect(screen.getByText(/Enter your name\./i)).toBeInTheDocument();
  });

  it('opens the not-sent contact dialog after valid form submission', async () => {
    const user = userEvent.setup();
    renderApp('/contact');
    await fillContactForm(user);
    await user.click(screen.getByRole('button', { name: /^Submit$/i }));
    expect(screen.getByRole('dialog', { name: /Contact form coming soon/i })).toBeInTheDocument();
    expect(screen.getByText(/Your message has not been sent/i)).toBeInTheDocument();
  });

  it('does not clear values after a valid Contact form submission', async () => {
    const user = userEvent.setup();
    renderApp('/contact');
    await fillContactForm(user);
    await user.click(screen.getByRole('button', { name: /^Submit$/i }));
    expect(screen.getByLabelText(/Name/i)).toHaveValue('Jordan Lee');
    expect(screen.getByLabelText(/Email/i)).toHaveValue('jordan@example.com');
    expect(screen.getByLabelText(/Message/i)).toHaveValue('I would like to learn about early access.');
  });
});

async function fillContactForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/Name/i), 'Jordan Lee');
  await user.type(screen.getByLabelText(/Email/i), 'jordan@example.com');
  await user.type(screen.getByLabelText(/Company/i), 'Northline');
  await user.selectOptions(screen.getByLabelText(/Reason for contacting/i), 'Early access');
  await user.type(screen.getByLabelText(/Message/i), 'I would like to learn about early access.');
}
