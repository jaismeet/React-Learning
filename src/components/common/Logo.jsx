export default function Logo({ large = false, onClick }) {
  const content = (
    <>
      <svg
        viewBox="0 0 120 100"
        className={large ? "h-28 w-32" : "h-16 w-20"}
        role="img"
        aria-label="Axtrum logo mark"
      >
        <path d="M54 11 L16 82" stroke="#86c440" strokeWidth="15" strokeLinecap="round" fill="none" />
        <path
          d="M55 10 C71 31 83 50 94 76"
          stroke="#f1ca08"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M25 78 C48 55 75 56 99 79"
          stroke="#4596c5"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className={`sans-copy -mt-5 font-bold lowercase tracking-normal text-white ${large ? "text-4xl" : "text-xl"}`}>
        a<span className="text-[#86c440]">x</span>trum
      </span>
    </>
  );

  if (!onClick) {
    return <div className="inline-flex flex-col items-center gap-1 logo-shadow">{content}</div>;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex flex-col items-center gap-1 logo-shadow"
      aria-label="Axtrum home"
    >
      {content}
    </button>
  );
}
