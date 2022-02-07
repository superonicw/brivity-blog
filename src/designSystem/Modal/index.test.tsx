import { render } from '@testing-library/react'
import { Modal } from '.'

describe('Modal', () => {
  it('renders modal', () => {
    render(<Modal onClose={() => {}}>Test</Modal>)
  })
})
