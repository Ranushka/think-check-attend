import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from '../../../components/atoms/Button'

export default function ConfirmBox({
  isDialogOpen,
  setIsDialogOpen,
  setCurrentStep,
}: any) {
  const handleConfirmRestart = () => {
    setIsDialogOpen(false) // Close the dialog
    setCurrentStep(0)
  }

  const handleCancelRestart = () => {
    setIsDialogOpen(false) // Close the dialog
  }

  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleCancelRestart}
      className="fixed inset-0 z-40 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-primary-950/30 backdrop-blur-sm pointer-events-none" />
        <div className="relative bg-white w-96 rounded-lg p-4">
          <p>Are you validating a new conference?</p>
          <div className="mt-4 flex justify-end">
            <Button
              variant="primary"
              onClick={handleConfirmRestart}
              className="mr-4"
            >
              Yes
            </Button>
            <Button variant="secondary" onClick={handleCancelRestart}>
              No
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
