import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WalletButton from './components/WalletButton';
import * as wagmi from 'wagmi';

vi.mock('wagmi', async () => {
  const actual = await vi.importActual<typeof wagmi>('wagmi');
  return { ...actual, useAccount: vi.fn(), useDisconnect: vi.fn() };
});

vi.mock('@rainbow-me/rainbowkit', () => ({ ConnectButton: () => <div>Connect Wallet</div> }));

describe('WalletButton', () => {
  it('shows "Connesso" when connected', () => {
    (wagmi.useAccount as any).mockReturnValue({ isConnected: true });
    (wagmi.useDisconnect as any).mockReturnValue({ disconnect: vi.fn() });
    render(<WalletButton />);
    expect(screen.getByRole('button').textContent).toBe('Connesso');
  });

  it('shows connect button when not connected', () => {
    (wagmi.useAccount as any).mockReturnValue({ isConnected: false });
    render(<WalletButton />);
    expect(screen.getByText('Connect Wallet')).toBeTruthy();
  });

  it('disconnects on click', () => {
    const disconnect = vi.fn();
    (wagmi.useAccount as any).mockReturnValue({ isConnected: true });
    (wagmi.useDisconnect as any).mockReturnValue({ disconnect });
    render(<WalletButton />);
    fireEvent.click(screen.getByRole('button'));
    expect(disconnect).toHaveBeenCalled();
  });
});
