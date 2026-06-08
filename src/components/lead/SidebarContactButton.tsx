"use client"

export function SidebarContactButton() {
  return (
    <button 
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event("open-lead-popup"));
        }
      }}
      className="w-full bg-white text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
    >
      Get Expert Help
    </button>
  )
}
