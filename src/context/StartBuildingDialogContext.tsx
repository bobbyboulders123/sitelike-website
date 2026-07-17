/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';

interface StartBuildingDialogValue {
  openStartBuildingDialog: () => void;
}

const StartBuildingDialogContext = createContext<StartBuildingDialogValue | null>(null);

export function StartBuildingDialogProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const openStartBuildingDialog = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ openStartBuildingDialog }), [openStartBuildingDialog]);

  return (
    <StartBuildingDialogContext.Provider value={value}>
      {children}
      <Modal
        isOpen={isOpen}
        title="SiteLike is getting ready."
        description="The builder is not live yet. Soon, you'll be able to describe your idea and turn it into a polished website."
        primaryLabel="Got it"
        onPrimary={close}
        onClose={close}
        labelledBy="start-building-title"
        describedBy="start-building-description"
        secondary={
          <Button
            variant="secondary"
            onClick={() => {
              close();
              navigate('/contact');
            }}
          >
            Contact us
          </Button>
        }
      />
    </StartBuildingDialogContext.Provider>
  );
}

export function useStartBuildingDialog() {
  const context = useContext(StartBuildingDialogContext);
  if (!context) throw new Error('useStartBuildingDialog must be used inside StartBuildingDialogProvider');
  return context;
}
