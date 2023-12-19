import React, { useState, ReactNode } from "react";
import s from "./customDropdownMenu.module.scss";


interface CustomDropdownMenuProps {
  triggerContent: ReactNode;
  children: ReactNode;
}

const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({ triggerContent, children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.dropdownMenu}>
      <div className={s.trigger} onClick={handleToggle}> {triggerContent} </div>
      {isOpen && <div className={s.content}>{children}</div>}
    </div>
  );
};

interface MenuItemProps {
  children: ReactNode
  shortcut?: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, shortcut }) => (
  <div className={s.menuItem}>
    <span>{children}</span>
    {shortcut && <span className={s.shortcut}>{shortcut}</span>}
  </div>
)

interface MenuSeparatorProps {
}

export const MenuSeparator: React.FC<MenuSeparatorProps> = () => <div className={s.menuSeparator} />;

interface SubMenuProps {
  triggerContent: ReactNode;
  children: ReactNode;
}

export const SubMenu: React.FC<SubMenuProps> = ({ triggerContent, children }) => {
  return (
    <div className={s.subMenu}>
      <div className={s.subTrigger}>{triggerContent}</div>
      <div className={s.subContent}>{children}</div>
    </div>
  )
}

export default CustomDropdownMenu;
