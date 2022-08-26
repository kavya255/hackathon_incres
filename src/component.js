import React, { startTransition } from "react";
export const TextComponent = ({
    label,
    styleProps,
    isMandatory,
    children,
    CustomTag = "div",
  }) => (
    <CustomTag style={styleProps}>
      {label}
      {isMandatory && <span>*</span>}
      {children}
    </CustomTag>
  );
  