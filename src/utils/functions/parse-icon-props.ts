type Args = {
  class?: string;
  size?: number | string;
  dynamic?: boolean;
  hover?: boolean;
};

export function parseIconProps({
  size,
  dynamic,
  class: className,
  hover,
}: Args) {
  let normalizedSize = size;
  if (typeof size === "number") normalizedSize = `${size}px`;

  let classNames = ["app-icon"];

  if (hover) classNames.push("icon-hover");
  if (className) classNames.push(className);

  return {
    size,
    dynamic,
    className: classNames.join(" "),
  };
}
