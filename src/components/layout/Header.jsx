import { Menu, Rocket, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../common/Logo.jsx";

export default function Header({ activePage, isLoading, navItems, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [activePage]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const handleNavigate = (pageId) => {
    setMenuOpen(false);
    onNavigate(pageId);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-neutral-900/48 text-white backdrop-blur-md">
      <div className="relative mx-auto flex min-h-24 w-full max-w-6xl items-center justify-between px-5 py-2">
        <Logo onClick={() => handleNavigate("home")} />

        <nav className="hidden items-center gap-7 text-[15px] font-bold uppercase md:flex">
          {navItems.slice(0, -1).map((item) => (
            <NavButton
              active={activePage === item.id}
              disabled={isLoading}
              item={item}
              key={item.id}
              onNavigate={handleNavigate}
            />
          ))}
          <button
            type="button"
            disabled={isLoading}
            onClick={() => handleNavigate("contact")}
            className={`inline-flex items-center gap-2 rounded-md border border-white/85 px-4 py-2 leading-none transition duration-300 hover:bg-white hover:text-neutral-700 hover:shadow-[0_10px_24px_rgb(0_0_0_/_22%)] ${
              activePage === "contact" ? "bg-white text-neutral-700" : ""
            }`}
          >
            <Rocket size={17} fill="currentColor" />
            Contact
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`mobile-menu-trigger ${menuOpen ? "is-hidden" : ""}`}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>

        {menuOpen ? (
          <div className="mobile-menu-panel md:hidden">
            <div className="flex min-h-24 items-center justify-between px-6 py-3">
              <Logo onClick={() => handleNavigate("home")} />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-white/80"
                aria-label="Close menu"
              >
                <X size={25} />
              </button>
            </div>
            <nav className="mx-auto flex min-h-[calc(100dvh-96px)] w-full max-w-md flex-col justify-center px-7 pb-10">
              <div className="grid gap-3 text-base font-bold uppercase">
                {navItems.map((item) => (
                  <button
                    type="button"
                    disabled={isLoading}
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`flex min-h-14 items-center justify-between rounded-md px-4 py-4 text-left transition ${
                      activePage === item.id
                        ? "bg-white text-neutral-700"
                        : "bg-white/0 text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    {item.id === "contact" ? <Rocket size={17} fill="currentColor" /> : null}
                  </button>
                ))}
              </div>
              <p className="sans-copy mt-10 border-t border-white/20 pt-6 text-sm leading-6 text-white/80">
                Technology enabled business solutions for teams that need practical, high-quality delivery.
              </p>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function NavButton({ active, disabled, item, onNavigate }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onNavigate(item.id)}
      className={`border-b-2 pb-1 leading-none transition duration-300 hover:border-white hover:text-white ${
        active ? "border-white" : "border-transparent"
      }`}
    >
      {item.label}
    </button>
  );
}
