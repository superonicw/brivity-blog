export interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-10">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose} />

      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        p-8 bg-white rounded`}
      >
        <span
          className={`flex items-center justify-center
          absolute right-2 top-2 w-6 h-6 bg-sky-500 text-white
          rounded-full cursor-pointer`}
          role="button"
          onClick={onClose}
        >
          X
        </span>
        {children}
      </div>
    </div>
  )
}
