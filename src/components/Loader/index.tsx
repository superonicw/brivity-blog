import { Spinner } from 'designSystem'

const Loader: React.FC = () => (
  <div className="absolute inset-0 rounded bg-slate-400 bg-opacity-25">
    <Spinner className="scale-150 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-800" />
  </div>
)

export default Loader
