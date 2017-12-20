import React from "react";
import Icon from "component/icon";
import classnames from "classnames";

const Link = props => {
  const {
    href,
    onClick: onClickProp,
    title,
    label,
    icon,
    iconRight,
    disabled,
    children,
    navigate,
    navigateParams,
    doNavigate,
    className,
    link,
    inverse,
    block,
    alt,
    circle,
    flat,
    noStyle,
    ...otherProps
  } = props;

  const combinedClassName = classnames(
    {
      btn: !noStyle,
      "btn--no-style": noStyle,
      "btn--primary": !noStyle && !alt,
      "btn--alt": alt,
      "btn--inverse": inverse,
      "btn--disabled": disabled,
      "btn--circle": circle,
      "btn--flat": flat,
    },
    className
  );

  const onClick =
    !props.onClick && navigate
      ? e => {
          e.stopPropagation();
          doNavigate(navigate, navigateParams || {});
        }
      : onClickProp;

  const content = (
    <span>
      {icon && <Icon icon={icon} fixed={true} />}
      {label && <span className="btn__label">{label}</span>}
      {children && children}
      {iconRight && <Icon icon={iconRight} fixed={true} />}
    </span>
  );

  return href ? (
    <a className={combinedClassName} href={href} title={title}>
      {content}
    </a>
  ) : (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {content}
    </button>
  );
};

export default Link;
