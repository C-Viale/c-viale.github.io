type Args = {
  className?: string;
  size?: number | string;
  dynamic?: boolean;
  hover?: boolean;
};

export function parseIconProps({ size, dynamic, className, hover }: Args) {
  let normalizedSize = size;
  if (typeof size === "number") normalizedSize = `${size}px`;

  let classNames = ["app-icon"];

  if (hover) classNames.push("icon-hover");
  if (className) classNames.push(className);

  return {
    size: normalizedSize,
    dynamic,
    className: classNames.join(" "),
  };
}
