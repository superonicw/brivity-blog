import { Button, Modal } from 'designSystem'

interface ConfirmModalProps {
  title: string
  onOk: () => void
  onCancel: () => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  onOk,
  onCancel,
}) => {
  return (
    <Modal onClose={onCancel}>
      <div>{title}</div>
      <div className="flex justify-end gap-4 mt-4">
        <Button label="Cancel" size="xs" onClick={onCancel} />
        <Button label="Okay" size="xs" theme="danger" onClick={onOk} />
      </div>
    </Modal>
  )
}

export default ConfirmModal
