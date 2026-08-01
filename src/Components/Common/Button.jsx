import { useState } from "react";

export default function Button({
  children,
  to,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  type = "button",
  className = "",
  ariaLabel,
  icon = "arrow",
  iconPosition = "left",
  variant = "solid",
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const Component = to ? "a" : "button";
  const componentProps = to ? { href: to, onClick } : { type, onClick };
  const iconOnRight = iconPosition === "right";
  const outlined = variant === "outline";
  const collapsedFill = iconOnRight
    ? "inset(0 0 0 calc(100% - 31px) round 5px)"
    : "inset(0 calc(100% - 31px) 0 0 round 5px)";

  return (
    <Component
      {...componentProps}
      {...props}
      onMouseEnter={(event) => {
        setHovered(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(false);
        onMouseLeave?.(event);
      }}
      onFocus={(event) => {
        setHovered(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setHovered(false);
        onBlur?.(event);
      }}
      data-magnetic
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      className={`group relative isolate inline-flex h-[42px] max-w-full min-w-0 cursor-pointer items-center gap-3 overflow-hidden rounded-md p-1 text-[13px] font-semibold ${outlined ? "border border-[#ff4828] bg-transparent" : "border-0 bg-white"} ${iconOnRight ? "flex-row-reverse pr-1 pl-4" : "pr-4"} ${className}`}
    >
      <span
        className="absolute inset-1 -z-10 rounded-[5px] bg-[#ff4b2e] transition-[clip-path] duration-500 ease-[cubic-bezier(.76,0,.24,1)]"
        style={{ clipPath: hovered ? "inset(0 round 5px)" : collapsedFill }}
      />
      <span className="relative grid size-[31px] shrink-0 place-items-center overflow-hidden text-[21px] text-white">
        {icon === "arrow" ? (
          <>
            <i
              className={`absolute not-italic transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] ${hovered ? "translate-x-7 -translate-y-7" : ""}`}
            >
              {"\u2197"}
            </i>
            <i
              className={`absolute not-italic transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] ${hovered ? "translate-x-0 translate-y-0" : "-translate-x-7 translate-y-7"}`}
            >
              {"\u2197"}
            </i>
          </>
        ) : (
          <span
            className={`flex h-[14px] w-[18px] flex-col items-center justify-center gap-[3px] transition-transform duration-500 ${hovered ? "rotate-180" : ""}`}
          >
            <b className="block h-[1.5px] w-4 bg-white" />
            <b
              className={`block h-[1.5px] bg-white transition-all duration-300 ${hovered ? "w-4" : "w-2.5"}`}
            />
            <b className="block h-[1.5px] w-4 bg-white" />
          </span>
        )}
      </span>
      <span
        className="relative z-10 whitespace-nowrap transition-colors duration-300"
        style={{ color: hovered ? "#fff" : outlined ? "#ff4828" : "#111" }}
      >
        {children}
      </span>
    </Component>
  );
}
