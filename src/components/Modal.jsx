import { createPortal } from "react-dom";
import { Button } from "./Button";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-dark">{title}</h3>
          <Button variant="outline" className="px-3 py-2 text-sm" onClick={onClose}>
            Закрыть
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}
